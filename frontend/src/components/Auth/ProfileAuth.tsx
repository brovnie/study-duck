"use client";
import React, { useState } from "react";
import CustomButton from "../UI/Button";
import TextInput from "../UI/TextInput";
import TimezoneSelect from "../TimezoneSelect";
import ErrorMessage from "../UI/ErrorMessage";
import AvatarUpload from "../UI/AvatarUpload";
import { useMutation } from "@tanstack/react-query";
import { useAvatarSignature } from "@/hooks/queries/useAvatarSignature";

const ProfileAuth = () => {
  const [error, setError] = useState<null | {
    message: string;
    input: string | undefined;
  }>(null);
  const [resetImg, setResetImg] = React.useState(false);
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
    console.log(typeof school);
    if (!name && !school && !file) {
      setError({
        message: "Please fill in all fields",
        input: "all",
      });
      return;
    }
    console.log(!school);
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
    //const image = uploadAvatarMutation.data.secure_url;

    //Clean up image url after upload TODO: move to on success
    setResetImg((prev) => !prev);
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
        <AvatarUpload resetImage={resetImg} />
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
