import React from "react";
import CustomLink from "../Link";
import LeaveButton from "./LeaveButton";
import JoinButton from "./JoinButton";
import { SessionTypes } from "@/components/Session/types";
import { useUser } from "@/context/UserContext";

interface SessionsActionButtonsProps {
  session: SessionTypes;
}

const SessionsActionButtons = ({ session }: SessionsActionButtonsProps) => {
  const { user } = useUser();
  const isActive = session.participants.some((p) => p._id === user?.id);
  console.log(session);
  return (
    <>
      {isActive ? (
        <div className="flex flex-row gap-5">
          <LeaveButton sessionId={session._id} />
          <CustomLink
            href={`/study-session/${session._id}`}
            text="Start"
            variant="primary"
          />
        </div>
      ) : (
        <JoinButton sessionId={session._id} sessionType={session.type} />
      )}
    </>
  );
};

export default SessionsActionButtons;
