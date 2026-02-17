import { AppErrorType } from "@/components/Auth/types";
import { useUser } from "@/context/UserContext";
import { loginUser } from "@/lib/api/users";
import { useMutation } from "@tanstack/react-query";

export const useLoginUser = () => {
  const { login } = useUser();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log("User logged in successfully:", data);
      const user = data.data.user;
      if (!user)
        throw {
          name: "User not found",
          message: "Server coudn't fetch the user",
          input: "all",
        } as AppErrorType;

      login({
        id: user.id,
        name: user.name,
        profilePic: user.profilePic || "",
        institute: user.institute || "",
        timeZone: user.timezone || "",
      });

      if (!data.token)
        throw {
          name: "Token not found",
          message: "Something wrong has happend please try again",
          input: "all",
        } as AppErrorType;

      document.cookie = `token=${data.token}; path=/; max-age=${
        60 * 60 * 24
      }; secure; samesite=lax`;
    },
  });
};
