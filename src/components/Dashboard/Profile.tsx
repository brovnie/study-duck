"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Avatar, styled } from "@mui/material";
import CustomLink from "../UI/Link";
import Link from "next/link";

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  //backgroundColor: "var(--color-amber-300)",
  "& .MuiAccordionSummary-root": {
    cursor: "pointer",
    padding: "0px 10px",
    pointerEvents: "auto", // important for summary

    zIndex: 1,
  },
  "& .MuiAccordionSummary-content": {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
    margin: 0,
    padding: 0,
  },
}));
const Profile = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handleChange = (_event: React.SyntheticEvent, isExpanded: boolean) => {
    console.log("isExpanded", isExpanded);
    setExpanded(isExpanded);
  };

  return (
    <div className="w-full px-4 mt-3 mb-5">
      <CustomAccordion
        expanded={expanded}
        onChange={handleChange}
        className="w-auto"
        sx={{
          position: "relative",
          zIndex: 9999,
          pointerEvents: "auto",
        }}
      >
        <AccordionSummary
          sx={{
            pointerEvents: "auto",
            position: "relative",
            zIndex: 10,
          }}
          expandIcon={
            <svg
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 1.25L9 8.75L1.5 1.25"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Link href="/dashboard/profile">
            <Avatar className="shadow-md border-2 border-white" />
          </Link>
          <p className="text-md font-bold ">Marlena Marlena</p>
        </AccordionSummary>
        <AccordionDetails className="w-full flex flex-col gap-3 items-center">
          <div className="flex flex-col gap-3 items-center bg-white rounded-md w-full">
            <div className="flex flex-row items-center justify-between min-w-full">
              <p className="uppercase">Level</p>
              <p>Green Duck</p>
            </div>
            <div className="flex flex-row items-center justify-between min-w-full">
              <p className="uppercase">Points</p>
              <p>1234</p>
            </div>
            <div className="flex flex-row items-center justify-between min-w-full">
              <p className="uppercase">Sessions</p>
              <p>1234</p>
            </div>
          </div>
          <CustomLink
            href="/dashboard/profile"
            text="Profile"
            variant="primary"
            cssClass="w-min"
          />
        </AccordionDetails>
      </CustomAccordion>
    </div>
  );
};

export default Profile;
