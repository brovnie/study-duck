import { createUserProfile } from "@/lib/api/users";
import { useMutation } from "@tanstack/react-query";

export const useCreateUserProfile = () => {
  return useMutation({ mutationFn: createUserProfile });
};
