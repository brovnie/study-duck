import React from "react";

const Stats = () => {
  return (
    <div className="bg-white p-5 rounded-md w-full">
      <div>
        <div className="flex flex-row justify-center items-center gap-3 ">
          <p className="text-2xl">
            Congratulation. You are a{" "}
            <span className="font-bold">Green Duck!</span>
          </p>
        </div>
        <p className="text-center mb-5">200 points to next level</p>
      </div>
      <div className="flex flex-row gap-10 pt-1 pb-2">
        <div className="flex flex-col flex-1 gap-3 bg-amber-300 p-5 rounded-md text-center">
          <p className="text-3xl font-bold">100</p>
          <p className="text-lg">Points</p>
        </div>
        <div className="flex flex-col flex-1 gap-3 bg-violet-300 p-5 rounded-md text-center">
          <p className="text-3xl font-bold">10</p>
          <p className="text-lg">Sessions</p>
        </div>
        <div className="flex flex-col flex-1 gap-3 bg-amber-300 p-5 rounded-md text-center">
          <p className="text-3xl font-bold">10h</p>
          <p className="text-lg">Studying</p>
        </div>
        <div className="flex flex-col flex-1 gap-3 bg-violet-300 p-5 rounded-md text-center">
          <p className="text-3xl font-bold">10</p>
          <p className="text-lg">Friends</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
