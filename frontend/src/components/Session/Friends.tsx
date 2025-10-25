"use client";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import React from "react";
import TextInput from "../UI/TextInput";
import Form from "next/form";
import styled from "@emotion/styled";
import FriendsTable from "./FriendsTable";

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: "none",
  ".MuiAccordionSummary-root": {
    paddingLeft: "8px",
    paddingRight: "8px",
  },
  ".MuiAccordionDetails-root": {
    paddingTop: 0,
  },
}));

const Friends = () => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div className="test">
      <CustomAccordion
        expanded={expanded}
        onChange={() => setExpanded((prev) => !prev)}
      >
        <AccordionSummary
          expandIcon={null}
          component="div"
          className="flex justify-between px-0 mx-0"
        >
          <div className="flex items-center gap-5 flex-1">
            <h3 className="text-xl font-bold">Friends</h3>

            <svg
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={expanded ? "rotate-180" : ""}
            >
              <path
                d="M16.5 1.25L9 8.75L1.5 1.25"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <Form
            action={() => console.log("submit")}
            className={expanded ? "flex flex-row gap-3" : "hidden"}
            onClick={(e) => e.stopPropagation()}
          >
            <TextInput
              type="text"
              placeholder="Search..."
              id="input-search"
              className="flex flex-row"
              hideLabel
            />
            <button
              type="submit"
              className="flex items-center justify-center p-2 bg-amber-300 rounded-full cursor-pointer"
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
            </button>
          </Form>
        </AccordionSummary>
        <AccordionDetails>
          <FriendsTable />
        </AccordionDetails>
      </CustomAccordion>
    </div>
  );
};

export default Friends;
