import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const StaffBookingForm = () => {
    const navigate = useNavigate();
    
    const [formData] = useState({
        r_firstName: 'Aniket',
        r_lastName: 'Patel',
        r_email: 'aniketpaetel1018@example.com',
        r_city: 'Mumbai',
        r_pincode: '440049',
        r_creditCardType: 'Visa',
        r_creditCardNumber: '**** **** **** 1234',
    });

    sessionStorage.setItem('continuekaro', true);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            sessionStorage.setItem('customerFormData', JSON.stringify(formData));

            Swal.fire({
                title: "Booking Confirmed!",
                text: "Your booking has been successfully confirmed.",
                icon: "success",
                confirmButtonColor: "#007bff",
                confirmButtonText: "OK",
            }).then(() => {
                navigate('/AdminDashboard');  // Redirect to Admin Dashboard
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Row className="w-100">
                <Col md={{ span: 6, offset: 3 }}>
                    <Card className="shadow-lg p-4 rounded border-0" style={styles.card}>
                        <Card.Body>
                            <h2 className="text-center mb-4" style={styles.heading}>Booking Information</h2>
                            <Form onSubmit={handleSubmit}>
                                {[
                                    { label: 'First Name', value: formData.r_firstName },
                                    { label: 'Last Name', value: formData.r_lastName },
                                    { label: 'Email', value: formData.r_email },
                                    { label: 'City', value: formData.r_city },
                                    { label: 'Pincode', value: formData.r_pincode },
                                    { label: 'Credit Card Type', value: formData.r_creditCardType },
                                    { label: 'Credit Card Number', value: formData.r_creditCardNumber },
                                ].map((field, index) => (
                                    <Form.Group key={index} controlId={field.label.replace(/\s+/g, '').toLowerCase()} className="mt-3">
                                        <Form.Label style={styles.label}>{field.label}</Form.Label>
                                        <Form.Control type="text" value={field.value} disabled style={styles.input} />
                                    </Form.Group>
                                ))}
                                <Button variant="primary" type="submit" className="mt-4 w-100" style={styles.button}>
                                    Continue
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

// Custom styles
const styles = {
    card: {
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
        transition: '0.3s',
    },
    heading: {
        color: '#007bff',
        fontWeight: 'bold',
    },
    label: {
        fontSize: '16px',
        fontWeight: '500',
    },
    input: {
        backgroundColor: '#f8f9fa',
        border: '1px solid #ced4da',
        borderRadius: '6px',
        padding: '10px',
        fontSize: '16px',
    },
    button: {
        backgroundColor: '#007bff',
        border: 'none',
        fontSize: '18px',
        fontWeight: 'bold',
        padding: '12px',
        transition: 'all 0.3s ease-in-out',
    },
};

export default StaffBookingForm;
