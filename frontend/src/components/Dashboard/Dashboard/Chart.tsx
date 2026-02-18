"use client";
import { useUser } from "@/context/UserContext";
import { useGetSessionsWeek } from "@/hooks/queries/getGetSessionsWeek";
import React, { use } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Monday",
    sessions: 2,
  },
  {
    name: "Tuesday",
    sessions: 5,
  },
  {
    name: "Wednesday",
    sessions: 1,
  },
  {
    name: "Thursday",
    sessions: 2,
  },
  {
    name: "Friday",
    sessions: 3,
  },
  {
    name: "Saturday",
    sessions: 5,
  },
  {
    name: "Sunday",
    sessions: 6,
  },
];

interface CustomTooltipProps extends TooltipProps<number, string> {
  payload?: {
    name: string;
    value: number;
    color?: string;
  }[];
  label?: string;
  active?: boolean;
}

const Chart = () => {
  const CustomTooltip = (props: CustomTooltipProps) => {
    const { active, payload, label } = props;
    if (!active || !payload?.length) return null;

    return (
      <div className="bg-white p-2 rounded shadow-md">
        <p className="font-semibold">{label}</p>
        {payload.map((entry, index) => (
          <p key={index}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  };

  const { user } = useUser();
  const week = useGetSessionsWeek(user?.id);

  return (
    <div className="flex justify-center">
      <div className="h-[450px] w-full max-w-2xl">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={week?.data?.week}
            margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" tickMargin={10} />
            <YAxis width={20} />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="count"
              fill="#fcd34d"
              activeBar={<Rectangle fill="#a855f7" stroke="#a855f7" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
