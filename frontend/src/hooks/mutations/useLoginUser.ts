import { loginUser } from "@/lib/api/users";
import { useMutation } from "@tanstack/react-query";

export const useLoginUser = () => {
  return useMutation({ mutationFn: loginUser });
};
