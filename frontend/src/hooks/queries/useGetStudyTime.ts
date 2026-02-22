import { getStudyTime } from "@/lib/api/sessions";
import { useQuery } from "@tanstack/react-query";

export const useGetStudyTime = (id?: string) => {
  return useQuery({
    queryKey: ["user", "sessions", "studytime", id],
    queryFn: () => getStudyTime(),
    enabled: !!id,
  });
};
