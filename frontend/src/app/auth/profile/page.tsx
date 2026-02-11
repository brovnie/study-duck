import ProfileAuth from "@/components/Auth/ProfileAuth";
import Logo from "@/components/icons/Logo";
import Link from "next/link";
import React from "react";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

async function Profile() {
  const allCookies = await cookies();
  const token = allCookies.get("token");

  if (!token) redirect("/");

  const decoded = jwt.decode(token?.value);
  const userId = decoded.id as string;

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
        <ProfileAuth userId={userId} />
      </div>
    </div>
  );
}

export default Profile;
