import { TextField } from "@mui/material";
import React from "react";
type InputProps = {
  name?: string;
  value?: string;
  type?: string;
  onChange?: (e: any) => void;
  className?: string;
  onKeyDown?: (e: any) => void;
  disabled?: boolean;
};

const Input = ({
  name,
  value,
  type,
  onChange,
  className,
  onKeyDown,
  disabled,
}: InputProps) => {
  return (
    <TextField
      sx={{
        width: "60%",
        borderRadius: "8px", // Set the desired border-radius
        "& .MuiOutlinedInput-root": {
          borderRadius: "20px", // Round the corners of the outlined input
        },
        textAlign: "left",
        height: "40px",
      }}
      label={name}
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
