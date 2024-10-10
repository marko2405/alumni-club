import React from "react";
import Button from "@mui/material/Button";

type ButtonProps = {
  children: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ButtonComponent = ({ children, onClick }: ButtonProps) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ marginBottom: "2rem" }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
