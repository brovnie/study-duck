import { createUserProfile } from "@/lib/api/users";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateUserProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({ mutationFn: createUserProfile });
};
