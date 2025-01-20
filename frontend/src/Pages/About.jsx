import { Box, Typography } from "@mui/joy";
import React from "react";
import Navbar from "../components/Navbar";
import img1 from "../assests/epcm.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          minHeight: "70vh",
          backgroundColor: "#f4f6f8",
          padding: "40px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "60%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: "center",
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Text Section */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "24px",
                fontWeight: "600",
                color: "#333333",
              }}
            >
              About SLnko
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#555555",
              }}
            >
              SLnko is a one-stop platform providing end-to-end solutions to
              Solar Developers, EPCs & Installers. Incorporated in 2018 as an
              engineering company, we have expanded the horizon of our services
              to SCM (Supply Chain Management), EPCM
              (Engineering-Procurement-Construction Management) & PM (Project
              Management).
              <br />
              <br />
              Our services can be availed at any stage from the pre-bid & early
              planning phase up to construction, installation, and commissioning
              of Solar Projects of any capacity. We are a team of young,
              energetic, and experienced professionals constantly challenging
              ourselves to deliver the best services. We strive for opportunity
              in each dimension of a project. Our holistic approach ensures that
              a project is optimized for design & cost, along with other aspects
              such as execution, durability, and operations, thereby creating a
              higher value for money.
            </Typography>
          </Box>

          {/* Image Section */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              borderRadius: "12px",
              "@media (max-width: 1000px)": {
                display: "none",
              },
            }}
          >
            <img
              alt="epcm"
              src={img1}
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                borderRadius: "15px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
