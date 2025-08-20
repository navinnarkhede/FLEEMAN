import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Alert, Spinner } from "react-bootstrap";
import Swal from "sweetalert2";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Client-side validation for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Client-side validation for password
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.*\W).{8,15}$/;
    if (!passwordRegex.test(password)) {
      setError("Password must be 8-15 characters long and include uppercase, lowercase, and special characters.");
      return;
    }

    if (password !== rePassword) {
      setError("Password and re-entered password do not match!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://localhost:7223/api/User/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed!");
      }

      setSuccess("Signup successful! Redirecting to login...");
      Toast.fire({
        icon: "success",
        title: "Signed up successfully"
      });
      setTimeout(() => navigate("/login"), 2000);

      setEmail("");
      setUsername("");
      setPassword("");
      setRePassword("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center min-vh-100"
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&crop=entropy&fit=crop&w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
          WebkitFilter: 'blur(8px)',
          zIndex: -1
        }}
      ></div>
      <Container
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          padding: '30px',
          borderRadius: '15px',
          width: '100%',
          maxWidth: '400px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
        }}
      >
        <h2 className="mb-4 text-center" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', color: '#333' }}>Car Rental Signup</h2>
        {error && <Alert variant="danger" className="w-100 text-center">{error}</Alert>}
        {success && <Alert variant="success" className="w-100 text-center">{success}</Alert>}
        <Form onSubmit={handleSubmit} className="w-100">
          <Form.Group controlId="email" className="mb-3">
            <Form.Label style={{ fontWeight: '600', color: '#333' }}>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ padding: '14px', borderRadius: '10px', border: '1px solid #ccc' }}
            />
          </Form.Group>

          <Form.Group controlId="username" className="mb-3">
            <Form.Label style={{ fontWeight: '600', color: '#333' }}>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ padding: '14px', borderRadius: '10px', border: '1px solid #ccc' }}
            />
          </Form.Group>

          <Form.Group controlId="password" className="mb-3">
            <Form.Label style={{ fontWeight: '600', color: '#333' }}>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ padding: '14px', borderRadius: '10px', border: '1px solid #ccc' }}
            />
          </Form.Group>

          <Form.Group controlId="rePassword" className="mb-3">
            <Form.Label style={{ fontWeight: '600', color: '#333' }}>Re-enter Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-enter password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              required
              style={{ padding: '14px', borderRadius: '10px', border: '1px solid #ccc' }}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100"
            style={{ backgroundColor: '#007bff', padding: '14px', borderRadius: '10px', fontSize: '18px' }}
            disabled={loading}
          >
            {loading ? <Spinner animation="border" size="sm" /> : "Signup"}
          </Button>
        </Form>
        <div className="mt-3 text-center">
          <Button variant="link" onClick={() => navigate("/login")} style={{ color: '#007bff', textDecoration: 'none', fontSize: '15px' }}>
            Already have an account? Login here
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
