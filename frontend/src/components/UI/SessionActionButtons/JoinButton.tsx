import Form from "next/form";
import React from "react";
import CustomButton from "../Button";
import { useUser } from "@/context/UserContext";
import { useJoinSession } from "@/hooks/mutations/useJoinSession";
import { useQueryClient } from "@tanstack/react-query";

const JoinButton = ({ sessionId }: { sessionId: string | undefined }) => {
  const joinSession = useJoinSession();
  const { user } = useUser();

  const handleJoin = async () => {
    await joinSession.mutate({
      id: sessionId,
      userId: user?.id,
    });
  };
  return (
    <Form action={handleJoin} className="flex flex-row">
      <CustomButton text="Join" variant="primary" type="submit" />
    </Form>
  );
};

export default JoinButton;
