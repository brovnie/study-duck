import { getUserById } from "@/lib/api/users";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = (id: string) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
    enabled: !!id,
  });
};
