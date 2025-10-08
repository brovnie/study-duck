"use client";
import React from "react";
import CustomLink from "../UI/Link";
import { Badge, IconButton, styled } from "@mui/material";

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "white",
}));

const TopBar = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full px-5 mt-5">
      <div className="bg-white px-3 py-2 shadow-md rounded-lg">
        <div className="flex items-center gap-3">
          <p>
            Next session in: <span className="font-bold">10 minutes</span>
          </p>
          <CustomLink
            href="/dashboard/sessions/link-to-session"
            text="Go"
            variant="primary"
          />
        </div>
      </div>
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-row items-center gap-2 bg-white px-3 py-2 shadow-md rounded-lg">
          <svg
            className={"fill-green-600"}
            width="25"
            height="23"
            viewBox="0 0 25 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.9959 8.8716C22.7128 8.58036 22.2004 8.6241 21.9837 8.96037C21.6545 9.47148 21.1802 9.88702 20.6757 10.2192C19.5537 10.9586 18.1947 11.3259 16.8163 11.3259H13.0111C12.6879 11.3259 12.535 11.1582 12.4851 10.911C12.4203 10.591 12.5672 10.2661 12.8416 10.061C14.2301 9.02288 15.1182 7.43893 15.1182 5.66288C15.1182 2.40309 12.1291 -0.213326 8.53872 0.013743C5.7949 0.187219 3.53187 2.05654 2.96504 4.47215C2.93857 4.58484 2.84223 4.67195 2.71982 4.69587C1.80066 4.87553 0.841718 4.9574 0.29546 4.99218C0.0687431 5.00675 -0.0671775 5.22867 0.0339237 5.41614C0.704275 6.65928 1.88376 7.54382 2.93701 8.12989C3.36687 8.36912 3.74586 8.67848 4.04729 9.04856L4.06813 9.07417C4.34142 9.40968 4.40934 9.8571 4.22428 10.2404C4.0791 10.5412 3.8803 10.6787 3.8803 10.6787C1.39738 12.7125 0.88817 14.5812 0.895197 16.1798C0.902223 18.3172 2.18109 20.122 4.18056 21.2053C8.97451 23.8025 15.4712 23.1209 18.537 22.0207C20.8848 21.1777 23.1177 19.7391 24.0964 17.6004C26.0987 13.2249 24.2563 10.1684 22.9959 8.8716Z"
              fillOpacity="0.5"
            />
          </svg>

          <p>100/200</p>
        </div>
        <div>
          <CustomIconButton
            aria-label="Notifications"
            className="bg-white p-4 rounded-full shadow-md"
          >
            <Badge color="primary" badgeContent={2}>
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.169 15.082C14.0322 14.8614 15.8629 14.4217 17.623 13.772C16.1324 12.1208 15.3087 9.9745 15.312 7.75V7C15.312 5.4087 14.6799 3.88258 13.5546 2.75736C12.4294 1.63214 10.9033 1 9.312 1C7.7207 1 6.19458 1.63214 5.06936 2.75736C3.94414 3.88258 3.312 5.4087 3.312 7V7.75C3.31502 9.97463 2.49099 12.121 1 13.772C2.733 14.412 4.56 14.857 6.455 15.082M12.169 15.082C10.271 15.3071 8.35301 15.3071 6.455 15.082M12.169 15.082C12.3131 15.5319 12.3489 16.0094 12.2736 16.4757C12.1982 16.942 12.0138 17.384 11.7354 17.7656C11.4569 18.1472 11.0923 18.4576 10.6712 18.6716C10.2501 18.8856 9.78438 18.9972 9.312 18.9972C8.83962 18.9972 8.37392 18.8856 7.95281 18.6716C7.53169 18.4576 7.16707 18.1472 6.88862 17.7656C6.61017 17.384 6.42576 16.942 6.35041 16.4757C6.27506 16.0094 6.3109 15.5319 6.455 15.082"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Badge>
          </CustomIconButton>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
