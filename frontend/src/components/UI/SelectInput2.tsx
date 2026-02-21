"use client";
import React from "react";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent, SelectProps } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import { SelectOption } from "./types";

const BootstrapSelect = styled((props: SelectProps<string>) => (
  <Select<string> {...props} />
))(({ theme }) => ({
  border: "none",
  "label + &": {
    marginTop: theme.spacing(3),
  },
  ".MuiInputBase-input": {
    borderRadius: 0,
    position: "relative",
    backgroundColor: "white",
    border: "1px solid",
    borderLeft: 0,
    borderRight: 0,
    borderTop: 0,
    borderColor: "var(--color-slate-400)",
    fontSize: 14,
    width: "100%",
    padding: "5px 35px 5px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 6 -0.1rem`,
      backgroundColor: `${alpha(theme.palette.primary.main, 0.1)}`,
      borderColor: theme.palette.primary.main,
      borderRadius: 0,
      borderLeft: 0,
      borderRight: 0,
      borderTop: 0,
    },
  },
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

type SelectInputType = {
  label?: string;
  name: string;
  options: SelectOption[];
  onChange?: (event: SelectChangeEvent) => void;
  defaultValue?: string;
  hideLabel?: boolean;
  error?: boolean;
};
const SelectInput2 = (props: SelectInputType) => {
  return (
    <FormControl fullWidth className="pt-10">
      {!props.hideLabel && (
        <YellowLabel shrink htmlFor={props.name} className={"text-lg"}>
          {props.label}
        </YellowLabel>
      )}
      <BootstrapSelect
        label="Age"
        id={props.name}
        name={props.name}
        variant="outlined"
        onChange={props.onChange}
        defaultValue={props.defaultValue}
        error={props.error}
      >
        {props.options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </BootstrapSelect>
    </FormControl>
  );
};

export default SelectInput2;
