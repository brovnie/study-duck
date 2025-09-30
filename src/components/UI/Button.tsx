import React, { SVGProps } from "react";
import Button from "@mui/material/Button";

interface ButtonType {
  type: "primary" | "secondary";
  text: string;
  icon?: React.ReactNode;
  cssClasses?: string;
}

const Btn = (props: ButtonType) => {
  return (
    <Button
      variant="contained"
      color={props.type}
      className={props.cssClasses}
      endIcon={props.icon}
    >
      {props.text}
    </Button>
  );
};

export default Btn;
