import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdminLogin = () => {
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Hardcoded credentials for testing
    if (adminUsername === "admin" && adminPassword === "admin@123") {
      localStorage.setItem("isAdmin", true);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate("/AdminDashboard");
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ adminUsername, adminPassword }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials or server error");
      }

      const token = await response.text();

      if (token) {
        sessionStorage.setItem("adminJwtToken", token);
        sessionStorage.setItem("adminUsername", adminUsername);
        sessionStorage.setItem("isAdminLoggedIn", "true");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate("/AdminDashboard");
          window.location.reload();
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
        backgroundColor: '#000',
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
          backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&crop=entropy&fit=crop&w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px) brightness(0.6)',
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
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            padding: 4,
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            textAlign: 'center',
            color: '#e0e7ff',
            border: '2px solid #555',
          }}
        >
          <motion.div variants={itemVariants}>
            <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>
              Admin Login
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
                label="Admin Username"
                type="text"
                value={adminUsername}
                onChange={(e) => setAdminUsername(e.target.value)}
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
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
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
        </Box>
      </Container>
    </Box>
  );
};

export default AdminLogin;
