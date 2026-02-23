import { useUser } from "@/context/UserContext";
import { useGetSession } from "@/hooks/queries/useGetSession";
import { useParams, useRouter } from "next/navigation";

const PageValidator = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useUser();
  const params = useParams();
  const sessionId = params.id as string;
  const { data, isLoading: sessionLoading } = useGetSession(sessionId);
  const router = useRouter();

  if (loading || sessionLoading) return <div>Loading...</div>;
  if (!user || !data) return <div>No data available</div>; // safety

  const isUserInSession = data.session.participants.includes(user.id);

  if (!isUserInSession) router.push("/dashboard");
  return <>{children}</>;
};

export default PageValidator;
