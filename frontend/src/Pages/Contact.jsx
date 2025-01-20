import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Typography,
} from "@mui/joy";
import img1 from "../assests/contact.png";
import Axios from "../axios/Axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await Axios.post("/contact", {
        username,
        email,
        message,
      });
      console.log(response);
      toast.success("Message Submitted Successfully !", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });

      setUsername("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send message", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          backgroundColor: "#f4f6f8",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: { md: "row" },
            justifyContent: "center",
            alignItems: "center",

            "@media (max-width: 1000px)": {
              flexDirection: "column",
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "3rem",
              }}
              component={"h1"}
            >
              Contact Us
            </Typography>
            <Box
              sx={{
                "@media (max-width: 1000px)": {
                  display: "none",
                },
              }}
            >
              <img src={img1} alt="contact" />
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box
              component={"form"}
              onSubmit={submitHandler}
              sx={{
                gap: 2,
                maxWidth: "600px",
                margin: "auto",
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                padding: "32px",
                width: {
                  xs: "80%",
                  sm: "80%",
                  md: "80%",
                  lg: "60%",
                  xl: "50%",
                },
              }}
            >
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter Your Name"
                  type="text"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  type="email"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Message</FormLabel>

                <Textarea
                  name="message"
                  placeholder="Type your message here..."
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  minRows={4}
                  sx={{
                    resize: "both",
                    fontSize: "1rem",
                    padding: "12px",
                    borderRadius: "8px",
                  }}
                />
              </FormControl>
              <Button type="submit" sx={{ borderRadius: "20px" }} disabled={loading}>
                {loading ? "Submiting..." : "Submit"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
