import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

// Hardcoded fallback data for development and testing
const fallbackFormData = {
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@example.com",
  pickupDate: "2025-08-15",
  returnDate: "2025-08-18",
  addressLine1: "123 Main St", 
  addressLine2: "", 
  pincode: "123456", 
  city: "Someplace",
  state: "CA" 
};

const fallbackCar = {
  type: "Sedan",
  daily: 2000
};

const fallbackAddons = [
  { addOnName: "Child Seat", addonDailyRate: 200, quantity: 2 },
  { addOnName: "GPS", addonDailyRate: 150, quantity: 1 }
];

const ConfirmationBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Use sessionStorage, state, or the fallback data
  const formData =
    location.state?.formData ||
    JSON.parse(sessionStorage.getItem("formData")) ||
    fallbackFormData;

  const selectedCar =
    JSON.parse(sessionStorage.getItem("selectedCar")) || fallbackCar;

  const rentalAddons =
    JSON.parse(sessionStorage.getItem("addons")) || fallbackAddons;

  const [totalAmount, setTotalAmount] = useState(0);

  // Calculate total including add-ons
  const calculateTotalAmount = () => {
    const pickup = new Date(formData.pickupDate);
    const returndate = new Date(formData.returnDate);

    const timeDifference = returndate.getTime() - pickup.getTime();
    const rentalDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)) + 1;

    if (isNaN(rentalDays) || rentalDays <= 0) return 0;

    const carCost = (selectedCar.daily || 0) * rentalDays;

    const addonCost = rentalAddons.reduce((total, addon) => {
      const addonDailyCost = addon.addonDailyRate || 0;
      return total + (addon.quantity || 0) * addonDailyCost;
    }, 0);

    setTotalAmount(carCost + addonCost * rentalDays);
  };

  useEffect(() => {
    calculateTotalAmount();
  }, [formData, selectedCar, rentalAddons]);

  const handleConfirm = async () => {
    if (!formData.email || !selectedCar.type || !formData.addressLine1 || !formData.pincode || !formData.city) {
      alert("Error: Missing required user or car details.");
      return;
    }

    // Construct the data payload for the email invoice
    const invoiceData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      bookingId: `BK-${Date.now()}`, // Generate a client-side booking ID for the invoice
      pickupDate: formData.pickupDate,
      returnDate: formData.returnDate,
      carType: selectedCar.type,
      dailyRate: selectedCar.daily,
      totalAmount: totalAmount,
      addons: rentalAddons.map((addon) => ({
        addOnName: addon.addOnName,
        addOnDailyRate: addon.addonDailyRate,
        quantity: addon.quantity
      }))
    };

    try {
      await axios.post(
        "https://localhost:7223/api/Email/sendInvoice", // Sending data to the email endpoint
        invoiceData
      );

      // The response no longer contains a bookingId from the database.
      alert(`Booking Confirmed! An invoice has been sent to your email.`);
      sessionStorage.removeItem("formData");
      sessionStorage.removeItem("selectedCar");
      sessionStorage.removeItem("addons");
      navigate("/");
    } catch (error) {
      console.error("Error sending confirmation email:", error);
      alert(`Error! Failed to send your booking confirmation email: ${error.response?.data?.message || error.message}`);
    }
  };

  const handleModify = () => {
    navigate("/rental-form", { state: { formData } });
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#121212",
        padding: 3,
        pt: 8
      }}
    >
      <Card
        component={motion.div}
        initial="initial"
        animate="animate"
        variants={cardVariants}
        sx={{
          width: "100%",
          maxWidth: 600,
          padding: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "#1d1d1d",
          color: "#e0e0e0",
          border: "1px solid #333"
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "#90caf9" }}
        >
          Confirm Your Booking
        </Typography>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Name:</strong> {formData.firstName} {formData.lastName}
              </Typography>
              <Typography variant="body1">
                <strong>Email:</strong> {formData.email}
              </Typography>
              <Typography variant="body1">
                <strong>Address:</strong> {formData.addressLine1}, {formData.addressLine2}, {formData.city}, {formData.pincode}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" sx={{ color: "#90caf9", mt: 2 }}>
                Rental Period
              </Typography>
              <Typography variant="body1">
                <strong>Pickup:</strong> {formData.pickupDate}
              </Typography>
              <Typography variant="body1">
                <strong>Return:</strong> {formData.returnDate}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" sx={{ color: "#90caf9", mt: 2 }}>
                Selected Car
              </Typography>
              <Typography variant="body1">
                <strong>Type:</strong> {selectedCar.type}
              </Typography>
              <Typography variant="body1">
                <strong>Daily Rate:</strong> Rs.{selectedCar.daily}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" sx={{ color: "#90caf9", mt: 2 }}>
                Selected Add-ons
              </Typography>
              {rentalAddons.length > 0 ? (
                <>
                  {rentalAddons.map((addon, index) => (
                    <Typography variant="body1" key={index}>
                      {addon.addOnName} (Qty: {addon.quantity})
                    </Typography>
                  ))}
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Total Add-ons Selected: {rentalAddons.length}
                  </Typography>
                </>
              ) : (
                <Typography variant="body1">No Add-ons Selected</Typography>
              )}
            </Grid>

            <Grid item xs={12} sx={{ borderTop: "1px solid #444", mt: 3, pt: 2 }}>
              <Typography variant="h5" align="center" sx={{ color: "#a5d6a7" }}>
                Total Estimated Amount: Rs.{totalAmount.toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3, gap: 2 }}>
          <Button
            component={motion.div}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            variant="contained"
            color="primary"
            onClick={handleConfirm}
          >
            Confirm & Book
          </Button>
          <Button
            component={motion.div}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            variant="outlined"
            color="secondary"
            onClick={handleModify}
          >
            Modify
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default ConfirmationBooking;
