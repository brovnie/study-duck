import Avatar from "@mui/material/Avatar";
import React from "react";
import CustomButton from "../UI/Button";
import Form from "next/form";
import { useUser } from "@/context/UserContext";

type UserProps = {
  isMe: boolean;
};

const Profile = ({ isMe }: UserProps) => {
  const { user } = useUser();
  return (
    <>
      <Avatar sx={{ width: 100, height: 100 }} src={user?.profilePic} />
      <div className="flex flex-col items-center">
        <p className="text-2xl font-bold">{user?.name}</p>
        <p>{user?.timeZone}</p>
        <p>{user?.institute}</p>
        {!isMe && (
          <Form action={() => {}} className="pt-3">
            <CustomButton
              text="Add to friend"
              variant="primary"
              type="submit"
            />
          </Form>
        )}
      </div>
    </>
  );
};

export default Profile;
