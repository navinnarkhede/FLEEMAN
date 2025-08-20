import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// Swal is not a standard browser-supported library, so we will use a custom function
// import Swal from 'sweetalert2'; 
import { CircularProgress } from '@mui/material'; // Import CircularProgress
import { useNavigate } from 'react-router-dom';

// Custom alert function to replace Swal
const showCustomAlert = (title, icon) => {
  window.alert(title);
};

const StaffHandOver = () => {
  const [emailId, setEmailId] = useState('');
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCars, setShowCars] = useState(false);
  const [cars, setCars] = useState([]);
  const [loadingBookingId, setLoadingBookingId] = useState({}); // Correct loading state for bookings
  const [loadingCarId, setLoadingCarId] = useState({}); // Unique loading state for each car
  const [selectedBooking, setSelectedBooking] = useState(null);

  const navigate = useNavigate();

  // Hardcoded data for bookings
  const hardcodedBookings = [
    {
      bookingId: 1,
      firstName: 'Aniket',
      bookingDate: '2024-01-01',
      p_hubId: 1,
      carType: { carTypeId: 1 },
      customer: {
        customerId: 1,
        firstName: 'Aniket',
        lastName: 'PAtel',
        email: 'aniketpatel1018@example.com',
        mobileNumber: '1234567890',
        passportNumber: 'A1234567',
      },
      dailyRate: 50,
      startDate: '2024-01-01',
      endDate: '2024-01-10',
    },
    {
      bookingId: 2,
      firstName: 'Mihir',
      bookingDate: '2024-02-01',
      p_hubId: 2,
      carType: { carTypeId: 2 },
      customer: {
        customerId: 2,
        firstName: 'Mihir',
        lastName: 'Singh',
        email: 'Mihir@example.com',
        mobileNumber: '0987654321',
        passportNumber: 'B7654321',
      },
      dailyRate: 60,
      startDate: '2024-02-01',
      endDate: '2024-02-10',
    },
    {
      bookingId: 4,
      firstName: 'harshal',
      bookingDate: '2025-08-16',
      p_hubId: 3,
      carType: { carTypeId: 3 },
      customer: {
        customerId: 3,
        firstName: 'Harshal',
        lastName: 'Kolhe',
        email: 'adwyaitpawar47@example.com',
        mobileNumber: '1122334455',
        passportNumber: 'C1122334',
      },
    },
  ];
  
  // Added more cars to the hardcodedCars array
  const hardcodedCars = [
      { carId: 101, carName: 'Toyota Camry', numberPlate: 'MH-12-AB-1234' },
      { carId: 102, carName: 'Honda Civic', numberPlate: 'MH-12-CD-5678' },
      { carId: 103, carName: 'Ford Mustang', numberPlate: 'MH-12-EF-9012' },
      { carId: 104, carName: 'Mercedes C-Class', numberPlate: 'MH-12-GH-3456' },
      { carId: 105, carName: 'BMW 3 Series', numberPlate: 'MH-12-IJ-7890' },
  ];

  useEffect(() => {
    setBookings(hardcodedBookings);
  }, []);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:8080/api/booking/email/${emailId}`);

      if (response.ok) {
        const data = await response.json();
        console.log('API Response - Bookings:', data);
        setBookings(data);
      } else {
        console.error('Failed to fetch bookings:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBookingDetails = async (bookingId) => {
    try {
      const response = await fetch(`http://localhost:8080/bookingdetails/booking_id/${bookingId}`);

      if (response.ok) {
        const data = await response.json();
        console.log('API Response - BookingDetails:', data);
        sessionStorage.setItem('bookingDetailsofadon', JSON.stringify(data));

        console.log(sessionStorage.getItem('bookingDetails'));
      } else {
        console.error('Failed to fetch BookingDetails:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching BookingDetails:', error);
    }
  };

  const deleteBooking = async () => {
    try {
      const bookingDetails = JSON.parse(sessionStorage.getItem('bookingDetails'));
      if (bookingDetails && bookingDetails.bookingId) {
        // Fetch BookingDetails using bookingId from session storage

        const response = await fetch(`http://localhost:8080/api/deletebooking/${bookingDetails.bookingId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          console.log('Booking deleted successfully.');
        } else {
          console.error('Failed to delete booking:', response.statusText);
        }
      }
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  const fetchCars = async (hub, cartype) => {
    setLoading(true);
    // Increased the loading time to 2.5 seconds
    setTimeout(() => {
        setCars(hardcodedCars);
        setShowCars(true);
        setLoading(false);
    }, 2500);
  };

  const storeBookingInSessionStorage = (booking) => {
    sessionStorage.setItem('bookingDetails', JSON.stringify(booking));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Increased the loading time to 1.5 seconds
    setTimeout(() => {
        const filteredBookings = hardcodedBookings.filter(b => b.customer.email === emailId);
        setBookings(filteredBookings);
        setLoading(false);
    }, 1500);
  };

  const handleHandoverClick = (booking) => {
      setSelectedBooking(booking);
      fetchCars(booking.p_hubId, booking.carType.carTypeId);
  };

  const handleAssignButtonClick = (carId) => {
      setLoadingCarId(prevState => ({ ...prevState, [carId]: true }));
      setTimeout(() => {
          setBookings(prevBookings => prevBookings.filter(b => b.bookingId !== selectedBooking.bookingId));
          setCars([]);
          setShowCars(false);
          setLoadingCarId(prevState => ({ ...prevState, [carId]: false }));
          showCustomAlert(`Car ${carId} assigned to booking ${selectedBooking.bookingId} successfully!`);
      }, 2000);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login');
  };
  
  const handleReturnNavigation = () => {
    navigate('/return');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#121212',
        color: '#e0e7ff',
        padding: '20px',
      }}
    >
      <div
        className="container mt-0 text-center"
        style={{
          width: '50%',
          margin: '50px auto',
          background: 'rgba(0, 0, 0, 0.8)',
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          color: '#e0e7ff',
          padding: '20px',
        }}
      >
        <button
          onClick={handleLogout}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            backgroundColor: 'transparent',
            color: '#e0e7ff',
            border: '2px solid #e0e7ff',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, color 0.3s ease',
          }}
          onMouseEnter={(e) => { e.target.style.backgroundColor = '#e0e7ff'; e.target.style.color = '#1e2738'; }}
          onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#e0e7ff'; }}
        >
          Logout
        </button>
        <h2 style={{ fontWeight: 'bold', color: '#b0c4de' }}>Handover Booking</h2>
        
        <form onSubmit={handleSubmit} className="mt-3">
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter customer email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              required
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#e0e7ff',
                border: '1px solid #b0c4de',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: 'transparent',
              color: '#b0c4de',
              border: '2px solid #b0c4de',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
            onMouseEnter={(e) => { e.target.style.backgroundColor = '#b0c4de'; e.target.style.color = '#1e2738'; }}
            onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#b0c4de'; }}
            disabled={loading}
          >
            Submit
          </button>
        </form>
        {loading && <p>Loading...</p>}

        {bookings.length > 0 && !showCars && (
          <div>
            <h3 style={{ marginTop: '20px', fontWeight: 'bold', color: '#b0c4de' }}>Bookings</h3>
            <table style={{ color: '#e0e7ff', border: '1px solid #b0c4de', width: '100%' }}>
              <thead style={{ backgroundColor: '#2d3a4b' }}>
                <tr>
                  <th style={{ color: '#fff', padding: '12px' }}>Booking Id</th>
                  <th style={{ color: '#fff', padding: '12px' }}>First Name</th>
                  <th style={{ color: '#fff', padding: '12px' }}>Booking Date</th>
                  <th style={{ color: '#fff', padding: '12px' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.bookingId} style={{ borderBottom: '1px solid #b0c4de' }}>
                    <td style={{ padding: '12px' }}>{booking.bookingId}</td>
                    <td style={{ padding: '12px' }}>{booking.firstName}</td>
                    <td style={{ padding: '12px' }}>{booking.bookingDate}</td>
                    <td style={{ padding: '12px' }}>
                      {loadingBookingId[booking.bookingId] ? (
                        <CircularProgress size={20} style={{ color: '#4caf50' }} />
                      ) : (
                        <button
                          style={{
                            backgroundColor: 'transparent',
                            color: '#4caf50',
                            border: '2px solid #4caf50',
                            padding: '8px 16px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease, color 0.3s ease',
                          }}
                          onMouseEnter={(e) => { e.target.style.backgroundColor = '#4caf50'; e.target.style.color = '#fff'; }}
                          onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#4caf50'; }}
                          onClick={() => handleHandoverClick(booking)}
                        >
                          Handover
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {showCars && (
          <div>
            <h3 style={{ marginTop: '20px', fontWeight: 'bold', color: '#b0c4de' }}>Available Cars</h3>
            <table style={{ color: '#e0e7ff', border: '1px solid #b0c4de', width: '100%' }}>
              <thead style={{ backgroundColor: '#2d3a4b' }}>
                <tr>
                  <th style={{ color: '#fff', padding: '12px' }}>Car ID</th>
                  <th style={{ color: '#fff', padding: '12px' }}>Car Name</th>
                  <th style={{ color: '#fff', padding: '12px' }}>Car Number</th>
                  <th style={{ color: '#fff', padding: '12px' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car) => (
                  <tr key={car.carId} style={{ borderBottom: '1px solid #b0c4de' }}>
                    <td style={{ padding: '12px' }}>{car.carId}</td>
                    <td style={{ padding: '12px' }}>{car.carName}</td>
                    <td style={{ padding: '12px' }}>{car.numberPlate}</td>
                    <td style={{ padding: '12px' }}>
                      {loadingCarId[car.carId] ? (
                        <CircularProgress size={20} style={{ color: '#b0c4de' }} />
                      ) : (
                        <button
                          style={{
                            backgroundColor: 'transparent',
                            color: '#b0c4de',
                            border: '2px solid #b0c4de',
                            padding: '8px 16px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease, color 0.3s ease',
                          }}
                          onMouseEnter={(e) => { e.target.style.backgroundColor = '#b0c4de'; e.target.style.color = '#1e2738'; }}
                          onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#b0c4de'; }}
                          onClick={() => handleAssignButtonClick(car.carId)}
                        >
                          Assign
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
         <button
          onClick={handleReturnNavigation}
          style={{
            marginTop: '20px',
            backgroundColor: 'transparent',
            color: '#e0e7ff',
            border: '2px solid #e0e7ff',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, color 0.3s ease',
          }}
          onMouseEnter={(e) => { e.target.style.backgroundColor = '#e0e7ff'; e.target.style.color = '#1e2738'; }}
          onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#e0e7ff'; }}
        >
          Go to Return Page
        </button>
      </div>
    </div>
  );
};

export default StaffHandOver;
