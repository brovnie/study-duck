import ProfileAuth from "@/components/Auth/ProfileAuth";
import Logo from "@/components/icons/Logo";
import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <div className="">
      <div className="container mx-auto flex justify-between items-center h-[50px] px-2 md:px-0">
        <Logo />
        <nav>
          <Link href="/" className="px-3 hover:border-b-2 border-b-amber-300">
            Home
          </Link>
        </nav>
      </div>
      <div className="container mx-auto">
        <ProfileAuth />
      </div>
    </div>
  );
};

export default Profile;
