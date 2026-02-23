import { joinSession } from "@/lib/api/sessions";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useJoinSession = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: joinSession,
    onSuccess: (data) => {
      queryClient.refetchQueries({
        queryKey: [
          "user",
          "sessions",
          "planned-available",
          data.data.session.type,
        ],
        exact: true,
      });
    },
  });
};
