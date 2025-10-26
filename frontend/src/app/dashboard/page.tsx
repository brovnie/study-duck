import DashboardCalendar from "@/components/Dashboard/Dashboard/Calendar";
import Chart from "@/components/Dashboard/Dashboard/Chart";
import Stats from "@/components/Dashboard/Dashboard/Stats";
import React from "react";

const Dashboard = () => {
  return (
    <div className="h-full w-full flex flex-col-reverse items-center xl:flex-row px-5 gap-5">
      <Stats />
      <DashboardCalendar />
    </div>
  );
};

export default Dashboard;
