import CustomLink from "@/components/UI/Link";
import React from "react";
import Counter from "./Counter";

const RightSide = () => {
  return (
    <div className="flex items-center justify-end gap-3">
      <Counter />
      <div className="border-l-1 w-1 border-white h-10"></div>
      <CustomLink
        text="Leave"
        variant="primary"
        href="/dashboard"
        icon={
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.8892 10.2224V5.96304C17.8892 5.28526 17.62 4.63523 17.1407 4.15597C16.6614 3.6767 16.0114 3.40745 15.3336 3.40745H8.51872C7.84094 3.40745 7.19092 3.6767 6.71165 4.15597C6.23238 4.63523 5.96313 5.28526 5.96313 5.96304V21.2966C5.96313 21.9744 6.23238 22.6244 6.71165 23.1037C7.19092 23.5829 7.84094 23.8522 8.51872 23.8522H15.3336C16.0114 23.8522 16.6614 23.5829 17.1407 23.1037C17.62 22.6244 17.8892 21.9744 17.8892 21.2966V17.0373M21.2967 17.0373L24.7041 13.6298M24.7041 13.6298L21.2967 10.2224M24.7041 13.6298H10.2224"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />
    </div>
  );
};

export default RightSide;
