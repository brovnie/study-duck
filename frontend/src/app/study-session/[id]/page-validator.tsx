"use client";

import { useUser } from "@/context/UserContext";
import { useGetSession } from "@/hooks/queries/useGetSession";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const PageValidator = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useUser();
  const params = useParams();
  const sessionId = params.id as string;
  const { data, isLoading: sessionLoading } = useGetSession(sessionId);
  const router = useRouter();

  const isUserInSession =
    user && data ? data.session.participants.includes(user.id) : false;

  const isSessionActif = (() => {
    if (!data) return false;

    const sessionStartingTime = new Date(data.session.startingTime);
    const sessionEndTime =
      sessionStartingTime.getTime() + data.session.duration * 60 * 1000;

    return Date.now() < sessionEndTime;
  })();

  useEffect(() => {
    if (!loading && !sessionLoading && user && data) {
      if (!isUserInSession || !isSessionActif) {
        router.push("/dashboard");
      }
    }
  }, [
    loading,
    sessionLoading,
    user,
    data,
    isUserInSession,
    isSessionActif,
    router,
  ]);

  if (loading || sessionLoading) return <div>Loading...</div>;
  if (!user || !data) return <div>No data available</div>;

  return <>{children}</>;
};

export default PageValidator;
