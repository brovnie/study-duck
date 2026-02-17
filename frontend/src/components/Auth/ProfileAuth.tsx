"use client";
import React, { useState } from "react";
import CustomButton from "../UI/Button";
import TextInput from "../UI/TextInput";
import TimezoneSelect from "../TimezoneSelect";
import ErrorMessage from "../UI/ErrorMessage";
import AvatarUpload from "../UI/AvatarUpload";
import { useMutation } from "@tanstack/react-query";
import { useAvatarSignature } from "@/hooks/queries/useAvatarSignature";
import { useCreateUserProfile } from "@/hooks/mutations/useCreateProfile";
import { AppErrorType } from "./types";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";

const ProfileAuth = (userId: { userId: string }) => {
  const [error, setError] = useState<null | {
    message: string;
    input: string | undefined;
  }>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [resetImg, setResetImg] = React.useState(false);
  const { data: signature } = useAvatarSignature();
  const createUserProfile = useCreateUserProfile();
  const router = useRouter();
  const { login } = useUser();

  const uploadAvatarMutation = useMutation({
    mutationFn: async (file: File) => {
      if (!signature) throw new Error("No signature");
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const target = e.currentTarget;
    const form = new FormData(target);
    const file = form.get("avatar");
    const name = form.get("name");
    const institute = form.get("institute");
    const timezone = form.get("country");

    if (!name && !institute && (!(file instanceof File) || file.size === 0)) {
      setError({
        message: "Please complete the form.",
        input: "all",
      });
      return;
    }
    if (!name) {
      setError({
        message: "Please fill in name",
        input: "name",
      });
      return;
    }
    if (!institute) {
      setError({
        message: "Please fill in institute",
        input: "institute",
      });
      return;
    }
    if (!(file instanceof File) || file.size === 0) {
      setError({
        message: "Please upload a valid image file",
        input: "avatar",
      });
      return;
    }
    const uploadResponse = await uploadAvatarMutation.mutateAsync(file);

    if (!uploadResponse || !uploadResponse.secure_url) {
      setError({
        message: "Failed to upload image",
        input: "avatar",
      });
      return;
    }
    const image = uploadResponse.secure_url;

    await createUserProfile.mutate(
      {
        id: userId.userId,
        image: image,
        name: name,
        institute: institute,
        timezone: timezone,
      },
      {
        onSettled: () => {
          setIsLoading(false);
        },
        onSuccess: (data) => {
          console.log("User profile created successfully:", data);
          const user = data.data.user;
          login({
            id: user._id,
            name: user.name,
            profilePic: user.profilePic || "",
            institute: user.institute || "",
            timeZone: user.timezone || "",
          });
          setResetImg((prev) => !prev);
          target.reset();
          router.push("/dashboard");
        },
        onError: (error) => {
          setResetImg((prev) => !prev);
          const err = error as AppErrorType;
          setError({
            message: err.message,
            input: err.input,
          });
          console.error("Error creating user profile:", error);
        },
      }
    );
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
              name="institute"
              label="Where do you study?"
              className="w-[300px]"
              error={error?.input === "institute" || error?.input === "all"}
            />
          </div>
          <div className="py-5">
            <TimezoneSelect />
          </div>
        </div>
        <div>
          <CustomButton
            variant="primary"
            text={isLoading ? "Loading..." : "Save"}
            type="submit"
            disabled={isLoading}
          />
        </div>
      </div>
    </form>
  );
};

export default ProfileAuth;
