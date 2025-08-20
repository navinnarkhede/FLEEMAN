import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

const UserOrdersTable = () => {
  const [userOrders, setUserOrders] = useState([]);
  const [loadingOrderId, setLoadingOrderId] = useState(null);

  useEffect(() => {
    const dummyData = [
      {
        userName: "John Doe",
        email: "john@example.com",
        orderId: "ORD123",
        bookingDate: "2025-08-12",
        status: "Pending",
        handoverId: null,
      },
      {
        userName: "Jane Smith",
        email: "jane@example.com",
        orderId: "ORD124",
        bookingDate: "2025-08-13",
        status: "Confirmed",
        handoverId: null,
      },
      {
        userName: "Michael Johnson",
        email: "michael@example.com",
        orderId: "ORD125",
        bookingDate: "2025-08-14",
        status: "Pending",
        handoverId: null,
      },
      {
        userName: "Harshal Kolhe",
        email: "navinnarkhede7780@gmail.com",
        orderId: "ORD127",
        bookingDate: "2025-08-16",
        status: "Pending",
        handoverId: null,
      },
    ];
    setUserOrders(dummyData);
  }, []);

  const generateHandoverId = () => {
    return `HID-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  };

  const updateStatus = (orderId, newStatus) => {
    setLoadingOrderId(orderId); // Start loading
    setTimeout(() => {
      const handoverId =
        newStatus === "Handed Over" ? generateHandoverId() : null;

      setUserOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.orderId === orderId
            ? { ...order, status: newStatus, handoverId }
            : order
        )
      );

      setLoadingOrderId(null); // Stop loading

      if (newStatus === "Handed Over") {
        sendHandoverEmail(orderId, handoverId);
      }
    }, 3000); // Increased from 1500 to 3000ms
  };

  const sendHandoverEmail = async (orderId, handoverId) => {
    const order = userOrders.find((o) => o.orderId === orderId);
    if (!order) return;

    const emailData = {
      firstName: order.userName.split(" ")[0] || "Customer",
      lastName: order.userName.split(" ")[1] || "",
      email: order.email,
      bookingId: orderId,
      handoverId,
      pickupDate: "2025-08-15",
      returnDate: "2025-08-18",
      carType: "Sedan",
      dailyRate: 2000,
      totalAmount: 8000,
      addons: [
        { addOnName: "Child Seat", addOnDailyRate: 200, quantity: 1 },
        { addOnName: "GPS", addOnDailyRate: 150, quantity: 1 },
      ],
    };

    try {
      await axios.post(
        "https://localhost:7223/api/Email/sendInvoice",
        emailData
      );
      alert(
        `Handover email sent for Order ID: ${orderId} with Handover ID: ${handoverId}`
      );
    } catch (error) {
      console.error("Error sending handover email:", error);
      alert(
        `Failed to send email: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  const handleLogout = () => {
    // In a real app, you would clear authentication tokens here.
    window.location.href = "/";
  };

  return (
    <Box sx={{ maxWidth: "1200px", margin: "auto", mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#1976d2",
          }}
        >
          All Users with Orders & Bookings
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>

      <TableContainer
        component={Paper}
        elevation={4}
        sx={{
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <Table>
          <TableHead sx={{ backgroundColor: "#1976d2" }}>
            <TableRow>
              {[
                "User Name",
                "Email",
                "Order ID",
                "Booking Date",
                "Status",
                "Handover ID",
                "Actions",
              ].map((header) => (
                <TableCell
                  key={header}
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {userOrders.length > 0 ? (
              userOrders.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" },
                    "&:hover": { backgroundColor: "#e3f2fd" },
                  }}
                >
                  <TableCell>{item.userName}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.orderId}</TableCell>
                  <TableCell>{item.bookingDate}</TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      color:
                        item.status === "Pending"
                          ? "orange"
                          : item.status === "Confirmed"
                          ? "green"
                          : "blue",
                    }}
                  >
                    {item.status}
                  </TableCell>
                  <TableCell>{item.handoverId || "-"}</TableCell>
                  <TableCell>
                    {loadingOrderId === item.orderId ? (
                      <CircularProgress size={20} color="primary" />
                    ) : (
                      <>
                        {item.status !== "Confirmed" &&
                          item.status !== "Handed Over" && (
                            <Button
                              variant="contained"
                              color="primary"
                              size="small"
                              sx={{ mr: 1 }}
                              onClick={() =>
                                updateStatus(item.orderId, "Confirmed")
                              }
                            >
                              Confirm Booking
                            </Button>
                          )}
                        {item.status === "Confirmed" && (
                          <Button
                            variant="contained"
                            color="success"
                            size="small"
                            onClick={() =>
                              updateStatus(item.orderId, "Handed Over")
                            }
                          >
                            Hand Over
                          </Button>
                        )}
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No data found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserOrdersTable;