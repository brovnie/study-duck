"use client";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import React from "react";
import CustomButton from "../UI/Button";
import TextInput from "../UI/TextInput";
import Select from "@mui/material/Select";
import { alpha, styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import TimezoneSelect from "../TimezoneSelect";
import { FormControl } from "@mui/material";
const BootstrapSelect = styled(Select)(({ theme }) => ({
  border: "none",
  "label + &": {
    marginTop: theme.spacing(3),
  },
  ".MuiInputBase-input": {
    borderRadius: 10,
    position: "relative",
    backgroundColor: "white",
    border: "1px solid",
    borderColor: "var(--color-slate-400)",
    fontSize: 14,
    width: "100%",
    padding: "10px 35px 10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
  // Remove border from select's root
  ".MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));
const YellowLabel = styled(InputLabel)(({ theme }) => ({
  color: "var(--color-text-dark)",
  "&.Mui-focused": {
    color: theme.palette.primary.main,
  },
  left: -14,
}));

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
          <div className="pt-6 pb-5">
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
