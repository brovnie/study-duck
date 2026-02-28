import { getVideoToken } from "@/lib/api/sessions";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateVideoToken = () => {
  return useMutation({ mutationFn: getVideoToken });
};
