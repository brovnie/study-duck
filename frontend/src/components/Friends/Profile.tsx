import Avatar from "@mui/material/Avatar";
import React from "react";
import CustomButton from "../UI/Button";
import Form from "next/form";

const Profile = () => {
  return (
    <>
      <Avatar sx={{ width: 100, height: 100 }} />
      <div className="flex flex-col items-center">
        <p className="text-2xl font-bold">Joe Doe</p>
        <p>Europe/Brussel</p>
        <p>High School</p>
        <Form action={() => {}} className="pt-3">
          <CustomButton text="Add to friend" variant="primary" type="submit" />
        </Form>
      </div>
    </>
  );
};

export default Profile;
