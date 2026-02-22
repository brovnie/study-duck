import { createSession } from "@/lib/api/sessions";
import { useMutation } from "@tanstack/react-query";

export const useCreateSession = () => {
  return useMutation({ mutationFn: createSession });
};
