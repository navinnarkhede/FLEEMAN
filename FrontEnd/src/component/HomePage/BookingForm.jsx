import React, { useState } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import {
  TextField,
  Autocomplete,
  Container,
  Grid,
  Box,
  FormHelperText,
  Snackbar,
  Alert,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
  Divider,
  Typography,
  Checkbox,
} from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PlaceIcon from "@mui/icons-material/Place";
import EventNoteIcon from "@mui/icons-material/EventNote";

// Custom styled components for the dark theme
const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.9)", // Semi-transparent black
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
  borderRadius: "15px",
  padding: theme.spacing(4, 6),
  border: "2px solid #555", // Grey border
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

const StyledIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: "#b0c4de", // Light color to stand out on the dark background
  marginBottom: theme.spacing(1),
  "& .MuiSvgIcon-root": {
    marginRight: theme.spacing(1),
    color: "#f0f8ff",
  },
}));

export const BookingForm = () => {
  const navigate = useNavigate();
  const [statesData, setStatesData] = React.useState([]);
  const [citiesData, setCitiesData] = React.useState([]);
  const [rentalDate, setRentalDate] = React.useState(dayjs());
  const [rentalTime, setRentalTime] = React.useState(dayjs());
  const [returnDate, setReturnDate] = React.useState(dayjs().add(1, "day"));
  const [returnTime, setReturnTime] = React.useState(dayjs());
  const [pickupState, setPickupState] = React.useState(null);
  const [pickupCity, setPickupCity] = React.useState("");
  const [pickupAirportCode, setPickupAirportCode] = React.useState("");
  const [pickupHubData, setPickupHubData] = React.useState(null);
  const [returnState, setReturnState] = React.useState(null);
  const [returnCity, setReturnCity] = React.useState("");
  const [returnAirportCode, setReturnAirportCode] = React.useState("");
  const [returnHubData, setReturnHubData] = React.useState(null);
  const [sameLocation, setSameLocation] = React.useState(true);
  const [errors, setErrors] = React.useState({});
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [searchOption, setSearchOption] = React.useState("cityState");

  React.useEffect(() => {
    const fetchStatesData = async () => {
      try {
        const response = await fetch("https://localhost:7223/api/State/State");
        const data = await response.json();
        setStatesData(data);
      } catch (error) {
        console.error("Error fetching states data:", error);
      }
    };
    fetchStatesData();
  }, []);

  const fetchCitiesData = async (stateId) => {
    try {
      const response = await fetch(
        `https://localhost:7223/api/City/state/${stateId}`
      );
      const data = await response.json();
      const filteredCities = data.filter(
        (city) => city.state.stateId === stateId
      );
      setCitiesData(filteredCities);
    } catch (error) {
      console.error("Error fetching cities data:", error);
    }
  };

  const fetchHubData = async (endpoint, setHubData) => {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      setHubData(data);
      sessionStorage.setItem("hubData", JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching hub data:", error);
    }
  };

  const handleSubmit = () => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      setOpenSnackbar(true);
      return;
    }

    let formErrors = {};
    if (searchOption === "cityState") {
      if (!pickupState) formErrors.pickupState = "Pick-Up State is required.";
      if (!pickupCity) formErrors.pickupCity = "Pick-Up City is required.";
    } else if (searchOption === "airport" && !pickupAirportCode) {
      formErrors.pickupAirportCode = "Airport Code is required.";
    }

    if (searchOption === "cityState" && (!pickupState || !pickupCity)) {
      formErrors.pickupLocation = "Please select both state and city.";
    } else if (searchOption === "airport" && !pickupAirportCode) {
      formErrors.pickupLocation = "Please enter an airport code.";
    }

    if (!rentalDate || !rentalTime)
      formErrors.rentalDateTime = "Pick-Up Date & Time are required.";

    if (!returnDate || !returnTime)
      formErrors.returnDateTime = "Return Date & Time are required.";

    if (!sameLocation) {
      if (searchOption === "cityState") {
        if (!returnState) formErrors.returnState = "Return State is required.";
        if (!returnCity) formErrors.returnCity = "Return City is required.";
      } else if (searchOption === "airport" && !returnAirportCode) {
        formErrors.returnAirportCode = "Airport Code is required.";
      }

      if (searchOption === "cityState" && (!returnState || !returnCity)) {
        formErrors.returnLocation = "Please select both state and city.";
      } else if (searchOption === "airport" && !returnAirportCode) {
        formErrors.returnLocation = "Please enter an airport code.";
      }
    }

    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      navigate("/selectLocation");
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const inputSx = {
    "& .MuiInputBase-input": { color: "#e0e7ff" },
    "& .MuiInputLabel-root": { color: "#b0c4de" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "#b0c4de" },
      "&:hover fieldset": { borderColor: "#f0f8ff" },
      "&.Mui-focused fieldset": { borderColor: "#f0f8ff" },
    },
    "& .MuiSvgIcon-root": { color: "#b0c4de" }, // Icon color for Select/DatePicker
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
        backgroundColor: '#000', // Changed page background to black
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
      
      <Container sx={{ mt: -8, zIndex: 1, position: "relative" }}>
        <StyledPaper>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 4,
              pb: 2,
              borderBottom: "2px solid #555",
            }}
          >
            <DirectionsCarIcon sx={{ fontSize: 48, mr: 2, color: "#f0f8ff" }} />
            <Typography
              variant="h4"
              align="center"
              sx={{ fontWeight: "bold", color: "#e0e0e0" }}
            >
              Book Your Rental Car
            </Typography>
          </Box>
          <Grid container spacing={5}>
            {/* Pick-Up Section */}
            <Grid item xs={12} md={6}>
              <StyledIcon>
                <PlaceIcon />
                <Typography variant="h6" fontWeight="bold">
                  Pick-Up Location
                </Typography>
              </StyledIcon>
              <RadioGroup
                row
                value={searchOption}
                onChange={(e) => setSearchOption(e.target.value)}
                sx={{ mb: 2, color: "#b0c4de" }}
              >
                <FormControlLabel
                  value="cityState"
                  control={<Radio size="small" sx={{color: '#b0c4de', '&.Mui-checked': { color: '#f0f8ff' }}} />}
                  label="City & State"
                />
                <FormControlLabel
                  value="airport"
                  control={<Radio size="small" sx={{color: '#b0c4de', '&.Mui-checked': { color: '#f0f8ff' }}} />}
                  label="Airport Code"
                />
              </RadioGroup>
              {searchOption === "cityState" && (
                <>
                  <Autocomplete
                    value={pickupState}
                    onChange={(event, newValue) => {
                      setPickupState(newValue);
                      setPickupCity("");
                      if (newValue) {
                        fetchCitiesData(newValue.stateId);
                      }
                    }}
                    options={statesData}
                    getOptionLabel={(option) => option.stateName}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select State"
                        fullWidth
                        error={!!errors.pickupState}
                        helperText={errors.pickupState}
                        sx={inputSx}
                      />
                    )}
                  />
                  <Autocomplete
                    value={pickupCity}
                    onChange={(event, newValue) => {
                      setPickupCity(newValue);
                      if (pickupState && newValue) {
                        fetchHubData(
                          `https://localhost:7223/api/v1/hub?stateName=${pickupState.stateName}&cityName=${newValue}`,
                          setPickupHubData
                        );
                      }
                    }}
                    options={citiesData.map((city) => city.cityName)}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select City"
                        fullWidth
                        error={!!errors.pickupCity}
                        helperText={errors.pickupCity}
                        sx={{ mt: 2, ...inputSx }}
                      />
                    )}
                    sx={{ mt: 2 }}
                    disabled={!pickupState}
                  />
                </>
              )}
              {searchOption === "airport" && (
                <TextField
                  label="Airport Code"
                  fullWidth
                  value={pickupAirportCode}
                  onChange={(e) => {
                    setPickupAirportCode(e.target.value);
                    fetchHubData(
                      `https://localhost:7223/api/Airport/airport?airportCode=${e.target.value}`,
                      setPickupHubData
                    );
                  }}
                  sx={inputSx}
                  error={!!errors.pickupAirportCode}
                  helperText={errors.pickupAirportCode}
                />
              )}
              {errors.pickupLocation && (
                <FormHelperText error>{errors.pickupLocation}</FormHelperText>
              )}
            </Grid>

            {/* Pick-up Date & Time Section */}
            <Grid item xs={12} md={6}>
              <StyledIcon>
                <EventNoteIcon />
                <Typography variant="h6" fontWeight="bold">
                  Pick-Up Date & Time
                </Typography>
              </StyledIcon>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Pick-Up Date"
                  value={rentalDate}
                  onChange={(newValue) => {
                    setRentalDate(newValue);
                    setReturnDate(newValue.add(1, "day"));
                  }}
                  minDate={dayjs()}
                  sx={{ width: "100%", mb: 2, ...inputSx }}
                  slotProps={{
                    textField: {
                      error: !!errors.rentalDateTime,
                      helperText: errors.rentalDateTime,
                    },
                  }}
                />
                <TimePicker
                  label="Pick-Up Time"
                  value={rentalTime}
                  onChange={setRentalTime}
                  minTime={rentalDate.isSame(dayjs(), "day") ? dayjs() : null}
                  sx={{ width: "100%", ...inputSx }}
                  slotProps={{
                    textField: {
                      error: !!errors.rentalDateTime,
                      helperText: errors.rentalDateTime,
                    },
                  }}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ my: 2, backgroundColor: "#555" }} />
            </Grid>

            {/* Return Location Checkbox */}
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold" color="#b0c4de">
                Drop off at a different location
              </Typography>
              <Checkbox
                checked={!sameLocation}
                onChange={() => setSameLocation(!sameLocation)}
                sx={{ color: "#b0c4de", '&.Mui-checked': { color: "#f0f8ff" } }}
              />
            </Grid>

            {/* Return Location and Date & Time sections (conditionally rendered) */}
            {!sameLocation && (
              <>
                {/* Return Location */}
                <Grid item xs={12} md={6}>
                  <StyledIcon>
                    <PlaceIcon />
                    <Typography variant="h6" fontWeight="bold">
                      Return Location
                    </Typography>
                  </StyledIcon>
                  <RadioGroup
                    row
                    value={searchOption}
                    onChange={(e) => setSearchOption(e.target.value)}
                    sx={{ mb: 2, color: "#b0c4de" }}
                  >
                    <FormControlLabel
                      value="cityState"
                      control={<Radio size="small" sx={{color: '#b0c4de', '&.Mui-checked': { color: '#f0f8ff' }}} />}
                      label="City & State"
                    />
                    <FormControlLabel
                      value="airport"
                      control={<Radio size="small" sx={{color: '#b0c4de', '&.Mui-checked': { color: '#f0f8ff' }}} />}
                      label="Airport Code"
                    />
                  </RadioGroup>
                  {searchOption === "cityState" && (
                    <>
                      <Autocomplete
                        value={returnState}
                        onChange={(event, newValue) => {
                          setReturnState(newValue);
                          setReturnCity("");
                          if (newValue) {
                            fetchCitiesData(newValue.stateId);
                          }
                        }}
                        options={statesData}
                        getOptionLabel={(option) => option.stateName}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Select State"
                            fullWidth
                            error={!!errors.returnState}
                            helperText={errors.returnState}
                            sx={inputSx}
                          />
                        )}
                      />
                      <Autocomplete
                        value={returnCity}
                        onChange={(event, newValue) => {
                          setReturnCity(newValue);
                          if (returnState && newValue) {
                            fetchHubData(
                              `http://localhost:8080/api/v1/hub?stateName=${returnState.stateName}&cityName=${newValue}`,
                              setReturnHubData
                            );
                          }
                        }}
                        options={citiesData.map((city) => city.cityName)}
                        getOptionLabel={(option) => option}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Select City"
                            fullWidth
                            error={!!errors.returnCity}
                            helperText={errors.returnCity}
                            sx={{ mt: 2, ...inputSx }}
                          />
                        )}
                        sx={{ mt: 2 }}
                        disabled={!returnState}
                      />
                      {errors.returnLocation && (
                        <FormHelperText error>
                          {errors.returnLocation}
                        </FormHelperText>
                      )}
                    </>
                  )}
                  {searchOption === "airport" && (
                    <TextField
                      label="Airport Code"
                      fullWidth
                      value={returnAirportCode}
                      onChange={(e) => {
                        setReturnAirportCode(e.target.value);
                        fetchHubData(
                          `http://localhost:8080/api/v1/airport?airportCode=${e.target.value}`,
                          setReturnHubData
                        );
                      }}
                      sx={inputSx}
                      error={!!errors.returnAirportCode}
                      helperText={errors.returnAirportCode}
                    />
                  )}
                </Grid>
                {/* Return Date & Time */}
                <Grid item xs={12} md={6}>
                  <StyledIcon>
                    <EventNoteIcon />
                    <Typography variant="h6" fontWeight="bold">
                      Return Date & Time
                    </Typography>
                  </StyledIcon>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Return Date"
                      value={returnDate}
                      onChange={setReturnDate}
                      minDate={rentalDate}
                      sx={{ width: "100%", mb: 2, ...inputSx }}
                      slotProps={{
                        textField: {
                          error: !!errors.returnDateTime,
                          helperText: errors.returnDateTime,
                        },
                      }}
                    />
                    <TimePicker
                      label="Return Time"
                      value={returnTime}
                      onChange={setReturnTime}
                      minTime={
                        rentalDate.isSame(returnDate, "day") ? rentalTime : null
                      }
                      sx={{ width: "100%", ...inputSx }}
                      slotProps={{
                        textField: {
                          error: !!errors.returnDateTime,
                          helperText: errors.returnDateTime,
                        },
                      }}
                    />
                  </LocalizationProvider>
                </Grid>
              </>
            )}

            {/* Search Button */}
            <Grid item xs={12} sx={{ textAlign: "center", mt: 4 }}>
              <StyledButton variant="contained" onClick={handleSubmit}>
                Search Rental Cars
              </StyledButton>
            </Grid>
          </Grid>
        </StyledPaper>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="warning"
            sx={{ width: "100%" }}
          >
            Please log in to search for rental cars.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default BookingForm;
