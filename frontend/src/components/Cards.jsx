import { Box, Card, CardContent, Typography } from "@mui/joy";
import React from "react";
import img1 from "../assests/slnko_landing2.jpg";
import img2 from "../assests/slnko_landing3.jpg";
const Cards = () => {
  const number = 55000;
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
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
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              paddingBottom: "20px",
            }}
          >
            <Card
              sx={{
                width: "20%",
                borderRadius: "20px",
              }}
            >
              <CardContent>
                <Typography component={"h1"}>
                  Service with Perspective.
                </Typography>
                <Typography
                  component={"span"}
                  sx={{ fontFamily: "cursive", color: "#21d0e2" }}
                >
                  We listen to our clients to ensure that the project meets all
                  aspects such as execution, durability, and operations there by
                  creating higher value of money.
                </Typography>
              </CardContent>
            </Card>

            <Card
              sx={{
                width: "20%",
                borderRadius: "20px",
              }}
            >
              <CardContent>
                <Typography component={"h1"}>
                  State-of-the-art Engineering
                </Typography>
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

            <Card
              sx={{
                width: "20%",
                borderRadius: "20px",
              }}
            >
              <CardContent>
                <Typography component={"h1"}>
                  Hassle Free Procurement
                </Typography>
                <Typography
                  component={"span"}
                  sx={{ fontFamily: "cursive", color: "#e7134d" }}
                >
                  With our streamlined and transparent procurement processes, we
                  deliver quality and cost-effective sourcing further ensuring
                  minimum time involvement of our client.
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Card
              sx={{
                width: "20%",
                borderRadius: "20px",
              }}
            >
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

            <Card
              sx={{
                width: "20%",
                borderRadius: "20px",
              }}
            >
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

            <Card
              sx={{
                width: "20%",
                borderRadius: "20px",
              }}
            >
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
          </Box>
        </Box>

        {/* Fourth Part */}
        <Box
        sx={{
          width: "100%",
            height: "100%",
            paddingTop:'100px'
        }}
        >
        <Box
          sx={{
            height:'40%',
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
            <Typography
              sx={{ color: "white", fontFamily: "fantasy", fontSize: "40px" }}
            >
              {number.toLocaleString()} MT
            </Typography>
            <Typography
              component={"span"}
              sx={{
                color: "whitesmoke",
              }}
            >
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
            <Typography
              sx={{ color: "white", fontFamily: "fantasy", fontSize: "40px" }}
            >
              2,600+MW
            </Typography>
            <Typography
              component={"span"}
              sx={{
                color: "whitesmoke",
              }}
            >
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
            <Typography
              sx={{ color: "white", fontFamily: "fantasy", fontSize: "40px" }}
            >
              100+
            </Typography>
            <Typography
              component={"span"}
              sx={{
                color: "whitesmoke",
              }}
            >
              Happy Clients
            </Typography>
          </Box>
        </Box>
      </Box>
      </Box>
    </Box>
  );
};

export default Cards;
