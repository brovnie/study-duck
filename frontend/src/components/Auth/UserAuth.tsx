"use client";
import React, { useEffect, useState } from "react";
import TextInput from "../UI/TextInput";
import CustomButton from "../UI/Button";
import { useRouter, useSearchParams } from "next/navigation";
import { useCreateUser } from "@/hooks/mutations/useCreateUser";
import ErrorMessage from "../UI/ErrorMessage";
import { AppErrorType, UserAuthProps } from "./types";
import { useLoginUser } from "@/hooks/mutations/useLoginUser";

const UserAuth = () => {
  const searchParams = useSearchParams();
  const signup = searchParams.get("signup");
  const [isSignIn, setisSignIn] = useState(signup === "true" ? false : true);
  const createUser = useCreateUser();
  const loginUser = useLoginUser();
  const [error, setError] = useState<null | {
    message: string;
    input: string | undefined;
  }>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      setError({
        message: "Please fill in all fields",
        input: "both",
      });
      setIsLoading(false);
      return;
    }
    if (isSignIn) {
      console.log("Signing in...");
      loginUser.mutate(
        {
          email,
          password,
        },
        {
          onSuccess: (data: UserAuthProps) => {
            console.log("User logged in successfully:", data);
            if (data.token) {
              document.cookie = `token=${data.token}; path=/; max-age=${
                60 * 60 * 24
              }; secure; samesite=lax`;
            }
            form.reset();
            setIsLoading(false);
            router.push("/dashboard");
          },
          onError: (error) => {
            const err = error as AppErrorType;
            setError({
              message: err.message,
              input: err.input,
            });
            setIsLoading(false);
            console.error("Error login user:", error);
          },
        }
      );
    } else {
      createUser.mutate(
        { email, password },
        {
          onSuccess: (data: UserAuthProps) => {
            console.log("User created successfully:", data);

            if (data.token) {
              document.cookie = `token=${data.token}; path=/; max-age=${
                60 * 60 * 24
              }; secure; samesite=lax`;
            }
            form.reset();
            setIsLoading(false);
            router.push("/auth/profile");
          },
          onError: (error) => {
            const err = error as AppErrorType;
            setError({
              message: err.message,
              input: err.input,
            });
            setIsLoading(false);
            console.error("Error creating user:", error);
          },
        }
      );
    }
  };

  return (
    <div className="font-mono  flex flex-col items-start bg-gray-50 px-6 py-6  rounded-md shadow-xl">
      <div>
        <p className="inline-block self-start text-2xl font-bold mb-3">
          Sign {isSignIn ? "In" : "Up"}
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {error && (
            <div className="max-w-[325px]">
              <ErrorMessage message={error.message} />
            </div>
          )}
          <div className="flex flex-col gap-3 w-[325px]">
            <TextInput
              type="email"
              name="email"
              placeholder="joe.doe@email.com"
              id="input-email"
              label="Email"
              error={error?.input === "email" || error?.input === "both"}
            />
            <TextInput
              type="password"
              placeholder="********"
              name="password"
              id="input-password"
              label="Password"
              error={error?.input === "password" || error?.input === "both"}
            />
          </div>
          <CustomButton
            variant="primary"
            text={isLoading ? "Loading..." : isSignIn ? "Sign In" : "Sign Up"}
            type="submit"
            disabled={isLoading}
            cssClasses={`w-[325px] ${isLoading ? "opacity-50" : ""}`}
          />
        </form>
      </div>
      <p className="font-mono mt-5 text-sm text-slate-600">
        {isSignIn ? "Don't have an account? " : "Already have an account? "}

        <span
          onClick={() => {
            setisSignIn((prev) => !prev);
            router.push(`/auth?signup=${isSignIn}`);
          }}
          className="font-semibold border-b-2 mb-5 cursor-pointer hover:text-amber-300"
        >
          {isSignIn ? "Sign Up!" : "Sign In!"}
        </span>
      </p>
    </div>
  );
};

export default UserAuth;
