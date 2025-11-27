"use client";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import { alpha, styled } from "@mui/material/styles";
import React, { useState } from "react";
import { EyeIcon } from "../icons/EyeIcon";

interface TextInputInterface {
  type: "number" | "text" | "password" | "email";
  id: string;
  label?: string;
  placeholder: string;
  defaultValue?: string;
  className?: string;
  hideLabel?: boolean;
  name?: string; //TODO: delete ? after adjusting all text inputs
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3.5),
  },
  "& .MuiInputBase-input": {
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
}));

const YellowLabel = styled(InputLabel)(({ theme }) => ({
  color: "var(--color-text-dark)",
  "&.Mui-focused": {
    color: theme.palette.primary.main,
  },
}));

const TextInput = (props: TextInputInterface) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <FormControl variant="standard" className={props.className}>
      {!props.hideLabel && (
        <YellowLabel shrink htmlFor={props.id} className="text-lg">
          {props.label}
        </YellowLabel>
      )}
      <BootstrapInput
        type={isPasswordVisible ? "text" : props.type}
        placeholder={props.placeholder}
        id={props.id}
        className="group"
        name={props.name}
        endAdornment={
          props.type === "password" && (
            <InputAdornment
              position="end"
              className="absolute right-2 cursor-pointer group-focus-within:text-amber-300"
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                e.preventDefault();
                e.stopPropagation();
                setIsPasswordVisible((prev) => !prev);
              }}
            >
              <EyeIcon isOpen={isPasswordVisible} />
            </InputAdornment>
          )
        }
      />
    </FormControl>
  );
};

export default TextInput;
