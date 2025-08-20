import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  CircularProgress,
  Alert,
  Button as MuiButton, // Renaming to avoid conflict
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Custom styled Box for the main container, matching the login style
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.85)",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
  borderRadius: "15px",
  padding: theme.spacing(4),
  border: "2px solid #444",
  color: "#e0e7ff",
  width: '100%',
  maxWidth: '600px',
}));

// Styled Button for a consistent look
const StyledButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: "transparent",
  color: "#b0c4de",
  padding: "12px 24px",
  fontSize: "16px",
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
  "&:disabled": {
    borderColor: '#555',
    color: '#555',
  }
}));

// Animation variants for Framer Motion
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

function RentalAddons() {
  const [addons, setAddons] = useState([]);
  const [selectedAddons, setSelectedAddons] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch data from the backend
  useEffect(() => {
    const fetchAddons = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://localhost:7223/api/AddOn");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setAddons(data);
      } catch (error) {
        console.error("Error fetching addons:", error);
        setError("Could not fetch add-on data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchAddons();
  }, []);

  // Live total calculation
  useEffect(() => {
    const amount = addons.reduce((total, addon) => {
      if (selectedAddons[addon.addOnId]) {
        return total + Number(addon.addonDailyRate);
      }
      return total;
    }, 0);
    setTotalAmount(amount);
  }, [selectedAddons, addons]);

  const handleCheckboxChange = (addOnId) => {
    setSelectedAddons(prev => ({ ...prev, [addOnId]: !prev[addOnId] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const addonsToSave = addons
      .filter(addon => selectedAddons[addon.addOnId])
      .map(addon => ({ ...addon, quantity: 1 }));

    sessionStorage.setItem("addons", JSON.stringify(addonsToSave));
    navigate('/RentalForm');
  };

  const handleCancel = () => {
    sessionStorage.removeItem("addons");
    navigate('/');
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', color: '#fff', backgroundColor: '#121212' }}>
        <CircularProgress color="inherit" />
        <Typography variant="h5" sx={{ ml: 2 }}>Loading Add-ons...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Alert severity="error" sx={{ backgroundColor: '#3f1a1a', color: '#ffcdd2' }}>{error}</Alert>
      </Container>
    );
  }

  return (
    <Box sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#000',
        padding: 2,
    }}>
      {/* Background Image with Blur and Dark Overlay */}
      <Box
        sx={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundImage: "url('https://images.unsplash.com/photo-1549465220-1a9088703417?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: 'cover', backgroundPosition: 'center',
            filter: 'blur(8px) brightness(0.6)', zIndex: -1,
        }}
      />
      <Container maxWidth="sm" component={motion.div} variants={containerVariants} initial="hidden" animate="visible">
        <StyledBox>
          <motion.div variants={itemVariants}>
            <Typography variant="h4" align="center" gutterBottom sx={{ color: "#f0f8ff", mb: 4, fontWeight: 'bold' }}>
              Select Your Add-ons
            </Typography>
          </motion.div>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                {addons.map((addon) => (
                  <Grid item xs={12} key={addon.addOnId}>
                    <motion.div variants={itemVariants}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={!!selectedAddons[addon.addOnId]}
                            onChange={() => handleCheckboxChange(addon.addOnId)}
                            sx={{ color: '#b0c4de', '&.Mui-checked': { color: '#f0f8ff' } }}
                          />
                        }
                        label={
                          <Typography sx={{ color: '#b0c4de' }}>
                            {`${addon.addOnName} - Rs.${addon.addonDailyRate}/day`}
                          </Typography>
                        }
                      />
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

              {totalAmount > 0 && (
                <motion.div variants={itemVariants}>
                  <Typography variant="h5" align="center" sx={{ color: "#90caf9", mt: 4, fontWeight: '500' }}>
                    Total Add-on Cost: Rs.{totalAmount}
                  </Typography>
                </motion.div>
              )}

              <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4, gap: 2 }}>
                <motion.div variants={itemVariants} style={{ flex: 1 }}>
                  <StyledButton fullWidth type="submit">
                    Continue
                  </StyledButton>
                </motion.div>
                <motion.div variants={itemVariants} style={{ flex: 1 }}>
                  <StyledButton fullWidth onClick={handleCancel}>
                    Cancel
                  </StyledButton>
                </motion.div>
              </Box>
            </form>
          </CardContent>
        </StyledBox>
      </Container>
    </Box>
  );
}

export default RentalAddons;