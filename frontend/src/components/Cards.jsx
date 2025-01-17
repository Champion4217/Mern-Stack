import { Box, Card, CardContent, Typography, Grid } from "@mui/joy";
import React from "react";
import img1 from "../assests/slnko_landing2.jpg";
import img2 from "../assests/slnko_landing3.jpg";
import img11 from "../assests/1.png";
import img21 from "../assests/2.png";
import img3 from "../assests/3.png";
import img4 from "../assests/4.png";
import img5 from "../assests/5.png";
import img6 from "../assests/6.png";
import img7 from "../assests/7.png";
import img8 from "../assests/8.png";

const Cards = () => {
  const images = [
    img11,
    img21,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img11,
    img21,
    img3,
    img7,
    img8,
  ];
  const number = 55000;

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      {/* Background Layer */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(250px)",
          zIndex: -1,
        }}
      ></Box>

      {/* Content Layer */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "Bold",
            fontFamily: "cursive",
            paddingBottom: "20px",
          }}
        >
          Why SLnko
        </Typography>

        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" }, // Responsive layout
            gap: "20px",
            paddingBottom: "20px",
          }}
        >
          <Grid item xs={12} sm={4}>
            <Card sx={{ borderRadius: "20px" }}>
              <CardContent>
                <Typography component={"h1"}>Service with Perspective.</Typography>
                <Typography
                  component={"span"}
                  sx={{ fontFamily: "cursive", color: "#21d0e2" }}
                >
                  We listen to our clients to ensure that the project meets all
                  aspects such as execution, durability, and operations thereby
                  creating higher value for money.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ borderRadius: "20px" }}>
              <CardContent>
                <Typography component={"h1"}>State-of-the-art Engineering</Typography>
                <Typography
                  component={"span"}
                  sx={{ fontFamily: "cursive", color: "#e77d13" }}
                >
                  Equipped with the latest software, technology, and advanced
                  algorithms, we are the pioneer in delivering error-free
                  optimized engineering solutions.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ borderRadius: "20px" }}>
              <CardContent>
                <Typography component={"h1"}>Hassle Free Procurement</Typography>
                <Typography
                  component={"span"}
                  sx={{ fontFamily: "cursive", color: "#e7134d" }}
                >
                  With our streamlined and transparent procurement processes, we
                  deliver quality and cost-effective sourcing, ensuring
                  minimum time involvement of our client.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: "20px",
          }}
        >
          <Grid item xs={12} sm={4}>
            <Card sx={{ borderRadius: "20px" }}>
              <CardContent>
                <Typography component={"h1"}>Quality Assured</Typography>
                <Typography
                  component={"span"}
                  sx={{ fontFamily: "cursive", color: "#0634c4" }}
                >
                  We don’t believe in assignment, we believe in partnership. Our
                  services include an unwavering attention to quality assurance
                  at every step of the process.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ borderRadius: "20px" }}>
              <CardContent>
                <Typography component={"h1"}>Unwavering Support</Typography>
                <Typography
                  component={"span"}
                  sx={{ fontFamily: "cursive", color: "#e4bf08" }}
                >
                  As a “Partner to Project,” we stay with our clients right from
                  Pre-Bid through Planning, Engineering, Procurement, Execution,
                  and Handover, ensuring seamless collaboration.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ borderRadius: "20px" }}>
              <CardContent>
                <Typography component={"h1"}>Highly Skilled Team</Typography>
                <Typography
                  component={"span"}
                  sx={{ fontFamily: "cursive", color: "#21d0e2" }}
                >
                  We are a team of young, energetic, and experienced
                  professionals who constantly challenge ourselves to deliver
                  the best solutions, driving innovation.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Fourth Part */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "50vh",
          paddingTop: "100px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "40%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            zIndex: 1,
            backgroundImage: `url(${img2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "white", fontFamily: "fantasy", "@media (max-width: 600px)": {fontSize: '20px'}, fontSize: "30px" }}>
              {number.toLocaleString()} MT
            </Typography>
            <Typography component={"span"} sx={{ color: "whitesmoke" }}>
              CO₂ mitigated per day
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "white", "@media (max-width: 600px)": {fontSize: '20px'}, fontFamily: "fantasy", fontSize: "40px" }}>
              2,600+MW
            </Typography>
            <Typography component={"span"} sx={{ color: "whitesmoke" }}>
              Project Delivered
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "white", "@media (max-width: 600px)": {fontSize: '20px'}, fontFamily: "fantasy", fontSize: "40px" }}>
              100+
            </Typography>
            <Typography component={"span"} sx={{ color: "whitesmoke" }}>
              Happy Clients
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Our Clients Section */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "30px" }} component={"h1"}>
            Our Clients
          </Typography>
        </Box>
        <Box
          sx={{
            overflow: "hidden",
            width: "100%",
            position: "relative",
            height: "250px",
            bgcolor: "primary.light",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "calc(2 * 100%)", // Twice the width for seamless scrolling
              animation: "scroll 10s linear infinite",
            }}
          >
            {/* Render images twice for smooth looping */}
            {images.concat(images).map((image, index) => (
              <Box
                key={index}
                sx={{
                  flex: "0 0 auto", // Prevent shrinking
                  width: "150px", // Adjust to your desired image size
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 1,
                }}
              >
                <img
                  src={image}
                  alt={`Carousel item ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </Box>
            ))}
          </Box>

          <style>
            {`
              @keyframes scroll {
                0% {
                  transform: translateX(0); /* Start at the initial position */
                }
                100% {
                  transform: translateX(-50%); /* Move halfway (one set of images) */
                }
              }
            `}
          </style>
        </Box>
      </Box>
    </Box>
  );
};

export default Cards;
