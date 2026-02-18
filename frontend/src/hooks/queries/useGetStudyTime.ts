import { getStudyTime } from "@/lib/api/users";
import { useQuery } from "@tanstack/react-query";

export const useGetStudyTime = (id?: string) => {
  return useQuery({
    queryKey: ["user", "sessions", "studytime", id],
    queryFn: () => getStudyTime(id as string),
    enabled: !!id,
  });
};
