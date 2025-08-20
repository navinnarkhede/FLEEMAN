import React from "react";
import { Container, Box } from "@mui/material";
import { AdminDashboardNavbar } from "./AdminDashboardNavbar";
import UserOrdersTable from "./UserOrdersTable";

const AdminDashboard = () => {
  return (
    // Set the entire page's background to a dark color for a cohesive theme
    <Box sx={{ minHeight: "100vh", backgroundColor: "#121212" }}>
      <AdminDashboardNavbar />
      <Container sx={{ mt: 4 }}>
        <UserOrdersTable /> {/* Table with booking + handover buttons */}
      </Container>
    </Box>
  );
};

export default AdminDashboard;
