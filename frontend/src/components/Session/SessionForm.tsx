"use state";
import React, { useMemo, useState } from "react";
import Form from "next/form";
import CustomButton from "../UI/Button";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import InfoIcon from "../UI/InfoIcon";
import SelectInput2 from "../UI/SelectInput2";
import DateTimePicker from "../UI/DateTimePicker";

const SessionForm = () => {
  const [time, setTime] = useState<Dayjs | null>(null);
  const today = useMemo(() => {
    return dayjs();
  }, []);

  const minTime = useMemo(() => {
    return dayjs().add(5, "minutes");
  }, []);

  return (
    <Form action={() => {}} className="mt-2">
      <div className="flex flex-row gap-5 items-center mt-2">
        <div className="flex flex-row items-center gap-2">
          <p>Duration</p>
          <SelectInput2
            name="minutes"
            options={[
              { value: "25", label: "25" },
              { value: "30", label: "30" },
              { value: "45", label: "45" },
              { value: "60", label: "60" },
              { value: "90", label: "90" },
            ]}
            defaultValue="25"
            hideLabel
          />
          <label htmlFor="minutes" className="text-sm">
            minutes
          </label>
        </div>
      </div>
      <div className="my-3">
        <p>Session type</p>
        <div>
          <FormControl className="w-full">
            <RadioGroup
              row
              aria-labelledby="form-control-label-placement"
              name="position"
              defaultValue="top"
              className="flex flex-row gap-5"
            >
              <FormControlLabel
                value="1on1"
                control={<Radio />}
                label="1 on 1"
              />
              <FormControlLabel
                value="group"
                control={<Radio />}
                label="Group"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <p className="mb-2 flex gap-2">
          Start Date and Time
          <InfoIcon message="Session can start min 5 minutes from now" />
        </p>
        <DateTimePicker
          ampm={false}
          minDate={today}
          minTime={minTime}
          timeSteps={{ minutes: 5 }}
        />
      </div>

      <CustomButton
        type="submit"
        cssClasses="w-full mt-3"
        text="Start Session"
        variant="primary"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        }
      />
    </Form>
  );
};
export default SessionForm;
