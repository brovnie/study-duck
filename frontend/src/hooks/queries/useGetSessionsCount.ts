import { getSessionsCount } from "@/lib/api/sessions";
import { useQuery } from "@tanstack/react-query";

export const useGetSessionsCount = (id?: string) => {
  return useQuery({
    queryKey: ["user", "sessions", "count", id],
    queryFn: () => getSessionsCount(),
    enabled: !!id,
  });
};
