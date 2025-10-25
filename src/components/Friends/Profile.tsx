import Avatar from "@mui/material/Avatar";
import React from "react";

const Profile = () => {
  return (
    <>
      <Avatar sx={{ width: 100, height: 100 }} />
      <div className="flex flex-col items-center">
        <p className="text-2xl font-bold">Joe Doe</p>
        <p>Europe/Brussel</p>
        <p>High School</p>
      </div>
    </>
  );
};

export default Profile;
