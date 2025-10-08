import Sidebar from "@/components/Dashboard/Sidebar";
import TopBar from "@/components/Dashboard/TopBar";
import React from "react";

const Dasboard = () => {
  return (
    <div className="bg-amber-50 flex flex-row">
      <Sidebar />
      <main className="flex flex-row items-center justify-center w-full h-full">
        <TopBar />
      </main>
    </div>
  );
};

export default Dasboard;
