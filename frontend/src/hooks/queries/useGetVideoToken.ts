import { getVideoToken } from "@/lib/api/sessions";
import { useQuery } from "@tanstack/react-query";

export const useGetVideoToken = (id?: string) =>
  useQuery({
    queryKey: ["user", "sessions", id, "token"],
    queryFn: () => getVideoToken(id as string),
    enabled: !!id,
  });
