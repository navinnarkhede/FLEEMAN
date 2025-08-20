import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Grid,
  Checkbox,
  FormControlLabel,
  Snackbar,
  Alert,
  Paper,
  CssBaseline,
  Button,
} from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";

const useNavigate = () => (path) => console.log(`Navigating to ${path}`);

// Define a custom dark theme for this component
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
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

// Styled Paper component for the form container
const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.9)", // Semi-transparent black
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
  borderRadius: "15px",
  padding: theme.spacing(4, 6),
  border: "2px solid #555",
  width: '100%',
  maxWidth: '500px',
  boxSizing: 'border-box',
}));

// Styled Button for a consistent look
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

const inputSx = {
  "& .MuiInputBase-input": { color: "#e0e7ff" },
  "& .MuiInputLabel-root": { color: "#b0c4de" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#b0c4de" },
    "&:hover fieldset": { borderColor: "#f0f8ff" },
    "&.Mui-focused fieldset": { borderColor: "#f0f8ff" },
  },
  "& .MuiSvgIcon-root": { color: "#b0c4de" },
};

const StyledFooter = styled('footer')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2),
  marginTop: 'auto',
  backgroundColor: 'transparent',
  textAlign: 'center',
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

const ModifyCancelBooking = () => {
  const navigate = useNavigate();
  const [bookingId, setBookingId] = useState("");
  const [isModify, setIsModify] = useState(false);
  const [isCancel, setIsCancel] = useState(false);
  const [newDate, setNewDate] = useState("");
  const [newHub, setNewHub] = useState("");
  const [cancelReason, setCancelReason] = useState("");
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "info" });

  const handleModifyChange = (event) => {
    setIsModify(event.target.checked);
    if (event.target.checked) setIsCancel(false);
  };

  const handleCancelChange = (event) => {
    setIsCancel(event.target.checked);
    if (event.target.checked) setIsModify(false);
  };

  const handleSubmit = () => {
    if (!bookingId.trim()) {
      setSnackbar({ open: true, message: "Please enter a valid Booking ID.", severity: "error" });
      return;
    }
    if (!isModify && !isCancel) {
      setSnackbar({ open: true, message: "Please select an action: Modify or Cancel.", severity: "warning" });
      return;
    }
    if (isModify && (!newDate || !newHub)) {
      setSnackbar({ open: true, message: "Please provide the new booking date and hub.", severity: "error" });
      return;
    }
    if (isCancel && !cancelReason.trim()) {
      setSnackbar({ open: true, message: "Please provide a reason for cancellation.", severity: "error" });
      return;
    }

    if (isModify) {
      console.log("Modifying Booking:", { bookingId, newDate, newHub });
      setSnackbar({ open: true, message: `Booking ${bookingId} has been updated.`, severity: "success" });
      setTimeout(() => navigate("/"), 2000);
    } else if (isCancel) {
      console.log("Canceling Booking:", { bookingId, cancelReason });
      setSnackbar({ open: true, message: `Booking ${bookingId} has been cancelled.`, severity: "success" });
      setTimeout(() => navigate("/"), 2000);
    }
  };

  const handleReset = () => {
    setBookingId("");
    setIsModify(false);
    setIsCancel(false);
    setNewDate("");
    setNewHub("");
    setCancelReason("");
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          p: 2,
          backgroundColor: '#000',
        }}
      >
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
            filter: 'blur(8px) brightness(0.6)',
            zIndex: -1,
          }}
        />
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <StyledPaper component={motion.div} variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants}>
              <Typography variant="h4" fontWeight="bold" gutterBottom color="text.primary" align="center">
                Modify or Cancel Booking
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <TextField
                label="Booking ID"
                value={bookingId}
                onChange={(e) => setBookingId(e.target.value)}
                fullWidth
                required
                sx={{ mt: 2, ...inputSx }}
                variant="outlined"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box sx={{ mt: 2, mb: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
                <FormControlLabel
                  control={<Checkbox checked={isModify} onChange={handleModifyChange} sx={{ color: '#b0c4de', '&.Mui-checked': { color: '#f0f8ff' }}} />}
                  label={<Typography color="text.primary">Modify Booking</Typography>}
                />
                <FormControlLabel
                  control={<Checkbox checked={isCancel} onChange={handleCancelChange} sx={{ color: '#b0c4de', '&.Mui-checked': { color: '#f0f8ff' }}} />}
                  label={<Typography color="text.primary">Cancel Booking</Typography>}
                />
              </Box>
            </motion.div>

            {isModify && (
              <Box component={motion.div} variants={itemVariants} sx={{ mt: 2 }}>
                <TextField
                  label="New Booking Date"
                  type="date"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  required
                  sx={{ mb: 2, ...inputSx }}
                  variant="outlined"
                />
                <FormControl fullWidth variant="outlined" sx={inputSx}>
                  <InputLabel>New Hub</InputLabel>
                  <Select value={newHub} onChange={(e) => setNewHub(e.target.value)} required>
                    <MenuItem value="Hub1">Hub1</MenuItem>
                    <MenuItem value="Hub2">Hub2</MenuItem>
                    <MenuItem value="Hub3">Hub3</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            )}

            {isCancel && (
              <Box component={motion.div} variants={itemVariants}>
                <TextField
                  label="Reason for Cancellation"
                  value={cancelReason}
                  onChange={(e) => setCancelReason(e.target.value)}
                  fullWidth
                  multiline
                  rows={4}
                  required
                  sx={{ mt: 2, ...inputSx }}
                  variant="outlined"
                />
              </Box>
            )}

            <Box sx={{ mt: 4, display: "flex", justifyContent: "space-around" }}>
              <motion.div variants={itemVariants}>
                <StyledButton variant="contained" onClick={handleSubmit}>
                  Submit
                </StyledButton>
              </motion.div>
              <motion.div variants={itemVariants}>
                <StyledButton variant="outlined" onClick={handleReset} sx={{ borderColor: 'primary.main', color: 'primary.main' }}>
                  Reset
                </StyledButton>
              </motion.div>
            </Box>
          </StyledPaper>
        </Box>

        <StyledFooter>
          <Typography variant="body2" sx={{color: 'text.secondary'}}>
            © 2024 FleeMan All rights reserved.
          </Typography>
        </StyledFooter>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }} variant="filled">
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
};


export default ModifyCancelBooking;
