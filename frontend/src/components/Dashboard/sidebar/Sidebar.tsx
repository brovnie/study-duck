"use client";
import React from "react";
import Logo from "../../icons/Logo";
import Profile from "./Profile";
import Navigation from "./Navigation";
import { useUser } from "@/context/UserContext";
import CustomButton from "@/components/UI/Button";

const Sidebar = () => {
  const { logout } = useUser();
  return (
    <aside className="block min-w-[110px] lg:min-w-[267px] h-screen relative mr-3">
      <div className="fixed flex flex-col h-screen items-center bg-white shadow-xl px-2 pt-3">
        <Logo />
        <Profile />
        <Navigation />
        <CustomButton
          type="button"
          cssClasses="absolute bottom-5"
          onClick={logout}
          text="Logout"
          variant="primary"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
