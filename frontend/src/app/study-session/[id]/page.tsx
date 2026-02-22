"use client";
import { useParams } from "next/navigation";
import React from "react";

const StudySessionPage = () => {
  const params = useParams();
  console.log(params);
  return <div>StudySessionPage</div>;
};

export default StudySessionPage;
