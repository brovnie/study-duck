import { getSessionsCount } from "@/lib/api/users";
import { useQuery } from "@tanstack/react-query";

export const useGetSessionsCount = (id?: string) => {
  return useQuery({
    queryKey: ["user", "sessions", "count", id],
    queryFn: () => getSessionsCount(id as string),
    enabled: !!id,
  });
};
