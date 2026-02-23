import { joinSession } from "@/lib/api/sessions";
import { useMutation } from "@tanstack/react-query";

export const useJoinSession = () => {
  return useMutation({ mutationFn: joinSession });
};
