import Form from "next/form";
import React from "react";
import CustomButton from "../Button";
import { useUser } from "@/context/UserContext";
import { useJoinSession } from "@/hooks/mutations/useJoinSession";
import { useQueryClient } from "@tanstack/react-query";

const JoinButton = ({
  sessionId,
  sessionType,
}: {
  sessionId: string | undefined;
  sessionType: string;
}) => {
  const joinSession = useJoinSession();
  const { user } = useUser();
  const queryClient = useQueryClient();
  const queries = ["user", "sessions", "planned-available", sessionType];

  const handleJoin = async () => {
    /* await joinSession.mutate({
      id: sessionId,
      userId: user?.id,
    });*/
    queryClient.refetchQueries({
      queryKey: queries,
      exact: true,
    });
  };
  return (
    <Form action={handleJoin} className="flex flex-row">
      <CustomButton text="Join" variant="primary" type="submit" />
    </Form>
  );
};

export default JoinButton;
