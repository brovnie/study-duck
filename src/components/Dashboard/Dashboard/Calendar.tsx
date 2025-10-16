"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";

const DashboardCalendar = () => {
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const handlePrevMonth = () => {
    const newDate = new Date(activeStartDate);
    newDate.setMonth(activeStartDate.getMonth() - 1);
    setActiveStartDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(activeStartDate);
    newDate.setMonth(activeStartDate.getMonth() + 1);
    setActiveStartDate(newDate);
  };
  const month = activeStartDate.toLocaleString("default", { month: "long" });
  const year = activeStartDate.getFullYear();

  return (
    <div className="bg-white p-5 rounded-md mt-3 h-min">
      <div className="flex flex-row items-center justify-between mb-2">
        <p className="font-bold text-xl">
          {month} {year}
        </p>
        <div className="flex flex-row items-center gap-2">
          <button onClick={handlePrevMonth}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 19.5L8.25 12L15.75 4.5"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button onClick={handleNextMonth}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.25 4.5L15.75 12L8.25 19.5"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <Calendar
        className="w-[325px]"
        showNavigation={false}
        minDetail="month"
        maxDetail="month"
        activeStartDate={activeStartDate} // 👈 controlled month
        onActiveStartDateChange={({ activeStartDate }) =>
          setActiveStartDate(activeStartDate!)
        }
      />
      <hr className="my-2 border-slate-200 h-1" />
      <div>
        <p className="text-lg font-bold">Upcoming Sessions</p>
        <div className="flex flex-col items-center py-5 gap-2">
          <p className="text-7xl">🥺</p>
          <p>No upcoming sessions</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCalendar;
