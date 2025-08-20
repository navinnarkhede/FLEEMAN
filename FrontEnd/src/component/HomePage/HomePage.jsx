import * as React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from '../Navbar'; // Corrected import path
import HeroSection from './HeroSection';
import { BookingForm } from "./BookingForm";

// Define a custom dark theme for the entire app
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // A light blue for contrast
    },
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#a0a0a0',
    },
  },
});

const HomePage = () => {
  // Animation variants for the main content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
        when: "beforeChildren",
      },
    },
  };

  const footerSx = {
    // Set the background to a dark color to match the app theme
    backgroundColor: '#121212', 
    color: '#ffffff',
    padding: '24px',
    marginTop: "auto",
    textAlign: "center",
    boxShadow: "0px -4px 15px rgba(0, 0, 0, 0.4)",
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ minHeight: "100vh", display: 'flex', flexDirection: 'column' }}>
        {/* The updated Navbar component */}
        <Navbar />

        {/* Main content with padding to prevent overlap with the fixed navbar */}
        <Box component="main" sx={{ flexGrow: 1, pt: '64px' }}>
          <HeroSection />
          <Container
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            sx={{ mt: 4 }}
          >
            <BookingForm />
          </Container>
        </Box>

        {/* The footer, consistent with the app's dark theme */}
        <Box component="footer" sx={footerSx}>
          <Typography variant="body2" sx={{color: '#ffffff'}}>
            © 2025 FleeMan All rights reserved.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
