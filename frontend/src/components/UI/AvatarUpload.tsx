"use client";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import CustomButton from "./Button";

interface AvatarUploadProps {
  resetImage: boolean;
}

const AvatarUpload = ({ resetImage }: AvatarUploadProps) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [previewImg, setPreviewImg] = React.useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPreviewImg(imageUrl);
  };

  React.useEffect(() => {
    return () => {
      if (previewImg) URL.revokeObjectURL(previewImg);
      if (resetImage) setPreviewImg(null);
    };
  }, [previewImg, resetImage]);

  return (
    <div className="pb-2">
      <input
        accept="image/*"
        className={"hidden"}
        name="avatar"
        id="contained-button-file"
        multiple
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
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
              width: "110px",
              height: "110px",
            }}
            src={previewImg ?? undefined}
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
