"use client";
import React, { useState } from "react";
import TextInput from "./UI/TextInput";
import Form from "next/form";
import { submitForm } from "@/app/actions";
import CustomButton from "./UI/Button";

const UserAuth = () => {
  const [isSignIn, setisSignIn] = useState(true);
  return (
    <div className="font-mono  flex flex-col items-start bg-gray-50 px-6 py-6  rounded-md shadow-xl">
      <div>
        <p className="inline-block self-start text-2xl font-bold mb-3">
          Sign {isSignIn ? "In" : "Out"}
        </p>
        <Form action={submitForm} className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 w-[325px]">
            <TextInput
              type="email"
              placeholder="joe.doe@email.com"
              id="input-email"
              label="Email"
            />
            <TextInput
              type="password"
              placeholder="******"
              id="input-password"
              label="Password"
            />
          </div>
          <CustomButton
            variant="primary"
            text={isSignIn ? "Sign In" : "Sign Up"}
            type="submit"
            cssClasses="w-[325px] "
          />
        </Form>
      </div>
      <p className="font-mono mt-5 text-sm text-slate-600">
        {isSignIn ? "Don't have an account? " : "Already have an account? "}

        <span
          onClick={() => setisSignIn((prev) => !prev)}
          className="font-semibold border-b-2 mb-5 cursor-pointer hover:text-amber-300"
        >
          {isSignIn ? "Sign Up!" : "Sign In!"}
        </span>
      </p>
    </div>
  );
};

export default UserAuth;
