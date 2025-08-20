import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import axios from "axios";

// Styled components for a modern, consistent look
const StyledPaper = styled(Paper)({
  backgroundColor: "rgba(0, 0, 0, 0.85)",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
  borderRadius: "15px",
  border: "2px solid #444",
  color: "#e0e7ff",
  overflow: 'hidden',
});

const StyledTableCell = styled(TableCell)({
  color: '#e0e7ff',
  borderColor: '#444',
  fontWeight: 'bold',
});

const StyledTableRow = styled(TableRow)({
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
    }
});

const SelectCarOption = () => {
  const [carTypes, setCarTypes] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCarTypes = async () => {
      try {
        setLoading(true);
        // Corrected the URL to be all lowercase to match the backend controller route
        const response = await axios.get(`https://localhost:7223/api/cartypes`); 
        setCarTypes(response.data);
      } catch (err) {
        console.error("Error fetching car types:", err);
        setError("Could not fetch car options.");
      } finally {
        setLoading(false);
      }
    };
    fetchCarTypes();
  }, []);

  const handleSelect = (carType) => {
    setSelectedCar(carType);
  };

  const handleContinueBooking = () => {
    if (selectedCar) {
      // Create a new object with property names that the ConfirmationBooking page expects.
      const carToSave = {
          ...selectedCar,
          daily: selectedCar.dailyRate, // Use camelCase
          type: selectedCar.carTypeName,  // Use camelCase
      };
      sessionStorage.setItem("selectedCar", JSON.stringify(carToSave));
      
      navigate("/rentaladdons"); 
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', color: '#fff', backgroundColor: '#121212' }}>
        <CircularProgress color="inherit" />
        <Typography variant="h5" sx={{ ml: 2 }}>Loading Cars...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 10 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#121212', py: 12 }}>
      <Container>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <Typography variant="h4" fontWeight="bold" mb={4} color="#f0f8ff" textAlign="center">
            Select Your Vehicle
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <TableContainer component={StyledPaper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Car Type</StyledTableCell>
                <StyledTableCell>Daily Rate</StyledTableCell>
                <StyledTableCell>Image</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {carTypes.map((carType) => (
                <StyledTableRow key={carType.carTypeId}>
                  {/* Use camelCase for all properties from the DTO */}
                  <StyledTableCell>{carType.carTypeName}</StyledTableCell>
                  <StyledTableCell>Rs.{carType.dailyRate}</StyledTableCell>
                  <StyledTableCell>
                    <img src={carType.imagePath} alt={carType.carTypeName} style={{ width: '120px', borderRadius: '8px' }} />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleSelect(carType)}
                    >
                      Select
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </motion.div>

        {selectedCar && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Box mt={4} p={3} textAlign="center" component={Paper} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', borderRadius: '15px', border: "1px solid #444" }}>
            <Typography variant="h6" color="#f0f8ff">
              {/* Use camelCase */}
              Selected Car: <strong>{selectedCar.carTypeName}</strong>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2 }}
              onClick={handleContinueBooking}
            >
              Continue Booking
            </Button>
          </Box>
          </motion.div>
        )}
      </Container>
    </Box>
  );
};

export default SelectCarOption;