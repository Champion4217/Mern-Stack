import React, { useState } from "react";
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
import Axios from "../axios/Axios.js";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await Axios.post("/register", {
        name,
        email,
        phone,
        password,
      });

      setSuccess("Signup successful!");
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

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
            width: { xs: "260px", sm: "360px" },
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
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={submitHandler}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                placeholder="Enter your name"
                type="text"
                sx={{ borderRadius: "8px", fontSize: "16px" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Enter your email"
                type="email"
                sx={{ borderRadius: "8px", fontSize: "16px" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input
                placeholder="Enter your Phone No"
                type="text"
                sx={{ borderRadius: "8px", fontSize: "16px" }}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Enter your password"
                type="password"
                sx={{ borderRadius: "8px", fontSize: "16px" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormControl>
            <Button
              type="submit"
              sx={{
                backgroundColor: "#007bff",
                color: "#ffffff",
                fontWeight: 500,
                padding: "12px",
                borderRadius: "8px",
                ":hover": { backgroundColor: "#0056b3" },
              }}
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
          </Box>
          {error && (
            <Typography color="red" fontSize="14px" mt={1}>
              {error}
            </Typography>
          )}
          {success && (
            <Typography color="green" fontSize="14px" mt={1}>
              {success}
            </Typography>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              marginTop: "8px",
            }}
          >
            <Typography fontSize="14px">Have an account?</Typography>
            <Link
              href="/login"
              sx={{
                fontSize: "14px",
                color: "#007bff",
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
              }}
            >
              Login
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
