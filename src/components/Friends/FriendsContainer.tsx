"use client";
import React from "react";
import FriendsTable from "./FriendsTable";
import Form from "next/form";
import TextInput from "../UI/TextInput";
import { IconButton, styled } from "@mui/material";

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "var(--color-amber-300)",
  marginLeft: "5px",
}));

const FrinedsContainer = () => {
  return (
    <>
      <div className="flex flex-row justify-between mb-3">
        <h2 className="text-2xl font-bold">Friends</h2>
        <Form action={() => console.log("submit")} className="flex flex-row">
          <TextInput
            type="text"
            placeholder="Search..."
            id="input-search"
            className="flex flex-row"
            hideLabel
          />
          <CustomIconButton
            type="submit"
            aria-label="Search friends"
            className="ml-3"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_23_1176)">
                <path
                  d="M21 21L15.803 15.803M15.803 15.803C17.2096 14.3965 17.9998 12.4887 17.9998 10.4995C17.9998 8.51035 17.2096 6.60262 15.803 5.19605C14.3965 3.78947 12.4887 2.99927 10.4995 2.99927C8.51035 2.99927 6.60262 3.78947 5.19605 5.19605C3.78947 6.60262 2.99927 8.51035 2.99927 10.4995C2.99927 12.4887 3.78947 14.3965 5.19605 15.803C6.60262 17.2096 8.51035 17.9998 10.4995 17.9998C12.4887 17.9998 14.3965 17.2096 15.803 15.803Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_23_1176">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </CustomIconButton>
        </Form>
      </div>
      <div>
        <FriendsTable />
      </div>
    </>
  );
};

export default FrinedsContainer;
