"use client";
import React, { useState } from "react";
import Profile from "../Friends/Profile";
import CustomButton from "../UI/Button";
import EditUserProfile from "./EditUserProfile";
import { useUser } from "@/context/UserContext";

type UserProps = {
  userId: string;
};

const UsersProfile = ({ userId }: UserProps) => {
  const [isEdyting, setIsEdyting] = useState(false);
  const { user: me } = useUser();
  const isMe = me?.id === userId;

  return (
    <div className="flex flex-col gap-5 items-center mt-3">
      {isEdyting && isMe ? (
        <EditUserProfile setIsEdyting={setIsEdyting} />
      ) : (
        <>
          <Profile isMe={isMe} />
          {isMe && (
            <CustomButton
              text="Edit Profile"
              variant="primary"
              type="button"
              onClick={() => setIsEdyting(true)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default UsersProfile;
