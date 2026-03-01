"use client";
import { useUser } from "@/context/UserContext";
import { useCreateVideoToken } from "@/hooks/mutations/useCreateVideoToken";
import {
  Call,
  CallControls,
  StreamCall,
  StreamVideo,
  StreamVideoClient,
} from "@stream-io/video-react-sdk";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { UILayout } from "./UILayout";
import CustomControls from "./CustomControls";

const Video = () => {
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const { user } = useUser();
  const sessionId = params.id as string;
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);
  const createVideoToken = useCreateVideoToken();

  useEffect(() => {
    if (!user) return;
    setIsLoading(true);
    createVideoToken.mutate(sessionId, {
      onSuccess: (data) => {
        const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY as string;
        const callUser = {
          id: user.id,
          name: user.name,
          image: user.profilePic,
        };
        const token = data.token as string;
        const client = new StreamVideoClient({ apiKey, user: callUser, token });
        setClient(client);
        const call = client.call("default", sessionId);
        call.join({ create: true });
        setCall(call);
      },
      onError: (error) => {
        console.log("error has happend in video token");
      },
      onSettled: () => {
        setIsLoading(false);
      },
    });
  }, [sessionId]);

  if (!client || !call) return <div>Loading...</div>;

  return (
    <div className="bg-gray-800">
      <StreamVideo client={client}>
        <StreamCall call={call}>
          <UILayout />
          <div className="flex flex-row">
            <CustomControls />
          </div>
        </StreamCall>
      </StreamVideo>
    </div>
  );
};

export default Video;
