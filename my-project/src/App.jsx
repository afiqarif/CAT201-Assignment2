import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import Places from "./Pages/destination.jsx"
import Navbar from "./Components/Navbar.jsx"

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/destination" element={<Places/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App