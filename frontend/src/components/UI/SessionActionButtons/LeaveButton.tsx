"use client";
import React from "react";
import CustomButton from "../Button";
import Form from "next/form";
import { useUser } from "@/context/UserContext";
import { useLeaveSession } from "@/hooks/mutations/useLeaveSession";

const LeaveButton = ({ sessionId }: { sessionId: string | undefined }) => {
  const { user } = useUser();
  const leaveSession = useLeaveSession();

  const handleLeave = async () => {
    await leaveSession.mutate({
      id: sessionId,
      userId: user?.id,
    });

    return;
  };
  return (
    <Form action={handleLeave} className="flex flex-row">
      <CustomButton text="Leave" variant="secondary" type="submit" />
    </Form>
  );
};

export default LeaveButton;
