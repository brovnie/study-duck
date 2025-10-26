"use client";
import React from "react";
import AvatarUpload from "../UI/AvatarUpload";
import TextInput from "../UI/TextInput";
import TimezoneSelect from "../TimezoneSelect";
import CustomButton from "../UI/Button";
import Form from "next/form";

type EditUserProfilePropsTypes = {
  setIsEdyting: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditUserProfile = ({ setIsEdyting }: EditUserProfilePropsTypes) => {
  return (
    <Form action={() => {}} className="flex flex-col gap-5 items-center mt-3">
      <AvatarUpload />
      <TextInput
        type="text"
        id="name"
        label="Name"
        placeholder="Enter your name"
        defaultValue="Marlena Marlena"
        className="w-[300px]"
      />
      <div>
        <TimezoneSelect defaultTimezone={"Europe/Brussels"} />
      </div>
      <TextInput
        type="text"
        id="institute"
        label="Where do you study?"
        placeholder="Enter your institute"
        defaultValue="High School"
        className="w-[300px]"
      />
      <div className="flex flex-row gap-5">
        <CustomButton
          variant="secondary"
          text="Cancel"
          type="reset"
          onClick={() => setIsEdyting(false)}
        />
        <CustomButton variant="primary" text="Save" type="submit" />
      </div>
    </Form>
  );
};

export default EditUserProfile;
