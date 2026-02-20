import { getCountFriends } from "@/lib/api/users";
import { useQuery } from "@tanstack/react-query";

export const useCountFriends = (id?: string) => {
  return useQuery({
    queryKey: ["user", "friends", "count", id],
    queryFn: () => getCountFriends(id as string),
    enabled: !!id,
  });
};
