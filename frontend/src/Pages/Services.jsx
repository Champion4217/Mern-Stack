import React from "react";
import Navbar from "../components/Navbar";
import { Box, Grid, Typography } from "@mui/joy";

const Services = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          minHeight: "80vh",
          backgroundColor: "#f4f6f8",
          padding: "40px 20px",
        }}
      >
        {/* Header */}
        <Typography
          component="h1"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: "28px", sm: "32px", md: "40px" },
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Our Services
        </Typography>

        {/* Services Grid */}
        <Grid
          container
          spacing={4}
          sx={{
            justifyContent: "center",
            
          }}
        >
          {/* Service Cards */}
          {[
            {
              title: "Design & Engineering",
              description:
                "Designing of a solar power plant is one of the most critical stages of the project which requires a lot of technical expertise. Designing a solar power plant requires expert engineering skills in analyzing the topography of the site, selecting technology, and configuring the system. We approach every project with efficiency, initiating with a comprehensive review of client specifications.",
            },
            {
              title: "Supply Chain Management",
              description:
                "Our Supply Chain and Vendor Management services guarantee a seamless and efficient flow of materials and equipment from suppliers to project sites by collaborating with vendors for timely delivery, maintaining quality control, and managing inventory levels. Our experienced professionals streamline the supply chain process ensuring maximum efficiency, minimal cost.",
            },
            {
              title: "Engineering, Procurement, and Construction Management",
              description:
                "SLnko Energy provides comprehensive Engineering, Procurement, and Construction Management (EPCM) services for projects of any scale. Our team of experts manages every aspect of the project, from design to construction, ensuring efficient completion within budget and the highest quality standards.",
            },
            {
              title: "Advisory and Auditing",
              description:
                "We deliver proficient Advisory and Auditing services to enable clients to make informed decisions and optimize their projects. Our experienced professionals provide expert guidance on project management, energy efficiency, sustainability, and regulatory compliance, while our auditing services identify areas for improvement.",
            },
            {
              title: "Feasibility Study",
              description:
                "Our proficient Feasibility Study services evaluate a project's viability before initiation, with our experienced professionals conducting a comprehensive analysis of technical, financial, and economic aspects to provide clients with the necessary information for informed decision-making.",
            },
            {
              title: "Project Management Consultancy",
              description:
                "At SLnko, we deliver top-notch services by leveraging state-of-the-art technology, and as pioneers in the sector, we have adopted the EPCM technique. Our exemplary project management is complemented by specialist support on the client's side during every phase of the project.",
            },
          ].map((service, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "360px",
                  borderRadius: "16px",
                  backgroundColor: "#ffffff",
                  padding: "20px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography
                  component="h2"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#333333",
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "#555555",
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Services;
