import { getCurrentUser } from "@/lib/api/users";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";

export const useGetCurrentUser = () => {
  const path = usePathname();
  return useQuery({
    queryKey: ["current-user"],
    queryFn: getCurrentUser,
    enabled: !path.startsWith("/auth"),
  });
};
