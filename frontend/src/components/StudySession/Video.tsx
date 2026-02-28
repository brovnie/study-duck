"use client";
import { useGetVideoToken } from "@/hooks/queries/useGetVideoToken";
import { useParams } from "next/navigation";
import React from "react";

const Video = () => {
  const params = useParams();
  const sessionId = params.id as string;

  const { data, isLoading, isError } = useGetVideoToken(sessionId);
  const token = data?.token;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  return <div>Video</div>;
};

export default Video;
