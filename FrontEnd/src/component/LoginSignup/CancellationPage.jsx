import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CancellationPage = () => {
  const [bookingDetails, setBookingDetails] = useState(null);
  const [availableCars, setAvailableCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBookingDetails();
  }, []);

  const fetchBookingDetails = async () => {
    try {
      const storedData = sessionStorage.getItem("bookingDetailsofadon");
      if (storedData) {
        const booking = JSON.parse(storedData);
        setBookingDetails(booking);
        await fetchAvailableCars(booking);
      } else {
        Swal.fire("Error", "No booking details found.", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Failed to fetch booking details.", "error");
      console.error("Error fetching booking details:", error);
    }
  };

  const fetchAvailableCars = async (booking) => {
    if (!booking?.p_hubId || !booking?.carType?.carTypeId) return;

    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/car/getavailablecar/${booking.p_hubId}/${booking.carType.carTypeId}`
      );
      setAvailableCars(response.data);
    } catch (error) {
      Swal.fire("Error", "Failed to fetch available cars.", "error");
      console.error("Error fetching available cars:", error);
    }
  };

  const deleteBooking = async () => {
    if (!bookingDetails?.bookingId) return;
    
    try {
      await axios.delete(
        `http://localhost:8080/api/v1/booking/deleteBooking/${bookingDetails.bookingId}`
      );
      Swal.fire("Success", "Booking canceled successfully.", "success");
      navigate("/");
    } catch (error) {
      Swal.fire("Error", "Failed to cancel booking.", "error");
      console.error("Error deleting booking:", error);
    }
  };

  const sendInvoiceDetails = async (selectedCarId) => {
    if (!bookingDetails) return;
    
    const invoiceData = {
      bookingId: bookingDetails.bookingId,
      bookingDate: bookingDetails.bookingDate,
      firstName: bookingDetails.firstName,
      lastName: bookingDetails.lastName,
      cAadharNo: bookingDetails.customer?.aadharNo || "N/A",
      p_hubId: bookingDetails.p_hubId,
      r_hubId: bookingDetails.r_hubId || bookingDetails.p_hubId, // Ensure return hub ID
      totalAddonAmount: 0, // Update this dynamically if needed
      carId: selectedCarId,
    };

    try {
      await axios.post("http://localhost:8080/api/v1/invoice/saveInvoice", invoiceData);
      Swal.fire("Success", "Invoice generated successfully.", "success");
      deleteBooking();
    } catch (error) {
      Swal.fire("Error", "Failed to generate invoice.", "error");
      console.error("Error sending invoice details:", error);
    }
  };

  return (
    <div>
      <h2>Cancel Booking</h2>
      {bookingDetails && (
        <div>
          <p>Booking ID: {bookingDetails.bookingId}</p>
          <p>Name: {bookingDetails.firstName} {bookingDetails.lastName}</p>
          <p>Booking Date: {bookingDetails.bookingDate}</p>
          <button onClick={deleteBooking}>Cancel Booking</button>
        </div>
      )}
      <h3>Select a Car for Replacement</h3>
      <ul>
        {availableCars.map((car) => (
          <li key={car.carId}>
            {car.model} - {car.licensePlate}
            <button onClick={() => sendInvoiceDetails(car.carId)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CancellationPage;
