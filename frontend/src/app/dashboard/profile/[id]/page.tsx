"use client";
import Friends from "@/components/Profile/Friends";
import Stats from "@/components/Profile/Stats";
import UsersProfile from "@/components/Profile/UsersProfile";
import SectionContainer from "@/components/UI/SectionContainer";
import { useGetUser } from "@/hooks/queries/useGetUser";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

const ProfilePage = ({ params }: Props) => {
  const { id } = React.use(params);
  const user = useGetUser(id);
  const router = useRouter();

  useEffect(() => {
    if (!user.isLoading && !user.data) {
      router.push("/dashboard/profile");
    }
  }, [user.isLoading, user.data, router]);

  return (
    <div className="w-full">
      <SectionContainer>
        <h2 className="text-2xl font-bold">Your Profile</h2>
        <UsersProfile />
      </SectionContainer>
      <SectionContainer>
        <Stats userId={id} />
      </SectionContainer>

      <SectionContainer>
        <Friends />
      </SectionContainer>
    </div>
  );
};

export default ProfilePage;
