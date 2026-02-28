"use client";
import { useCreateVideoToken } from "@/hooks/mutations/useCreateVideoToken";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Video = () => {
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const sessionId = params.id as string;

  const createVideoToken = useCreateVideoToken();
  useEffect(() => {
    setIsLoading(true);
    createVideoToken.mutate(sessionId, {
      onSuccess: (data) => {
        console.log("Video token created successfully:", data.token);
      },
      onError: (error) => {
        console.log("error has happend in video token");
      },
      onSettled: () => {
        setIsLoading(false);
      },
    });
  }, [sessionId]);

  return <div>Video</div>;
};

export default Video;
