// Login.js

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Mengambil password yang telah dibuat dari localStorage
    const createdPassword = localStorage.getItem('createdPassword');

    // Menyplit password untuk mendapatkan username dan password
    const [storedUsername, storedPassword] = createdPassword.split('_');

    // Membandingkan dengan input username dan password
    if (username === storedUsername && password === storedPassword) {
      // Redirect ke halaman home setelah login berhasil
      navigate('/home');
    } else {
      // Handle kegagalan autentikasi
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div style={{ margin: '10rem', textAlign: 'center' }}>
      <h2>Login</h2>
      <Form style={{ textAlign: 'left' }}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleLogin}>
          Login
        </Button>
      </Form>
      <br />
      <Link to="/createpassword">Forgot password? Create one here.</Link>
    </div>
  );
}

export default Login;
