"use client";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import React from "react";
import CustomButton from "../UI/Button";
import TextInput from "../UI/TextInput";
import TimezoneSelect from "../TimezoneSelect";

const ProfileAuth = () => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex flex-col items-center justify-center bg-gray-50 px-6 py-6  rounded-md shadow-xl">
        <div className="pb-2">
          <input
            accept="image/*"
            className={"hidden"}
            id="contained-button-file"
            multiple
            type="file"
            ref={fileInputRef}
          />
          <label
            htmlFor="contained-button-file"
            className="flex flex-col gap-1 items-center"
          >
            <IconButton onClick={() => fileInputRef.current?.click()}>
              <Avatar
                className="shadow-md"
                style={{
                  margin: "10px",
                  width: "60px",
                  height: "60px",
                }}
              />
            </IconButton>
            <CustomButton
              onClick={() => fileInputRef.current?.click()}
              variant="secondary"
              text="Upload"
              type="button"
              cssClasses="w-auto w-min"
            />
          </label>
        </div>
        <div>
          <TextInput
            type="text"
            placeholder="Joe Doe"
            id="input-name"
            label="Name"
            className="w-[300px]"
          />
          <div className="pt-4">
            <TextInput
              type="text"
              placeholder="High School"
              id="input-name"
              label="Where do you study?"
              className="w-[300px]"
            />
          </div>
          <div className="py-5">
            <TimezoneSelect />
          </div>
        </div>
        <div>
          <CustomButton variant="primary" text="Save" type="submit" />
        </div>
      </div>
    </div>
  );
};

export default ProfileAuth;
