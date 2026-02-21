import {
  DateTimePicker,
  LocalizationProvider,
  PickersActionBar,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { useState } from "react";

interface CustomDateTimePickerProps {
  ampm?: boolean;
  minDate?: Dayjs;
  minTime?: Dayjs;
  timeSteps?: {
    minutes?: number;
    hours?: number;
  };
}

export default function CustomDateTimePicker(props: CustomDateTimePickerProps) {
  const [value, setValue] = useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        value={value}
        onChange={setValue}
        ampm={props.ampm}
        minDate={props.minDate}
        minTime={props.minTime}
        timeSteps={props.timeSteps}
        sx={{
          width: "100%",
          "& .MuiPickersInputBase-root": {
            borderRadius: 3,
          },
        }}
        name="datetime"
        slots={{
          actionBar: (props) => (
            <PickersActionBar
              {...props}
              sx={{
                "& .MuiButton-root": {
                  color: "black",
                },
                "& .MuiButton-root:last-of-type": {
                  backgroundColor: "var(--color-amber-300)",
                  boxShadow:
                    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",

                  "&:hover": {
                    backgroundColor: "#facc15",
                    boxShadow:
                      "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
                  },
                  "&:active": {
                    transition:
                      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  },
                },
              }}
            />
          ),
        }}
      />
    </LocalizationProvider>
  );
}
