"use client";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import CustomButton from "./Button";

const AvatarUpload = () => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  return (
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
  );
};

export default AvatarUpload;
