import { getSessionsCount } from "@/lib/api/sessions";
import { useQuery } from "@tanstack/react-query";

export const useGetSessionsCount = (id?: string, type?: string) => {
  return useQuery({
    queryKey: ["user", "sessions", "count", id],
    queryFn: () => getSessionsCount(id as string, type as string),
    enabled: !!id,
  });
};
