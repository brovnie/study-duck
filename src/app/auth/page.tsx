import UserAuth from "@/components/UserAuth";
import React from "react";

const AuthPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <UserAuth />
    </div>
  );
};

export default AuthPage;
