"use client";
import BigCalendarContainer from "@/components/Friends/BigCalendarContainer";
import Profile from "@/components/Friends/Profile";
import Stats from "@/components/Friends/Stats";
import SectionContainer from "@/components/UI/SectionContainer";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import React from "react";

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "var(--color-amber-300)",
  position: "absolute",
  top: 0,
  right: 0,
}));

const FriendProfilePage = () => {
  return (
    <div className="h-full w-full flex flex-col px-5">
      <SectionContainer>
        <div className="flex flex-col gap-5 items-center">
          <div className="flex flex-col w-full jusify-center gap-5 items-center relative">
            <CustomIconButton
              aria-label="Notifications"
              className="bg-white p-4 rounded-full shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </CustomIconButton>
            <Profile />
          </div>
          <Stats />
        </div>
      </SectionContainer>
      <SectionContainer>
        <BigCalendarContainer />
      </SectionContainer>
    </div>
  );
};

export default FriendProfilePage;
