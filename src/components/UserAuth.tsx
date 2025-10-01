import React from "react";
import TextInput from "./UI/TextInput";
import Form from "next/form";
import { submitForm } from "@/app/actions";
import CustomButton from "./UI/Button";

const UserAuth = () => {
  return (
    <Form action={submitForm} className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
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
      <p className="font-mono">
        Don&apos;t have an account?{" "}
        <span className="font-bold border-b-4 border-amber-300 mb-5">
          Sign up!
        </span>
      </p>
      <CustomButton type="primary" text="Sign up" />
    </Form>
  );
};

export default UserAuth;
