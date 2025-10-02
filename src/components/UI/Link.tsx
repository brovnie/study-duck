import React from "react";

type LinkType = {
  href: string;
  text: string;
  cssClass?: string;
};

const CustomLink = ({ href, text, cssClass }: LinkType) => {
  return (
    <a
      href={href}
      className={`uppercase text-sm px-5 bg-amber-300 py-2 font-[500] rounded-sm hover:bg-amber-400  ${cssClass}`}
      style={{
        boxShadow:
          "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
      }}
    >
      {text}
    </a>
  );
};

export default CustomLink;
