"use client";
import { logoutUser } from "@/lib/api/users";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logoutUser,
    onSuccess: (data) => {
      queryClient.removeQueries({
        queryKey: ["user"],
      });
      console.log("User logged out successfully:", data);
    },
    onError: (error) => {
      console.error("Error logging out:", error);
    },
  });
};
