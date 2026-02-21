import { createSession } from "@/lib/api/sessions";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateSession = () => {
  const queryClient = useQueryClient();
  return useMutation({ mutationFn: createSession });
};
