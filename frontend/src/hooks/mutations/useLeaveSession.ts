import { leaveSession } from "@/lib/api/sessions";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLeaveSession = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: leaveSession,
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
