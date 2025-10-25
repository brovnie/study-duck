import UserAuth from "@/components/Auth/UserAuth";
import Logo from "@/components/icons/Logo";
import Link from "next/link";
import React from "react";

const AuthPage = () => {
  return (
    <div>
      <div className="container mx-auto flex justify-between items-center h-[50px] ">
        <Logo />
        <nav>
          <Link href="/">Home</Link>
        </nav>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <UserAuth />
      </div>
    </div>
  );
};

export default AuthPage;
