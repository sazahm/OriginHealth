import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from './User/UserLogin';
import AdminLogin from './Admin/AdminLogin';
import Home from './Core/Home';
import Add from './Admin/Add';
import Edit from './User/Edit';
import UserDashboard from './User/UserDashboard';
import Navigation from './components/Navigation';
import AdminDashboard from './Admin/AdminDashboard';

export const Routing = () => {
  return (
    <div>
    <Navigation/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserLogin/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/admin" element={<AdminLogin/>} />
      <Route path="/user" element={<UserLogin/>} />
      <Route path="/userdashboard" element={<UserDashboard/>} />
      <Route path="/admindashboard" element={<AdminDashboard/>} />
      <Route path="/createtag" element={<Add/>} />
      <Route path="/edit" element={<Edit/>} />
    </Routes>
    </BrowserRouter>
  </div>
  )
}
