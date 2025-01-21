import React, { useState } from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Stack from "@mui/joy/Stack";
import logo from "../assests/slnko.png";
import { Link } from "react-router-dom";
import Grid from "@mui/joy/Grid";
import { IconButton, Drawer } from "@mui/joy";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/joy/Button";
const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Grid
          sx={{
            px: { sm: 2, md: 2 },
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          <img alt="logo" src={logo} width={"50%"} />
        </Grid>

        <Grid sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
          <IconButton onClick={toggleDrawer(true)} sx={{ color: "blue" }}>
            <MenuIcon />
          </IconButton>
        </Grid>

        <Grid
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          <List orientation="horizontal">
            {["Home", "About", "Contact", "Services", "Logout"].map(
              (item) => (
                <ListItem
                  key={item}
                  sx={{
                    color: "black",
                    cursor: "pointer",
                    fontSize:'20px',
                    fontFamily:'cursive',
                    "&:hover": { textDecoration: "underline", color: "blue" },
                  }}
                >
                  <Link
                    to={`/${item.toLowerCase()}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                    aria-label={`Navigate to ${item}`}
                  >
                    {item}
                  </Link>
                </ListItem>
              )
            )}
          </List>
        </Grid>
      </Stack>

      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
        }}
      >
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            padding: 1,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box sx={{ marginBottom: 2 }}>
            <img alt="logo" src={logo} width={"50%"} />
          </Box>

          <List>
            {["Home", "About", "Contact", "Services"].map((item) => (
              <ListItem key={item}>
                <Button sx={{ width: "50%" }} variant="outlined">
                  <Link
                    to={`/${item.toLowerCase()}`}
                    style={{ textDecoration: "none", color: "blue" }}
                    aria-label={`Navigate to ${item}`}
                  >
                    {item}
                  </Link>
                </Button>
              </ListItem>
            ))}
          </List>

          <Box sx={{ flexGrow: 1 }} />

          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="outlined"
              component={Link}
              to="/logout"
              aria-label="Navigate to Login"
              sx={{ width: "50%", color: "blue" }}
            >
              Logout
            </Button>

            
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
