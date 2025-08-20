import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const Login = () => {
  // states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // function to handle login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Hardcoded credentials for testing (removed)

    try {
      // The API call to the backend
      const response = await fetch("https://localhost:7223/api/User/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials or server error");
      }

      const token = await response.text();

      if (token) {
        sessionStorage.setItem("jwtToken", token);
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("isLoggedIn", "true");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          // Navigates to the homepage and forces a reload to update the navbar
          window.location.href = "/";
        });
      } else {
        throw new Error("Token not received");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '64px',
      }}
    >
      {/* Background Image with Blur and Dark Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url('https://images.unsplash.com/photo-1549465220-1a9088703417?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px) brightness(0.6)', // Apply blur and darken the image
          zIndex: -1,
        }}
      />
      
      <Container
        maxWidth="xs"
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Box
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.9)', // Changed to semi-transparent black
            padding: 4,
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            textAlign: 'center',
            color: '#e0e7ff',
          }}
        >
          <motion.div variants={itemVariants}>
            <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>
              Car Rental Login
            </Typography>
          </motion.div>
          
          {error && (
            <motion.div variants={itemVariants}>
              <Box sx={{ mt: 2, mb: 3 }}>
                <Typography color="error">{error}</Typography>
              </Box>
            </motion.div>
          )}

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            <motion.div variants={itemVariants}>
              <TextField
                fullWidth
                label="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                variant="outlined"
                sx={{
                  "& .MuiInputBase-input": { color: "#e0e7ff" },
                  "& .MuiInputLabel-root": { color: "#b0c4de" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#b0c4de" },
                    "&:hover fieldset": { borderColor: "#f0f8ff" },
                    "&.Mui-focused fieldset": { borderColor: "#f0f8ff" },
                  },
                }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                variant="outlined"
                sx={{
                  "& .MuiInputBase-input": { color: "#e0e7ff" },
                  "& .MuiInputLabel-root": { color: "#b0c4de" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#b0c4de" },
                    "&:hover fieldset": { borderColor: "#f0f8ff" },
                    "&.Mui-focused fieldset": { borderColor: "#f0f8ff" },
                  },
                }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                variant="outlined"
                fullWidth
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "600",
                  color: "#b0c4de",
                  borderColor: "#b0c4de",
                  borderRadius: 1,
                  padding: '14px',
                  fontSize: '18px',
                  "&:hover": {
                    color: "#1e2738",
                    backgroundColor: "#b0c4de",
                    borderColor: "#b0c4de",
                  },
                }}
              >
                Login
              </Button>
            </motion.div>
          </Box>
          
          <motion.div variants={itemVariants}>
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Button
                variant="text"
                onClick={() => window.location.href = "/Signup"}
                sx={{
                  color: "#b0c4de",
                  textDecoration: "underline",
                  fontSize: '15px',
                  "&:hover": {
                    color: "#f0f8ff",
                  },
                }}
              >
                Don't have an account? Register here
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
