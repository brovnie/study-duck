"use client";
import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import { alpha, styled } from "@mui/material/styles";
import React from "react";

interface TextInputInterface {
  type: "number" | "text" | "password" | "email";
  id: string;
  label: string;
  placeholder: string;
  defaultValue?: string;
}

const TextInput = (props: TextInputInterface) => {
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
      padding: "10px 12px",
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
  return (
    <FormControl variant="standard">
      <YellowLabel
        shrink
        htmlFor={props.id}
        className="text-2xl font-bold uppercase"
      >
        {props.label}
      </YellowLabel>
      <BootstrapInput
        type={props.type}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        id={props.id}
      />
    </FormControl>
  );
};

export default TextInput;
