import { getLevel } from "@/lib/api/users";
import { useQuery } from "@tanstack/react-query";

export const useGetLevel = (id?: string) => {
  return useQuery({
    queryKey: ["level", id],
    queryFn: () => getLevel(id as string),
    enabled: !!id,
  });
};
