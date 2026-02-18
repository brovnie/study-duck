"use client";
import React from "react";
import Chart from "./Chart";
import { useUser } from "@/context/UserContext";
import { useGetSessionsCount } from "@/hooks/queries/useGetSessionsCount";
import { useGetStudyTime } from "@/hooks/queries/useGetStudyTime";
import { formatMinutesToHours } from "@/lib/utils";
import { useCountFriends } from "@/hooks/queries/useContFriends";

const Stats = () => {
  const { user } = useUser();
  const sessionsCount = useGetSessionsCount(user?.id);
  const sessionsStudyTime = useGetStudyTime(user?.id);
  const totalFriends = useCountFriends(user?.id);

  return (
    <div className="bg-white p-5 rounded-md mt-3 flex-1 w-full">
      <div className="flex flex-row gap-10 pt-1 pb-2">
        <div className="flex flex-col flex-1 gap-3 bg-amber-300 p-5 rounded-md text-center">
          <p className="text-3xl font-bold">{sessionsCount?.data?.total}</p>
          <p className="text-lg">
            {sessionsCount?.data?.total === 1 ? "Session" : "Sessions"}
          </p>
        </div>
        <div className="flex flex-col flex-1 gap-3 bg-violet-300 p-5 rounded-md text-center">
          <p className="text-3xl font-bold">
            {formatMinutesToHours(sessionsStudyTime?.data?.total)}
          </p>
          <p className="text-lg">Studying</p>
        </div>
        <div className="flex flex-col flex-1 gap-3 bg-amber-300 p-5 rounded-md text-center">
          <p className="text-3xl font-bold">{totalFriends.data?.total}</p>
          <p className="text-lg">
            {totalFriends.data?.total === 1 ? "Friend" : "Friends"}
          </p>
        </div>
      </div>
      <Chart />
    </div>
  );
};

export default Stats;
