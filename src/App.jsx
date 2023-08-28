import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
// import Register from './Components/Register'
import Login from './Components/Login'

import Changeexpense from './Components/Changeexpense'


function App() {
  return (
    <>
      <Navbar />
      {/* <Register /> */}
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/Login" element={<Login />} /> */}
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Changeexpense" element={<Changeexpense />} />
         
        </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
