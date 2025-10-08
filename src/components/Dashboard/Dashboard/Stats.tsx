import React from "react";
import Chart from "./Chart";

const Stats = () => {
  return (
    <div className="bg-white p-5 rounded-md mt-3 mx-5">
      <div className="flex flex-row gap-10 pt-1 pb-2">
        <div className="flex flex-col flex-1 gap-3 bg-amber-300 p-5 rounded-md text-center">
          <p className="text-3xl font-bold">100</p>
          <p className="text-lg">Sessions</p>
        </div>
        <div className="flex flex-col flex-1 gap-3 bg-violet-300 p-5 rounded-md text-center">
          <p className="text-3xl font-bold">10h</p>
          <p className="text-lg">Studying</p>
        </div>
        <div className="flex flex-col flex-1 gap-3 bg-amber-300 p-5 rounded-md text-center">
          <p className="text-3xl font-bold">6</p>
          <p className="text-lg">Friends</p>
        </div>
      </div>
      <Chart />
    </div>
  );
};

export default Stats;
