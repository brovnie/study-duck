import React from "react";
import Logo from "../../icons/Logo";
import Profile from "./Profile";
import CustomLink from "../../UI/Link";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <aside className="block min-w-[110px] lg:min-w-[267px] h-screen relative mr-3">
      <div className="fixed flex flex-col h-screen items-center bg-white shadow-xl px-2 pt-3">
        <Logo />
        <Profile />
        <Navigation />
        <CustomLink
          cssClass="absolute bottom-5"
          href="/dashboard/logout"
          text="Logout"
          variant="primary"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
