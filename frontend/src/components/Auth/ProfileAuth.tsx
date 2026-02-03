"use client";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import CustomButton from "../UI/Button";
import TextInput from "../UI/TextInput";
import TimezoneSelect from "../TimezoneSelect";
import ErrorMessage from "../UI/ErrorMessage";
import { useMutation } from "@tanstack/react-query";
import { useAvatarSignature } from "@/hooks/queries/useAvatarSignature";

const ProfileAuth = () => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [error, setError] = useState<null | {
    message: string;
    input: string | undefined;
  }>(null);
  const { data: signature } = useAvatarSignature();

  const uploadAvatarMutation = useMutation({
    mutationFn: async (file: File) => {
      if (!signature) throw new Error("No signature");
      console.log(signature);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("api_key", signature.apiKey);
      formData.append("timestamp", signature.timestamp);
      formData.append("signature", signature.signature);
      formData.append("folder", signature.folder);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${signature.cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Upload failed");

      return res.json();
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const file = form.get("avatar");
    const name = form.get("name");
    const school = form.get("school");
    const timezone = form.get("country");

    if (!name && !school && !file) {
      setError({
        message: "Please fill in all fields",
        input: "all",
      });
      return;
    }
    if (!name) {
      setError({
        message: "Please fill in name",
        input: "name",
      });
    }
    if (!school) {
      setError({
        message: "Please fill in school",
        input: "school",
      });
    }
    if (!(file instanceof File) || file.size === 0) {
      setError({
        message: "Please upload a valid image file",
        input: "avatar",
      });
      return;
    }

    //upload file
    console.log(uploadAvatarMutation.data.secure_url);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20"
    >
      <div className="flex flex-col items-center justify-center bg-gray-50 px-6 py-6  rounded-md shadow-xl">
        {error && (
          <div className="max-w-[325px]">
            <ErrorMessage message={error.message} />
          </div>
        )}
        <div className="pb-2">
          <input
            accept="image/*"
            className={"hidden"}
            id="contained-button-file"
            name="avatar"
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
            name="name"
            className="w-[300px]"
            error={error?.input === "name" || error?.input === "all"}
          />
          <div className="pt-4">
            <TextInput
              type="text"
              placeholder="High School"
              id="input-name"
              name="school"
              label="Where do you study?"
              className="w-[300px]"
              error={error?.input === "school" || error?.input === "all"}
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
    </form>
  );
};

export default ProfileAuth;
