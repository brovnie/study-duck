import { getSessionWeek } from "@/lib/api/sessions";
import { useQuery } from "@tanstack/react-query";

export const useGetSessionsWeek = (id?: string) => {
  return useQuery({
    queryKey: ["user", "sessions", "week", id],
    queryFn: () => getSessionWeek(),
    enabled: !!id,
  });
};
