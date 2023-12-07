import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import Mahasiswa from './Mahasiswa';
import { useNavigate } from 'react-router-dom';

function Edit() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [id, setId] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  let navigate = useNavigate();

  var index = Mahasiswa.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = Mahasiswa[index];
    a.Name = name;
    a.Age = age;
    a.Address = address;
    a.Email = email;

    navigate('/home');
  };

  useEffect(() => {
    setName(localStorage.getItem('Name'));
    setAge(localStorage.getItem('Age'));
    setAddress(localStorage.getItem('Address'));
    setEmail(localStorage.getItem('Email'));
    setId(localStorage.getItem('Id'));
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Form style={{ textAlign: 'left', width: '300px' }}>
        <h2 style={{ textAlign: 'center' }}>Update Data Anda</h2>

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

export default Edit;
