"use client";
import React from "react";
import CustomButton from "../Button";
import Form from "next/form";

const LeaveButton = ({ sessionId }: { sessionId: string | undefined }) => {
  return (
    <Form action={() => console.log("submit")} className="flex flex-row">
      <CustomButton text="Leave" variant="secondary" type="submit" />
    </Form>
  );
};

export default LeaveButton;
