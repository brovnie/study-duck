"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { SelectOption } from "./UI/types";
import moment from "moment-timezone";
import { alpha, FormControl, InputLabel, styled } from "@mui/material";

const StyledAutocomplete = styled(Autocomplete<SelectOption>)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: 10,
    backgroundColor: "white",
    border: "1px solid var(--color-slate-400)",
    fontSize: 14,
    padding: "2.5px 12px 2.5px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    "&:hover": {
      borderColor: theme.palette.primary.main,
    },

    "&.Mui-focused": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
    "& fieldset": {
      border: "none",
    },
  },

  "& .MuiInputBase-input": {
    padding: "10px 12px",
  },
}));

const YellowLabel = styled(InputLabel)(({ theme }) => ({
  color: "var(--color-text-dark)",
  "&.Mui-focused": {
    color: theme.palette.primary.main,
  },
  left: -14,
}));

export default function TimezoneSelect() {
  const [focused, setFocused] = React.useState(false);

  const timezones = moment.tz.names();
  const timezoneOptions: SelectOption[] = timezones.map((timezone) => {
    const offset = moment.tz(timezone).format("Z");
    return {
      value: timezone,
      label: `${timezone} (GMT${offset})`,
    };
  });
  return (
    <FormControl fullWidth>
      <YellowLabel
        shrink
        htmlFor="timezone"
        className={`text-lg ${focused ? "Mui-focused" : ""}`}
      >
        Time zone
      </YellowLabel>
      <StyledAutocomplete
        id="country-select-demo"
        sx={{ width: 300, height: 40 }}
        options={timezoneOptions}
        autoHighlight
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        renderOption={(props, option) => {
          const { key, ...optionProps } = props;
          return (
            <Box
              key={key}
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...optionProps}
            >
              {option.label}
            </Box>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            slotProps={{
              htmlInput: {
                ...params.inputProps,
                autoComplete: "new-password",
              },
            }}
          />
        )}
      />
    </FormControl>
  );
}
