import React from "react";
import Navbar from "../components/Navbar";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Typography,
} from "@mui/joy";

const Login = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f4f6f8",
        }}
      >
        <Box
          sx={{
            borderRadius: "16px",
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            padding: "32px",
            width: {xs:'260px', sm:"360px"},
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "32px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              marginBottom: "16px",
            }}
          >
            Welcome Back!
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Enter your email"
                type="email"
                sx={{
                  borderRadius: "8px",
                  fontSize: "16px",
                }}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Enter your password"
                type="password"
                sx={{
                  borderRadius: "8px",
                  fontSize: "16px",
                }}
                required
              />
            </FormControl>
            <Button
              sx={{
                backgroundColor: "#007bff",
                color: "#ffffff",
                fontWeight: 500,
                padding: "12px",
                borderRadius: "8px",
                ":hover": {
                  backgroundColor: "#0056b3",
                },
              }}
            >
              Log In
            </Button>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                marginTop: "8px",
              }}
            >
              <Typography fontSize="14px">
                Don't have an account?
              </Typography>
              <Link
                href="/signup"
                sx={{
                  fontSize: "14px",
                  color: "#007bff",
                  textDecoration: "none",
                  ":hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                SignUp
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
