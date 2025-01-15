import React, { useState } from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Stack from "@mui/joy/Stack";
import logo from "../assests/slnko.png";
import { Link } from "react-router-dom";
import Grid from "@mui/joy/Grid";
import { IconButton, Drawer, ListItemButton } from "@mui/joy";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  return (
    <Box sx={{ padding: 2, width: "100%", backgroundColor: "primary.light" }}>
      <Stack
        sx={{
          px: { sm: 6, md: 6 },
        }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid
          sx={{
            px: { sm: 2, md: 2 },
          }}
        >
          <img alt="logo" src={logo} width={"50%"} />
        </Grid>

        <Grid sx={{ display: { xs: "block", sm:"block", md: "none" } }}>
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{ color: "blue" }}
          >
            <MenuIcon />
          </IconButton>
        </Grid>

        <Grid
          sx={{
            display: { xs: "none", sm: "none", md: 'block' },
          }}
        >
          <List orientation="horizontal">
            {["Home", "About", "Contact", "Services", "Login", "Register"].map(
              (item) => (
                <ListItem
                  key={item}
                  sx={{
                    color: "blue",
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline", color: "black" },
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
        anchor="right"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        sx={{
          display: { xs: "block", sm: "block", md: 'none' },
        }}
      >
        <Box
          sx={{
            width: 250,
            padding: 2,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {["Home", "About", "Contact", "Services", "Login", "Register"].map(
              (item) => (
                <ListItem key={item} 
                sx={{
                  color: "blue",
                  cursor: 'pointer',
                  "&:hover": { textDecoration: "underline", color: "black" },
                }}
                disablePadding>
                  <ListItemButton>
                    <Link
                      to={`/${item.toLowerCase()}`}
                      style={{ textDecoration: "none", color: "blue" }}
                      aria-label={`Navigate to ${item}`}
                    >
                      {item}
                    </Link>
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
