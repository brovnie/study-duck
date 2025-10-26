"use client";
import React, { useState } from "react";
import Profile from "../Friends/Profile";
import CustomButton from "../UI/Button";
import EditUserProfile from "./EditUserProfile";

const UsersProfile = () => {
  const [isEdyting, setIsEdyting] = useState(false);
  return (
    <div className="flex flex-col gap-5 items-center mt-3">
      {isEdyting ? (
        <EditUserProfile setIsEdyting={setIsEdyting} />
      ) : (
        <>
          <Profile />
          <CustomButton
            text="Edit Profile"
            variant="primary"
            type="button"
            onClick={() => setIsEdyting(true)}
          />
        </>
      )}
    </div>
  );
};

export default UsersProfile;
