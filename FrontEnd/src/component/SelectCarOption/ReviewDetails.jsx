import React from "react";
import { Box, TextField, Typography, Grid, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ReviewDetails = () => {
  const location = useLocation();
  const { formData, selectedCar, rentalAddons, totalAmount } = location.state || {};
  const navigate = useNavigate();

  const handleModify = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      navigate("/", { state: { formData, selectedCar, rentalAddons, totalAmount } });
    });
  };

  const handleConfirm = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once confirmed, you cannot modify the details!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Navigate to the ConfirmationBooking page with the necessary state
        navigate("/ConfirmationBooking", { 
          state: { formData, selectedCar, rentalAddons, totalAmount } 
        });
      }
    });
  };

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f2f5",
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: "90vw",
          maxWidth: 700,
          padding: 4,
          boxShadow: 5,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ color: "#1976d2", fontWeight: "bold" }}
        >
          Review Details
        </Typography>
        <form style={{ width: "100%" }}>
          <Grid container spacing={2}>
            {[
              { label: "First Name", name: "firstName" },
              { label: "Last Name", name: "lastName" },
              { label: "Address 1", name: "addressLine1" },
              { label: "Address 2", name: "addressLine2" },
              { label: "Email", name: "email", xs: 12 },
              { label: "City", name: "city" },
              { label: "Pin", name: "pincode" },
              { label: "Phone Number", name: "phoneNumber" },
              { label: "Mobile Number", name: "mobileNumber" },
              { label: "Credit Card Type", name: "creditCardType" },
              { label: "Credit Card Number", name: "creditCardNumber" },
              { label: "Driving License Number", name: "drivingLicenseNumber" },
              { label: "IDP Number", name: "idpNumber" },
              { label: "Issued By DL", name: "issuedByDL" },
              {
                label: "Valid Through DL",
                name: "validThroughDL",
                type: "date",
              },
              { label: "Passport Number", name: "passportNumber", xs: 12 },
              {
                label: "Passport Valid From",
                name: "passportValidFrom",
                type: "date",
              },
              {
                label: "Passport Valid Through",
                name: "passportValidThrough",
                type: "date",
              },
              { label: "Passport Issued By", name: "passportIssuedBy" },
              {
                label: "Passport Issue Date",
                name: "passportIssueDate",
                type: "date",
              },
              { label: "Date of Birth", name: "dateOfBirth", type: "date" },
            ].map((field, index) => (
              <Grid item xs={field.xs || 12} sm={6} key={index}>
                <TextField
                  fullWidth
                  label={field.label}
                  name={field.name}
                  value={formData?.[field.name] || ""}
                  InputProps={{ readOnly: true }}
                  size="small"
                  type={field.type || "text"}
                />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Button variant="contained" color="primary" onClick={handleConfirm}>
              Confirm
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleModify}>
              Modify
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default ReviewDetails;