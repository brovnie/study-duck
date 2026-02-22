"use client";
import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  eventDate: string | Date;
  queries: string[];
}

const CountdownTimer = ({ eventDate, queries }: CountdownTimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [isNow, setIsNow] = useState(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    const targetTime = new Date(eventDate).getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = targetTime - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeRemaining(0);
        setIsNow(true);
      } else {
        setTimeRemaining(diff);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  useEffect(() => {
    if (!isNow) return;

    const timeout = setTimeout(() => {
      setIsNow(false);
      queryClient.invalidateQueries({
        queryKey: queries,
        exact: true,
      });
    }, 5 * 60 * 1000);

    return () => clearTimeout(timeout);
  }, [isNow]);

  const formatTime = (time: number) => {
    const totalSeconds = Math.max(0, Math.floor(time / 1000));
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = totalSeconds % 60;

    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };
  const countdownResults = formatTime(timeRemaining);

  return isNow ? (
    <span className="font-bold">Now</span>
  ) : (
    <span>
      {countdownResults.days > 0 && `${countdownResults.days}d `}
      {countdownResults.hours > 0 && `${countdownResults.hours}h `}
      {countdownResults.minutes > 0 && `${countdownResults.minutes}m `}
      {countdownResults.minutes === 0 &&
        countdownResults.seconds > 0 &&
        `${countdownResults.seconds}s`}
    </span>
  );
};

export default CountdownTimer;
