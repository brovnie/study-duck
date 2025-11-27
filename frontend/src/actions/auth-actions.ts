"use server";

import { useCreateUser } from "@/hooks/mutations/useCreateUser";
const createUser = useCreateUser();

export const signIn = async () => {};

export const signUp = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  createUser.mutate({ email, password });
};
