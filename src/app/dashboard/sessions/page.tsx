import Friends from "@/components/Session/Friends";
import OnlineUsers from "@/components/Session/OnlineUsers";
import CustomLink from "@/components/UI/Link";
import PillTabs from "@/components/UI/PillTabs";
import React from "react";

const Sessions = () => {
  return (
    <div className="w-full px-5 mt-5">
      <div className="flex flex-col bg-white rounded-md px-3 py-2">
        <div className="flex flex-row justify-between pb-1">
          <h2 className="text-2xl font-bold">Sessions</h2>
          <CustomLink
            href="/dashboard/sessions/new"
            text="Start Session"
            cssClass="w-auto flex items-center"
            icon={
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.231 10.5L20.951 5.78C21.0558 5.67524 21.1894 5.60392 21.3348 5.57503C21.4802 5.54615 21.6309 5.561 21.7679 5.61771C21.9048 5.67442 22.0219 5.77045 22.1043 5.89367C22.1868 6.01688 22.2308 6.16176 22.231 6.31V17.69C22.2308 17.8382 22.1868 17.9831 22.1043 18.1063C22.0219 18.2295 21.9048 18.3256 21.7679 18.3823C21.6309 18.439 21.4802 18.4538 21.3348 18.425C21.1894 18.3961 21.0558 18.3248 20.951 18.22L16.231 13.5M4.98096 18.75H13.981C14.5777 18.75 15.15 18.5129 15.5719 18.091C15.9939 17.669 16.231 17.0967 16.231 16.5V7.5C16.231 6.90326 15.9939 6.33097 15.5719 5.90901C15.15 5.48705 14.5777 5.25 13.981 5.25H4.98096C4.38422 5.25 3.81192 5.48705 3.38997 5.90901C2.96801 6.33097 2.73096 6.90326 2.73096 7.5V16.5C2.73096 17.0967 2.96801 17.669 3.38997 18.091C3.81192 18.5129 4.38422 18.75 4.98096 18.75Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        </div>
        <PillTabs
          view1={
            <>
              <Friends />
              <OnlineUsers />
            </>
          }
          view2={
            <div>
              <p>Plan</p>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Sessions;
