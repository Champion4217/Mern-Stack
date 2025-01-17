import React from "react";
import Box from "@mui/joy/Box";
import { Button, Typography } from "@mui/joy";
import Navbar from "../components/Navbar";
import img1 from "../assests/slnko_landing2.jpg";
import img2 from "../assests/feature.png";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          filter: "blur(200px)",
          zIndex: -1,
        }}
      />

      <Box
        sx={{
          width: "80%",
          margin: "0 auto",
          "@media (max-width: 600px)": {
            width: "95%", // For small screens, make it 95% width
          },
        }}
      >
        <Navbar />
      </Box>

      <Box
        sx={{
          width: "80%",
          margin: "10vh auto",
          color: "white",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Stack content on small screens
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "12px",
          overflow: "hidden",
          padding: "20px",
          "@media (max-width: 600px)": {
            width: "100%", // For small screens, make it 95% width
          },
        }}
      >
        <Box
          sx={{
            flex: 1,
            paddingRight: "20px",
            "@media (max-width: 600px)": {
              paddingRight: "0", // No padding on small screens
            },
          }}
        >
          <Typography
            component="h1"
            fontSize={{ xs: "40px", sm: "60px" }} // Adjust font size for small screens
            fontWeight="bold"
            fontFamily="sans-serif"
            color="primary"
          >
            Where{" "}
            <Typography
              component="span"
              fontSize={{ xs: "40px", sm: "60px" }} // Adjust font size for small screens
              fontWeight="bold"
              fontFamily="sans-serif"
              color="success"
              sx={{
                textDecoration: "underline",
              }}
              padding="10px"
            >
              Nature
            </Typography>{" "}
            becomes First Priority!
          </Typography>
          <Typography
            component="h3"
            paddingTop="20px"
            fontFamily="cursive"
            fontSize={{ xs: "16px", sm: "18px" }} // Adjust font size for small screens
          >
            One-stop platform for providing Solar Developers, EPC & Installers.
            Horizon of our services expands through Engineering, SCM (Supply
            Chain Management), EPCM (Engineering Procurement-Construction
            Management) to PM (Project Management). Our services can be availed
            at any stage from the Pre-Bid & early planning phase up to
            construction, installation, and commissioning of Solar Projects.
          </Typography>

          <Box
            sx={{
              paddingTop: "20px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: "10px", // Add space between buttons on smaller screens
            }}
          >
            <Box
              sx={{
                width: { xs: "40%", sm: "30%" }, // Adjust width for small screens
              }}
            >
              <Button
                sx={{
                  borderRadius: "20px",
                  width: "100%",
                }}
                component={Link}
                to="/about"
              >
                Read More
              </Button>
            </Box>
            <Box
              sx={{
                width: { xs: "40%", sm: "30%" }, // Adjust width for small screens
              }}
            >
              <Button
                sx={{
                  borderRadius: "20px",
                  fontWeight: "bold",
                  fontSize: "15px",
                  width: "100%",
                }}
                component={Link}
                to="/contact"
                variant="outlined"
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "@media (max-width: 1000px)": {
              display: "none", // Hide image on small screens
            },
          }}
        >
          <img
            alt="landing"
            src={img1}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "90%",
              borderRadius: "8px",
              backdropFilter: "blur(10px)",
            }}
          />
        </Box>
      </Box>

      {/* Second Part */}
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "70%",
            height: "70vh",
            margin: "10vh auto",
            "@media (max-width: 800px)": {
              width: "100%", // Adjust image width for small screens
              height: "100vh", // Adjust image height for small screens
            },
          }}
          alt="landing"
          src={img2}
        />
      </Box>

      {/* Third Part */}
      <Cards />
    </>
  );
};

export default Home;
