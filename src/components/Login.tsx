import {
  Box,
  CardHeader,
  Avatar,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import logo from "../assets/asss.png";
import Input from "./Input";
import ButtonComponent from "./ButtonComponent";
import { useState } from "react";

const Login = () => {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    const data = { username, password };
    console.log(data);
  };

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        width: "30%",
        margin: "auto",
        border: "2px solid",
        borderColor: "#0077b6",
        borderRadius: "2rem",
        boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.3)",
        position: "relative", // Position relative for absolute positioning of logo
        padding: "2rem 1rem 1rem 1rem",
        marginTop: "0",
      }}
    >
      {/* Logo Box */}
      <Box
        sx={{
          position: "absolute", // Absolute positioning for the logo
          top: "1rem", // Adjusts distance from top
          left: "1rem", // Adjusts distance from left
        }}
      >
        <Box
          component="img"
          src={logo} // Use your logo image
          alt="Logo"
          sx={{
            width: "80px", // Small width for the logo
            height: "auto", // Maintain aspect ratio
          }}
        />
      </Box>

      <Typography
        variant="h4"
        fontWeight="bold"
        color="black"
        sx={{
          marginTop: "3rem",
          marginBottom: "0.5rem",
          textAlign: "center",
        }}
      >
        Prijavi se
      </Typography>

      <Input
        name="Korisničko ime"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        name="Lozinka"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <ButtonComponent onClick={() => console.log(username)}>
        Prijava
      </ButtonComponent>
    </Paper>
  );
};

export default Login;
