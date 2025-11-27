"use client";
import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = (props: ErrorMessageProps) => {
  const [showError, setShowError] = React.useState(true);

  return showError ? (
    <div className="bg-red-400 p-2 rounded-sm relative">
      <p className="text-xs text-white pr-[28px]">{props.message}</p>
      <span
        className="absolute top-1 right-1 cursor-pointer"
        onClick={() => setShowError(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6 fill-white text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </span>
    </div>
  ) : null;
};

export default ErrorMessage;
