import React from "react";

type LinkProps = {
  href: string;
  text: string;
  cssClass?: string;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
};

const CustomLink = ({
  href,
  text,
  cssClass,
  variant = "primary",
  icon,
}: LinkProps) => {
  return (
    <a
      href={href}
      className={`uppercase text-sm px-5  py-2 font-[500] rounded-sm ${
        variant === "primary"
          ? "bg-amber-300 hover:bg-amber-400"
          : "bg-[#fafafa] hover:bg-slate-100"
      }   ${cssClass}`}
      style={{
        boxShadow:
          "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
      }}
    >
      {text}
      {icon && <span className="inline-block ml-2">{icon}</span>}
    </a>
  );
};

export default CustomLink;
