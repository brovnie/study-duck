"use client";
import { useUser } from "@/context/UserContext";
import { useCreateVideoToken } from "@/hooks/mutations/useCreateVideoToken";
import {
  Call,
  CallControls,
  CallingState,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Video = () => {
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const { user } = useUser();
  const sessionId = params.id as string;
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);
  const createVideoToken = useCreateVideoToken();
  console.log(process.env.STREAM_SECRET);

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
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <MyUILayout />
      </StreamCall>
    </StreamVideo>
  );
};

export default Video;

export const MyUILayout = () => {
  const { useCallCallingState, useLocalParticipant, useRemoteParticipants } =
    useCallStateHooks();

  const callingState = useCallCallingState();
  const localParticipant = useLocalParticipant();
  const remoteParticipants = useRemoteParticipants();

  if (callingState !== CallingState.JOINED) {
    return <div>Loading...</div>;
  }

  return (
    <StreamTheme>
      <MyParticipantList participants={remoteParticipants} />
      <MyFloatingLocalParticipant participant={localParticipant} />
    </StreamTheme>
  );
};

import {
  ParticipantView,
  type StreamVideoParticipant,
} from "@stream-io/video-react-sdk";

// ... rest of the App.tsx code

export const MyParticipantList = (props: {
  participants: StreamVideoParticipant[];
}) => {
  const { participants } = props;
  return (
    <div className="flex items-center w-full justify-center gap-8">
      {participants.map((participant) => (
        <ParticipantView
          participant={participant}
          key={participant.sessionId}
        />
      ))}
    </div>
  );
};

// ... rest of the App.tsx code

export const MyFloatingLocalParticipant = (props: {
  participant?: StreamVideoParticipant;
}) => {
  const { participant } = props;
  if (!participant) {
    return <p>Error: No local participant</p>;
  }

  return (
    <div className="absolute top-20 left-15 w-[240px] h-[135px] bg-white rounded-lg overflow-hidden shadow-md">
      <ParticipantView participant={participant} />
    </div>
  );
};
