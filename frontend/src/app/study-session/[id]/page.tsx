"use client";
import React from "react";
import PageValidator from "./page-validator";
import Header from "@/components/StudySession/Header/Header";
import Video from "@/components/StudySession/Video";

const StudySessionPage = () => {
  return (
    <PageValidator>
      <Header />
      <Video />
    </PageValidator>
  );
};

export default StudySessionPage;
