import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Custom alert function to replace Swal
const showCustomAlert = (title) => {
  window.alert(title);
};

const ReturnPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCars, setShowCars] = useState(false);
  const [cars, setCars] = useState([]);
  const [loadingBookingId, setLoadingBookingId] = useState({}); // Unique loading state for each booking

  const navigate = useNavigate();

  // Hardcoded data for bookings
  const hardcodedBookings = [
    {
      bookingId: 1,
      firstName: 'Rannu',
      bookingDate: '2024-01-01',
      returnDate: '2024-01-10',
      p_hubId: 1,
      carType: { carTypeId: 1 },
      customer: {
        customerId: 1,
        firstName: 'Rannu',
        lastName: 'PAtel',
        email: 'rannupatel@example.com',
        mobileNumber: '1234567890',
        passportNumber: 'A1234567',
      },
      dailyRate: 50,
      startDate: '2024-01-01',
      endDate: '2024-01-10',
    },
    {
      bookingId: 2,
      firstName: 'Aniket',
      bookingDate: '2024-02-01',
      returnDate: '2024-02-10',
      p_hubId: 2,
      carType: { carTypeId: 2 },
      customer: {
        customerId: 2,
        firstName: 'Aniket',
        lastName: 'Singh',
        email: 'aniket@example.com',
        mobileNumber: '0987654321',
        passportNumber: 'B7654321',
      },
      dailyRate: 60,
      startDate: '2024-02-01',
      endDate: '2024-02-10',
    },
    {
      bookingId: 3,
      firstName: 'ram',
      bookingDate: '2024-03-01',
      returnDate: '2024-03-10',
      p_hubId: 3,
      carType: { carTypeId: 3 },
      customer: {
        customerId: 3,
        firstName: 'ram',
        lastName: 'agrawal',
        email: 'ram@example.com',
        mobileNumber: '1122334455',
        passportNumber: 'C1122334',
      },
    },
    {
      bookingId: 4,
      firstName: 'Harshal',
      bookingDate: '2025-08-16',
      returnDate: '2025-08-26',
      p_hubId: 4,
      carType: { carTypeId: 4 },
      customer: {
        customerId: 4,
        firstName: 'Harshal',
        lastName: 'Kolhe',
        email: 'adwyaitpawar47@gmail.com',
        mobileNumber: '9988776655',
        passportNumber: 'D9988776',
      },
    },
  ];

  useEffect(() => {
    setBookings(hardcodedBookings);
  }, []);

  const handleReturnButtonClick = async (booking) => {
    if (booking.p_hubId && booking.carType && booking.carType.carTypeId) {
      setLoadingBookingId(prevState => ({ ...prevState, [booking.bookingId]: true }));
      
      setTimeout(() => {
        setBookings(prevBookings => prevBookings.filter(b => b.bookingId !== booking.bookingId));
        setLoadingBookingId(prevState => ({ ...prevState, [booking.bookingId]: false }));
        
        showCustomAlert('Return Successful!');
      }, 2000); // 2-second delay
    } else {
      console.error('Invalid booking data:', booking);
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  const navigateToHandover = () => {
    navigate('/handover');
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
          position: 'relative'
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

        <h3 style={{ fontWeight: 'bold', color: '#b0c4de' }}>Bookings</h3>
        
        {loading && <p>Loading...</p>}

        {bookings.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <table className="table" style={{ color: '#e0e7ff', border: '1px solid #b0c4de' }}>
              <thead style={{ backgroundColor: '#2d3a4b' }}>
                <tr>
                  <th style={{ color: '#fff' }}>Booking Id</th>
                  <th style={{ color: '#fff' }}>First Name</th>
                  <th style={{ color: '#fff' }}>Booking Date</th>
                  <th style={{ color: '#fff' }}>Return Date</th>
                  <th style={{ color: '#fff' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.bookingId} style={{ borderBottom: '1px solid #b0c4de' }}>
                    <td>{booking.bookingId}</td>
                    <td>{booking.firstName}</td>
                    <td>{booking.bookingDate}</td>
                    <td>{booking.returnDate}</td>
                    <td>
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
                          onMouseEnter={(e) => e.target.style.backgroundColor = '#4caf50'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                          onClick={() => handleReturnButtonClick(booking)}
                        >
                          Return
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReturnPage;
