import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Addtour from "./components/Addtour";
import Viewtour from "./components/Viewtour";
import Tourdetails from "./components/Tourdetails";
import Edittour from "./components/Edittour";
import MyBookings from "./components/MyBookings";
import Register from "./components/Register";
import Login from "./components/Login";
import Privateroute from "./utils/Privateroute";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center px-6" style={{paddingTop:"72px"}}>
    <div className="text-8xl mb-4">😕</div>
    <h1 className="text-5xl font-bold text-gray-800" style={{fontFamily:"serif"}}>404</h1>
    <p className="text-xl text-gray-500 mt-4">Oops! The page you are looking for does not exist.</p>
    <a href="/home" className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl transition hover:shadow-lg hover:-translate-y-0.5">
      ← Back to Home
    </a>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      {/* Public */}
      <Route path="/"       element={<Register />} />
      <Route path="/login"  element={<Login />} />

      {/* Protected */}
      <Route element={<Privateroute />}>
        <Route path="/home"          element={<Home />} />
        <Route path="/about"         element={<About />} />
        <Route path="/contact"       element={<Contact />} />
        <Route path="/add"           element={<Addtour />} />
        <Route path="/view"          element={<Viewtour />} />
        <Route path="/tour/:id"      element={<Tourdetails />} />
        <Route path="/edit/:id"      element={<Edittour />} />
        <Route path="/bookings"      element={<MyBookings />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
