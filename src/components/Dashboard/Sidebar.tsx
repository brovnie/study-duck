import React from "react";
import Logo from "../icons/Logo";
import Profile from "./Profile";
import CustomLink from "../UI/Link";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <aside className="w-[300px] h-screen flex flex-col items-center relative shadow-xl pt-3 bg-white">
      <Logo />
      <Profile />
      <Navigation />
      <CustomLink
        cssClass="absolute bottom-5"
        href="/dashboard/logout"
        text="Logout"
        variant="primary"
      />
    </aside>
  );
};

export default Sidebar;
