"use client";
import React from "react";
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

  return (
    <div className="h-[500px] w-[100%]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />

          <Bar
            dataKey="sessions"
            fill="#fcd34d"
            activeBar={<Rectangle fill="#a855f7" stroke="#a855f7" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
