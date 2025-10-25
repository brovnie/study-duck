import FrinedsContainer from "@/components/Friends/FriendsContainer";
import React from "react";

const Friends = () => {
  return (
    <div className="w-full px-5 mt-5">
      <div className="flex flex-col bg-white rounded-md px-3 py-2">
        <FrinedsContainer />
      </div>
    </div>
  );
};

export default Friends;
