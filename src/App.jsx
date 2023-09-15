import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Register from './Components/Register'
import Login from './Components/Login'
import Changeexpense from './Components/Changeexpense'
import ManageExpense from './Components/ManageExpense'
import Profile from './Components/Profile'
import Logout from './Components/Logout'


function App() {
  return (
    <>
      <Navbar />
      {/* <Register /> */}
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Changeexpense" element={<Changeexpense />} />
          <Route path="/ManageExpense" element={<ManageExpense />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Logout" element={<Logout />} />
         
        </Routes>
      </BrowserRouter>

      {/* <div className='mt-24'>
        <h1 className='text-4xl flex justify-center mb-14'>Welcome User</h1>
        <p className='lg:w-3/6 w-3/4 lg:ml-96 ml-20'>Daily Expense Tracker allows you to input and evaluate where you spend your money! Unlike a budget app, this application tracks the category and amount that you spend on items each day. You can view your spending habits daily, weekly, monthly or any date range you like.</p>
      </div> */}
      
      
    </>
  )
}

export default App
