import { getPoints } from "@/lib/api/users";
import { useQuery } from "@tanstack/react-query";

export const useGetPoints = (id?: string) => {
  return useQuery({
    queryKey: ["user", "points", id],
    queryFn: () => getPoints(id as string),
    enabled: !!id,
  });
};
