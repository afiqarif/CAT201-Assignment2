import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Hotel from "./Pages/Hotel";
import HotelDetails from "./Components/Hotel/HotelDetails"; // Updated path
import Places from "./Pages/destination.jsx";
import Navbar from "./Components/Navbar.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/hotel/:id" element={<HotelDetails />} /> {/* Dynamic route */}
        <Route path="/destination" element={<Places />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
