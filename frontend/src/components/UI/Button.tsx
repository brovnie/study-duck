import React from "react";
import Button from "@mui/material/Button";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  icon?: React.ReactNode;
  cssClasses?: string;
  type: "submit" | "button" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

const CustomButton = (props: ButtonProps) => {
  return (
    <Button
      variant="contained"
      color={props.variant}
      className={props.cssClasses}
      endIcon={props.icon}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </Button>
  );
};

export default CustomButton;
