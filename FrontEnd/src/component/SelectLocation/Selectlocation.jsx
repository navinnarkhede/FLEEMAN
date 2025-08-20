import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  Card,
  CardContent,
  useTheme,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Selectlocation = () => {
  const theme = useTheme();
  const [selectedLocation, setSelectedLocation] = useState("");
  const [locations, setLocations] = useState([]);
  const navigate = useNavigate("");

  useEffect(() => {
    const storedHubData = sessionStorage.getItem("hubData");
    if (storedHubData) {
      setLocations(JSON.parse(storedHubData));
    }
  }, []);

  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handelNavigate = () => { if(selectedLocation ===''){ alert("Select the Hub")
    return ;
  }
    navigate("/SelectCarOption");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <Container>
      <Box>
        <Box mt={4}>
          <Typography
            variant="h4"
            fontWeight="bold"
            color={theme.palette.primary.main}
            gutterBottom
          >
            Location Selection
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <b>Select a Pick-up / Return location.</b>
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Your location description has {locations.length} matches. Please select one.
          </Typography>

          <FormControl component="fieldset">
            <RadioGroup value={selectedLocation} onChange={handleChange}>
              <Stack spacing={2} sx={{ mt: 3 }}>
                {locations.map((location) => (
                  <Card
                    key={location.hubId}
                    variant="outlined"
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      transition: "all 0.4s ease-in-out",
                      backgroundColor:
                        selectedLocation === location.hubId
                          ? theme.palette.secondary.light
                          : "#fff",
                      boxShadow:
                        selectedLocation === location.hubId
                          ? "0px 6px 15px rgba(0, 0, 0, 0.2)"
                          : "0px 3px 8px rgba(0, 0, 0, 0.1)",
                      "&:hover": {
                        backgroundColor: theme.palette.action.hover,
                        transform: "scale(1.05)",
                        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                      },
                    }}
                  >
                    <CardContent>
                      <FormControlLabel
                        value={location.hubId}
                        control={
                          <Radio sx={{ color: theme.palette.primary.main }} />
                        }
                        label={
                          <Box>
                            <Typography
                              variant="h6"
                              fontWeight="bold"
                              color={theme.palette.primary.dark}
                            >
                              {location.hubName} - {location.hubId}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {location.hubAddress}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <b>City:</b> {location.cityName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <b>State:</b> {location.stateName}
                            </Typography>
                          </Box>
                        }
                      />
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
      <Box
        mt={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Button variant="contained" onClick={handelNavigate}>
          Continue Booking
        </Button>
        <Button variant="contained" onClick={handleCancel}>
          Cancel
        </Button>
      </Box>
    </Container>
  );
};

export default Selectlocation;
