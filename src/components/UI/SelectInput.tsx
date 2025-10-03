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
  label: string;
  name: string;
  options: SelectOption[];
  onChange?: (event: SelectChangeEvent) => void;
};
const SelectInput = (props: SelectInputType) => {
  return (
    <FormControl fullWidth className="pt-10">
      <YellowLabel shrink htmlFor={props.name} className={"text-lg"}>
        {props.label}
      </YellowLabel>
      <BootstrapSelect
        label="Age"
        id={props.name}
        name={props.name}
        variant="outlined"
        onChange={props.onChange}
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

export default SelectInput;
