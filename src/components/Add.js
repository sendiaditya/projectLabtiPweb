import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Mahasiswa from './Mahasiswa';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

function Add() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name,
      b = age,
      c = address,
      d = email;

    Mahasiswa.push({ id: uniqueId, Name: a, Age: b, Address: c, Email: d });

    // Use navigate('/') to redirect to the home page
    navigate('/home');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Form style={{ textAlign: 'left', width: '300px' }}>
        <h2 style={{ textAlign: 'center' }}>Masukkan Data Anda</h2>

        <Form.Group className="mb-3" controlId="forName">
          <Form.Label>Nama</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Nama"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="forAge">
          <Form.Label>Umur</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Umur"
            required
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="forAddress">
          <Form.Label>Alamat</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Alamat"
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="forEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Masukkan Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Add;
