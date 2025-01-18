import React from "react";
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

const Contact = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          height: "80vh",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              "@media (max-width: 1000px)": {
              
                width:'40%' // Hide image on small screens
              },
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
            <img  src={img1} alt="contact" />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex", 
                flexDirection: "column", 
                gap: 2, 
                maxWidth: "600px", 
                margin: "auto",
                width: {xs:'90%',sm:'90%' ,md:"80%", lg:'60%', xl:'50%'},
              }}
            >
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Enter Your Name" type="text" />
              </FormControl>

              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input placeholder="Enter Your Email" type="email" />
              </FormControl>

              <FormControl>
                <FormLabel>Message</FormLabel>

                <Textarea
                  name="message"
                  placeholder="Type your message here..."
                  required
                  minRows={4}
                  sx={{
                    resize: "both",
                    fontSize: "1rem",
                    padding: "12px",
                    borderRadius: "8px",
                  }}
                />
              </FormControl>
              <Button sx={{borderRadius:'20px'}}>
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
