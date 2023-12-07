// CreatePassword.js

import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CreatePassword() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Menggabungkan username dan password
    const createdPassword = `${username}_${password}`;

    // Menyimpan password ke localStorage (atau lakukan sesuatu yang sesuai kebutuhan Anda)
    localStorage.setItem('createdPassword', createdPassword);

    // Pindah ke halaman login setelah membuat password
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Form style={{ textAlign: 'left', width: '300px' }}>
        <h2 style={{ textAlign: 'center' }}>Create Account</h2>

        <Form.Group className="mb-3" controlId="forUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="forPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Create Account
        </Button>
      </Form>
    </div>
  );
}

export default CreatePassword;
