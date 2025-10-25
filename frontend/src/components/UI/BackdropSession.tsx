import {
  Backdrop,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Form from "next/form";
import React from "react";
import SelectInput from "./SelectInput";
import CustomButton from "./Button";

type BackdropSessionType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BackdropSession = ({ isOpen, setIsOpen }: BackdropSessionType) => {
  return (
    <Backdrop open={isOpen} className="z-10">
      <div className="bg-white rounded-xl shadow-md w-[325px] py-4 px-5">
        <div className="flex flex-row justify-between">
          <p className="font-bold">Set up Session</p>
          <div>
            <button className="cursor-pointer" onClick={() => setIsOpen(false)}>
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <Form action={() => {}} className="mt-2">
          <p>Duration</p>
          <div className="flex flex-row gap-5 items-center mt-2">
            <div className="flex flex-row items-center gap-2">
              <SelectInput
                name="hours"
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                  { value: "6", label: "6" },
                ]}
                defaultValue="1"
                hideLabel
              />
              <label htmlFor="hours" className="text-sm">
                Hours
              </label>
            </div>
            <div className="flex flex-row items-center gap-2">
              <SelectInput
                name="minutes"
                options={[
                  { value: "0", label: "0" },
                  { value: "5", label: "5" },
                  { value: "10", label: "10" },
                  { value: "15", label: "15" },
                  { value: "20", label: "20" },
                  { value: "25", label: "25" },
                  { value: "30", label: "30" },
                  { value: "35", label: "35" },
                  { value: "40", label: "40" },
                  { value: "45", label: "45" },
                  { value: "50", label: "50" },
                  { value: "55", label: "55" },
                ]}
                defaultValue="0"
                hideLabel
              />
              <label htmlFor="minutes" className="text-sm">
                Minutes
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
      </div>
    </Backdrop>
  );
};

export default BackdropSession;
