"use client";
import ProfileAuth from "@/components/Auth/ProfileAuth";
import Logo from "@/components/icons/Logo";
import Link from "next/link";
import React, { useEffect } from "react";
import jwt, { JwtPayload } from "jsonwebtoken";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";

interface MyJwtPayload extends JwtPayload {
  id: string;
}

function Profile() {
  const { token } = useUser();
  const router = useRouter();
  const [userId, setUserId] = React.useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      router.push("/");
      return;
    }

    const decoded = jwt.decode(token) as MyJwtPayload | null;
    if (!decoded || typeof decoded === "string") {
      router.push("/");
      return;
    }

    setUserId(decoded.id);
  }, [token, router]);

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
