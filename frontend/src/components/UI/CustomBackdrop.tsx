"use client";
import { Backdrop } from "@mui/material";
import React from "react";

type CustomBackdropType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  title: string;
};

const CustomBackdrop = ({
  isOpen,
  setIsOpen,
  children,
  title,
}: CustomBackdropType) => {
  return (
    <Backdrop open={isOpen} className="z-10">
      <div className="bg-white rounded-xl shadow-md w-[325px] py-4 px-5">
        <div className="flex flex-row justify-between">
          <p className="font-bold">{title}</p>
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
        {children}
      </div>
    </Backdrop>
  );
};

export default CustomBackdrop;
