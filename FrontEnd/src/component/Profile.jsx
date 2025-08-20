import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
  Button,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/system";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
  borderRadius: "15px",
  padding: theme.spacing(4),
  border: "2px solid #555",
  color: "#e0e7ff",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  color: "#b0c4de",
  padding: "14px",
  fontSize: "18px",
  fontWeight: "bold",
  borderRadius: "10px",
  textTransform: "uppercase",
  border: "2px solid #b0c4de",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "#b0c4de",
    color: "#1e2738",
    borderColor: "#b0c4de",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
  },
}));

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

const Profile = () => {
  const navigate = useNavigate();

  // Hard-coded user data
  const userData = {
    username: "Harshal Kolhe",
    email: "harshal@user.com",
    // You can add more fields as needed, e.g.,
    // firstName: "John",
    // lastName: "Doe",
    // dateJoined: "2024-01-15",
  };

  const handleLogout = () => {
    sessionStorage.removeItem("jwtToken");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("isLoggedIn");
    navigate("/login");
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
        backgroundColor: '#000',
        paddingTop: '64px',
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url('https://images.unsplash.com/photo-1549465220-1a9088703417?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px) brightness(0.6)',
          zIndex: -1,
        }}
      />
      <Container
        maxWidth="sm"
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        sx={{ py: 4 }}
      >
        <StyledCard>
          <CardContent>
            <motion.div variants={itemVariants}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <AccountCircleIcon sx={{ fontSize: 60, color: '#90caf9', mr: 2 }} />
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#f0f8ff' }}>
                    {userData.username}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#b0c4de' }}>
                    {userData.email}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Divider sx={{ my: 3, backgroundColor: '#555' }} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
                <StyledButton onClick={handleLogout}>
                  Logout
                </StyledButton>
              </Box>
            </motion.div>
          </CardContent>
        </StyledCard>
      </Container>
    </Box>
  );
};

export default Profile;