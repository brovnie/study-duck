import { getCurrentUser } from "@/lib/api/users";
import { useQuery } from "@tanstack/react-query";

export const useGetCurrentUser = () =>
  useQuery({
    queryKey: ["current-user"],
    queryFn: getCurrentUser,
  });
