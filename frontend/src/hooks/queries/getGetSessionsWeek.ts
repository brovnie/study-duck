import { getSessionWeek } from "@/lib/api/users";
import { useQuery } from "@tanstack/react-query";

export const useGetSessionsWeek = (id?: string) => {
  return useQuery({
    queryKey: ["sessions", "week", id],
    queryFn: () => getSessionWeek(id as string),
    enabled: !!id,
  });
};
