import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Hotel from "./Pages/Hotel";
import HotelDetails from "./Components/Hotel/HotelDetails"; // Updated path
import Places from "./Pages/Destination.jsx";
import Navbar from "./Components/Navbar.jsx";
import Foods from './Pages/FoodPages.jsx';
import Food_details from './Components/FoodBeverage/Food_details.jsx';
import History from './Pages/History.jsx';
import DestinationDetail from './Components/Destination/DestinationDetails.jsx';
import Footer from './Components/Footer.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/hotel/:id" element={<HotelDetails />} /> {/* Dynamic route */}
        <Route path="/destination" element={<Places />} />
        <Route path="/food" element={<Foods />} />
        <Route path="/food/:id" element={<Food_details />} />
        <Route path="/history" element={<History />} />
        <Route path="/destination/:id" element={<DestinationDetail />} /> {/* Dynamic route */}

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
