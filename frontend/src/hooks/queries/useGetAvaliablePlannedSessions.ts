import { getAvaliablePlannedSessions } from "@/lib/api/sessions";
import { useQuery } from "@tanstack/react-query";

export const useGetAvaliablePlannedSessions = (type?: string) => {
  return useQuery({
    queryKey: ["user", "sessions", "planned-available", type],
    queryFn: () => getAvaliablePlannedSessions(type as string),
  });
};
