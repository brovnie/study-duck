import React from "react";

const Stats = () => {
  return (
    <div className="flex flex-row gap-5 pt-1 pb-2">
      <div className="flex flex-col flex-1 gap-3 bg-amber-300 p-5 rounded-md text-center">
        <p className="text-3xl font-bold">120</p>
        <p className="text-lg">Sessions</p>
      </div>
      <div className="flex flex-col flex-1 gap-3 bg-violet-300 p-5 rounded-md text-center">
        <p className="text-3xl font-bold">2</p>
        <p className="text-lg">Sessions together</p>
      </div>
      <div className="flex flex-col flex-1 gap-3 bg-amber-300 p-5 rounded-md text-center">
        <p className="text-3xl font-bold">300h</p>
        <p className="text-lg">Studing</p>
      </div>
      <div className="flex flex-col flex-1 gap-3 bg-violet-300 p-5 rounded-md text-center">
        <p className="text-3xl font-bold">6</p>
        <p className="text-lg">Friends</p>
      </div>
    </div>
  );
};

export default Stats;
