import DashboardCalendar from "@/components/Dashboard/Dashboard/Calendar";
import Chart from "@/components/Dashboard/Dashboard/Chart";
import Stats from "@/components/Dashboard/Dashboard/Stats";
import React from "react";

const Dashboard = () => {
  return (
    <div className="h-full w-full flex flex-row gap-3">
      <Stats />
      <DashboardCalendar />
    </div>
  );
};

export default Dashboard;
