import BigCalendar from "@/components/UI/BigCalendar";
import SectionContainer from "@/components/UI/SectionContainer";
import React from "react";

const FriendProfilePage = () => {
  return (
    <div className="h-full w-full flex flex-col px-5">
      <SectionContainer>
        <p>Friend Profile</p>
      </SectionContainer>
      <SectionContainer>
        <BigCalendar />
      </SectionContainer>
    </div>
  );
};

export default FriendProfilePage;
