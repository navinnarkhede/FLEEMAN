import * as React from "react";
import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { styled } from "@mui/material/styles";

// A styled component for the main AppBar to create the floating effect
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent dark background
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5)", // Stronger shadow for a floating feel
  backdropFilter: "blur(10px)", // The modern frosted-glass effect
  zIndex: 1300, // Ensure it's above other content
  transition: "background-color 0.3s, box-shadow 0.3s",
}));

export const Navbar = () => {
  const [username, setUsername] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("username");
    const loggedInStatus = sessionStorage.getItem("isLoggedIn") === "true";
    if (storedUsername && loggedInStatus) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("jwtToken");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("isLoggedIn");
    window.location.href = "/login";
    setUsername(null);
    setIsLoggedIn(false);
    handleCloseMenu();
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setMobileMenuAnchor(null);
  };

  return (
    <StyledAppBar>
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingY: { xs: 1, md: 2 },
          }}
        >
          {/* Brand Name with Logo */}
          <Box
            component="a"
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "#b0c4de",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "#f0f8ff", // Light blue accent on hover
              },
            }}
          >
            <DirectionsCarIcon sx={{ fontSize: 40, mr: 1, color: "#f0f8ff" }} />
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "1.5px",
              }}
            >
              FleeMan
            </Typography>
          </Box>

          {/* Navigation Buttons (Desktop) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
              alignItems: "center",
            }}
          >
            {[
              { label: "Home", to: "/" },
              { label: "Modify/Cancel Booking", to: "/modify-booking" },
              { label: "Membership", to: "/membership" },
              { label: "About", to: "/about" },
              { label: "Customer Care", to: "/customer-care" },
            ].map(({ label, to }) => (
              <Button
                key={label}
                component="a"
                href={to}
                color="inherit"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "600",
                  color: "#b0c4de",
                  fontSize: "0.95rem",
                  position: "relative",
                  "&:hover": {
                    color: "#f0f8ff",
                    backgroundColor: "transparent",
                    "&::after": {
                      width: "100%",
                      left: "0",
                    },
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "0%",
                    height: "2px",
                    backgroundColor: "#f0f8ff",
                    transition: "width 0.3s ease-in-out",
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* Login/Logout Section (Desktop) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            {isLoggedIn ? (
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleMenuOpen}
                  color="inherit"
                  sx={{ p: 0 }}
                >
                  <Avatar sx={{ bgcolor: "#f0f8ff", color: "#1e2738" }}>
                    <AccountCircle />
                  </Avatar>
                </IconButton>
              </Tooltip>
            ) : (
              <>
                <Button
                  component="a"
                  href="/login"
                  variant="outlined"
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: "600",
                    color: "#b0c4de",
                    borderColor: "#b0c4de",
                    borderRadius: 1,
                    "&:hover": {
                      color: "#1e2738",
                      backgroundColor: "#b0c4de",
                      borderColor: "#b0c4de",
                    },
                  }}
                >
                  User Login
                </Button>
                <Button
                  component="a"
                  href="/AdminLogin"
                  variant="outlined"
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: "600",
                    color: "#b0c4de",
                    borderColor: "#b0c4de",
                    borderRadius: 1,
                    "&:hover": {
                      color: "#1e2738",
                      backgroundColor: "#b0c4de",
                      borderColor: "#b0c4de",
                    },
                  }}
                >
                  Staff Login
                </Button>
              </>
            )}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              sx={{ mt: 1.5 }}
              PaperProps={{
                sx: {
                  backgroundColor: "#1e2738",
                  color: "#e0e7ff",
                  borderRadius: 2,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                  "& .MuiMenuItem-root": {
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "#fff",
                    },
                  },
                },
              }}
            >
              <MenuItem
                onClick={handleCloseMenu}
                component="a"
                href="/profile"
              >
                Profile
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <Logout sx={{ mr: 1, color: "#90caf9" }} /> Logout
              </MenuItem>
            </Menu>
          </Box>

          {/* Mobile Menu (Hamburger Icon) */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={handleMobileMenuOpen} color="inherit">
              <MenuIcon sx={{ fontSize: 36, color: "#e0e7ff" }} />
            </IconButton>
            <Menu
              anchorEl={mobileMenuAnchor}
              open={Boolean(mobileMenuAnchor)}
              onClose={handleCloseMenu}
              sx={{ mt: 1 }}
              PaperProps={{
                sx: {
                  backgroundColor: "#1e2738",
                  color: "#e0e7ff",
                  borderRadius: 2,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                  "& .MuiMenuItem-root": {
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "#fff",
                    },
                  },
                },
              }}
            >
              <MenuItem onClick={handleCloseMenu} component="a" href="/">
                Home
              </MenuItem>
              <MenuItem
                onClick={handleCloseMenu}
                component="a"
                href="/modify-booking"
              >
                Modify/Cancel Booking
              </MenuItem>
              <MenuItem onClick={handleCloseMenu} component="a" href="/membership">
                Membership
              </MenuItem>
              <MenuItem onClick={handleCloseMenu} component="a" href="/about">
                About
              </MenuItem>
              <MenuItem onClick={handleCloseMenu} component="a" href="/customer-care">
                Customer Care
              </MenuItem>
              {isLoggedIn ? (
                <MenuItem onClick={handleLogout}>
                  <Logout sx={{ mr: 1, color: "#90caf9" }} /> Logout
                </MenuItem>
              ) : (
                <>
                  <MenuItem onClick={handleCloseMenu} component="a" href="/login">
                    User Login
                  </MenuItem>
                  <MenuItem
                    onClick={handleCloseMenu}
                    component="a"
                    href="/AdminLogin"
                  >
                    Staff Login
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;
