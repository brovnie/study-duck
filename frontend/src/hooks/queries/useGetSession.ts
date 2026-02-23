import { getSession } from "@/lib/api/sessions";
import { useQuery } from "@tanstack/react-query";

export const useGetSession = (id?: string) => {
  return useQuery({
    queryKey: ["user", "sessions", id],
    queryFn: () => getSession(id as string),
    enabled: !!id,
  });
};
