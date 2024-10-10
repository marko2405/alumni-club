import { Box, Typography } from "@mui/material";
import React from "react";
import Login from "../components/Login";
import CoverImage from "../assets/cover.jpeg";
type Props = {};

const LoginPage = ({}: Props) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",

        display: "flex",
        flexDirection: "column",

        // backgroundImage: `url(${CoverImage})`,
        background: "linear-gradient(to right, #3572EF, #3ABEF9)",
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // Centers the background image
        // Ensures the image covers the entire component
      }}
    >
      <Typography
        variant="h4"
        color="initial"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: "white",
          marginTop: "3rem",
          marginBottom: "2rem",
        }}
      >
        Alumni Klub Assš
      </Typography>
      <Login />
    </Box>
  );
};

export default LoginPage;
