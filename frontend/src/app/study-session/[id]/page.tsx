"use client";
import React from "react";
import PageValidator from "./page-validator";
import Header from "@/components/StudySession/Header/Header";
import Video from "@/components/StudySession/Video/Video";

const StudySessionPage = () => {
  return (
    <PageValidator>
      <div className="flex flex-col h-screen w-full overflow-hidden">
        <Header />
        <div className="flex-1 min-h-0 w-full">
          <Video />
        </div>
      </div>
    </PageValidator>
  );
};

export default StudySessionPage;
