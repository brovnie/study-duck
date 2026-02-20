"use client";
import { useUser } from "@/context/UserContext";
import { useCountFriends } from "@/hooks/queries/useContFriends";
import { useGetLevel } from "@/hooks/queries/useGetLevel";
import { useGetPoints } from "@/hooks/queries/useGetPoints";
import { useGetSessionsCount } from "@/hooks/queries/useGetSessionsCount";
import { useGetStudyTime } from "@/hooks/queries/useGetStudyTime";
import { maxPoints } from "@/lib/utils";
import React from "react";

type UserProps = {
  userId: string;
};

const Stats = ({ userId }: UserProps) => {
  const { user: me } = useUser();
  const isMe = me?.id === userId;
  const points = useGetPoints(userId);
  const currentPoints = points?.data?.points;
  const max = maxPoints(currentPoints);
  const missingPoints = max?.points - currentPoints;
  const level = useGetLevel(userId);
  const sessionsCount = useGetSessionsCount(userId);
  const studyingTime = useGetStudyTime(userId);
  const totalFriends = useCountFriends(userId);

  return (
    <div className="bg-white p-5 rounded-md w-full">
      <div>
        <div className="flex flex-row justify-center items-center gap-3 ">
          <p className="text-2xl">
            {isMe && "Congratulation. You are a "}
            <span className="font-bold">
              {level?.data?.level || "Sorry Level is not found"}!
            </span>
          </p>
        </div>
        <p className="text-center mb-5">{missingPoints} points to next level</p>
      </div>
      <div className="flex flex-row gap-10 pt-1 pb-2">
        <div className="flex flex-col flex-1 gap-3 bg-amber-300 p-5 rounded-md text-center">
          <p className="text-3xl font-bold">{currentPoints}</p>
          <p className="text-lg">Points</p>
        </div>
        <div className="flex flex-col flex-1 gap-3 bg-violet-300 p-5 rounded-md text-center">
          <p className="text-3xl font-bold">
            {sessionsCount?.data?.total || "N/A"}
          </p>
          <p className="text-lg">Sessions</p>
        </div>
        <div className="flex flex-col flex-1 gap-3 bg-amber-300 p-5 rounded-md text-center">
          <p className="text-3xl font-bold">
            {studyingTime?.data?.total || "N/A"}
          </p>
          <p className="text-lg">Studying</p>
        </div>
        <div className="flex flex-col flex-1 gap-3 bg-violet-300 p-5 rounded-md text-center">
          <p className="text-3xl font-bold">{totalFriends.data?.total}</p>
          <p className="text-lg">Friends</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
