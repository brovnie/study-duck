"use client";
import CountdownTimer from "@/components/UI/CountdownTimer";
import { useGetSession } from "@/hooks/queries/useGetSession";
import { useParams } from "next/navigation";
import React from "react";

const Counter = () => {
  const params = useParams();
  const sessionId = params.id as string;
  const { data, isLoading } = useGetSession(sessionId);
  const session = data?.session;
  console.log(data);
  const date = new Date(session.startingTime);
  date.setMinutes(date.getMinutes() + session.duration);

  return (
    <div className="bg-white flex flex-col gap-0 px-3 py-1 rounded-md text-nowrap">
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <CountdownTimer
          eventDate={date}
          queries={["user", "sessions", "planned-available", session.type]}
        />
      )}
    </div>
  );
};

export default Counter;
