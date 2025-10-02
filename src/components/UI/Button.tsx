import React from "react";
import Button from "@mui/material/Button";

interface ButtonType {
  variant: "primary" | "secondary";
  text: string;
  icon?: React.ReactNode;
  cssClasses?: string;
  type: "submit" | "button" | "reset";
}

const CustomButton = (props: ButtonType) => {
  return (
    <Button
      variant="contained"
      color={props.variant}
      className={props.cssClasses}
      endIcon={props.icon}
      type={props.type}
    >
      {props.text}
    </Button>
  );
};

export default CustomButton;
