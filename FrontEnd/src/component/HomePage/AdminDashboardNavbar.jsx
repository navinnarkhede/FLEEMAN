import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material"; // Keep CircularProgress as it's a simple, non-structural component
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from '@mui/icons-material/Logout';
import Handover from "./Handover";
import Return from "./Return";

// Custom components to replace Material-UI
const CustomAppBar = ({ children }) => (
  <header style={{
    backgroundColor: "#1e2738",
    padding: "0 16px",
    display: "flex",
    alignItems: "center",
    height: "64px"
  }}>
    {children}
  </header>
);

const CustomToolbar = ({ children }) => (
  <nav style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  }}>
    {children}
  </nav>
);

const CustomButton = ({ children, onClick, disabled }) => {
  const baseStyle = {
    color: "#b0c4de",
    textTransform: "uppercase",
    fontWeight: "600",
    border: "1px solid transparent",
    backgroundColor: "transparent",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease"
  };

  const hoverStyle = {
    backgroundColor: "#b0c4de",
    color: "#1e2738"
  };

  const disabledStyle = {
    opacity: 0.5,
    cursor: "not-allowed"
  };

  const [isHovered, setIsHovered] = useState(false);

  const finalStyle = {
    ...baseStyle,
    ...(isHovered && hoverStyle),
    ...(disabled && disabledStyle)
  };

  return (
    <button
      style={finalStyle}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

export const AdminDashboardNavbar = () => {
  const [username, setUsername] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("username");
    const loggedInStatus = sessionStorage.getItem("isLoggedIn") === "true";
    if (storedUsername && loggedInStatus) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
    }
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
    setUsername(null);
    setIsLoggedIn(false);
  };

  const handleReturn = () => {
    setLoading(true);
    // Simulate a network delay
    setTimeout(() => {
      // In a real application, you would handle the car return logic here
      console.log("Car has been returned!");
      setLoading(false);
      navigate("/return"); // Navigate to the return page
    }, 2000); // 2-second delay
  };
  
  const handleHandover = () => {
    navigate("/handover"); // Navigate to the handover page
  };


  const navButtonSx = {
    color: "#b0c4de",
    textTransform: "uppercase",
    fontWeight: "600",
    "&:hover": {
      color: "#1e2738",
      backgroundColor: "#b0c4de",
    },
  };

  const logoutButtonSx = {
    textTransform: "uppercase",
    fontWeight: "600",
    color: "#e0e7ff",
    borderColor: "#e0e7ff",
    "&:hover": {
      backgroundColor: "#e0e7ff",
      color: "#1e2738",
      borderColor: "#e0e7ff",
    },
  };

  return (
    <CustomAppBar>
      <CustomToolbar>
        
        {/* Left Section - Logo / Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <DashboardIcon style={{ color: "#ffcc00", fontSize: "28px" }} />
          <h6 style={{ fontWeight: "bold", color: "#fff", letterSpacing: "1px", margin: 0 }}>
            Admin Panel
          </h6>
        </div>

        {/* Center Section - Navigation Links */}
        <div style={{ display: "flex", gap: "16px" }}>
          <CustomButton onClick={() => navigate("/AdminDashboard")}>
            Dashboard
          </CustomButton>
          <CustomButton onClick={() => navigate("/AdminCustomers")}>
            <PeopleIcon style={{ fontSize: "18px", marginRight: "4px" }} /> All Customers
          </CustomButton>
          <CustomButton onClick={() => navigate("/booking")}>
            Booking
          </CustomButton>
          <CustomButton onClick={() => navigate("/modify-booking")}>
            Modify Booking
          </CustomButton>
          <CustomButton onClick={handleHandover}>
            Hand-over
          </CustomButton>
          <CustomButton onClick={handleReturn} disabled={loading}>
            {loading ? <CircularProgress size={24} style={{color: "#b0c4de"}} /> : 'Return'}
          </CustomButton>
        </div>

        {/* Right Section - User Info & Logout */}
        {isLoggedIn && (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{
              backgroundColor: "#ffcc00",
              color: "#000",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: "bold"
            }}>
              {username?.charAt(0).toUpperCase()}
            </div>
            <p style={{ color: "#fff", fontWeight: "500", margin: 0 }}>
              {username}
            </p>
            <CustomButton onClick={handleLogout} style={{ ...logoutButtonSx, border: "1px solid #e0e7ff" }}>
              <LogoutIcon style={{ marginRight: "4px" }} /> Logout
            </CustomButton>
          </div>
        )}
      </CustomToolbar>
    </CustomAppBar>
  );
};

export default AdminDashboardNavbar;
