import { fetchAvatarSignature } from "@/lib/api/upload";
import { useQuery } from "@tanstack/react-query";

export const useAvatarSignature = () =>
  useQuery({
    queryKey: ["avatar-signature"],
    queryFn: fetchAvatarSignature,
    staleTime: 1000 * 60 * 5,
  });
