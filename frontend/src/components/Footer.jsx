import { Box, Typography } from "@mui/joy";
import React from "react";


const Footer = () => {
  return (
    <Box
      sx={{
        height:'10vh',
        backgroundColor:'#05146a ',
        borderRadius:'10px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}
    >
      
       
        
        <Box>
          <Typography sx={{
            color:'white'
          }}>
            © 2024 All rights reserved. SLnko Energy Pvt. Ltd.
          </Typography>
        </Box>
      </Box>

  );
};

export default Footer;
