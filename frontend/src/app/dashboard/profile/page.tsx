import FriendsTable from "@/components/Friends/FriendsTable";
import Friends from "@/components/Profile/Friends";
import Stats from "@/components/Profile/Stats";
import UsersProfile from "@/components/Profile/UsersProfile";
import SectionContainer from "@/components/UI/SectionContainer";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="w-full">
      <SectionContainer>
        <h2 className="text-2xl font-bold">Your Profile</h2>
        <UsersProfile />
      </SectionContainer>
      <SectionContainer>
        <Stats />
      </SectionContainer>

      <SectionContainer>
        <Friends />
      </SectionContainer>
    </div>
  );
};

export default ProfilePage;
