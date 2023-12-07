import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import Login from './components/Login';
import Navbar from './components/Navbar';
import CreatePassword from './components/CreatePassword';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} /> {}
        <Route path="/create" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createpassword" element={<CreatePassword />} />
      </Routes>
    </Router>
  );
}

export default App;