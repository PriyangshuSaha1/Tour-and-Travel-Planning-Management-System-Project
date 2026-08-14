import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getUser } from "../utils/auth";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");
  const user = getUser();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  useEffect(() => setMenuOpen(false), [location.pathname]);

  const logout = () => { localStorage.removeItem("token"); navigate("/login"); };

  const NavLink = ({ to, children }) => (
    <Link to={to}
      className={`relative font-medium text-sm transition-colors duration-200 hover:text-blue-300
        after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300
        ${location.pathname===to ? "text-blue-300 after:w-full" : "after:w-0 hover:after:w-full"}`}>
      {children}
    </Link>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled?"bg-gray-900/95 backdrop-blur-md shadow-xl":"bg-gray-900"}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to={token?"/home":"/"} className="flex items-center gap-2.5">
          <span className="text-2xl">✈️</span>
          <div className="leading-tight">
            <div className="text-white font-bold text-lg tracking-tight">TravelNest</div>
            <div className="text-blue-400 text-xs font-medium tracking-widest uppercase">Tour & Travel</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7 text-gray-300">
          {token ? (
            <>
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/add">Add Tour</NavLink>
              <NavLink to="/view">Browse Tours</NavLink>
              <NavLink to="/bookings">My Bookings</NavLink>
              {/* User pill */}
              <div className="flex items-center gap-3 ml-2 pl-4 border-l border-gray-700">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  {user?.name?.[0]?.toUpperCase() || "U"}
                </div>
                <span className="text-white text-sm font-medium max-w-[100px] truncate">{user?.name || "User"}</span>
                <button onClick={logout}
                  className="bg-red-500 hover:bg-red-600 text-white text-xs font-semibold px-4 py-1.5 rounded-lg transition hover:shadow-md">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <NavLink to="/">Register</NavLink>
              <NavLink to="/login">Login</NavLink>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen?"max-h-[500px] opacity-100":"max-h-0 opacity-0"}`}>
        <div className="flex flex-col gap-4 px-6 py-5 bg-gray-800 border-t border-gray-700 text-gray-300 text-sm">
          {token ? (
            <>
              {user && <div className="flex items-center gap-2 pb-3 border-b border-gray-700">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">{user.name?.[0]?.toUpperCase()}</div>
                <div><div className="text-white font-semibold">{user.name}</div><div className="text-gray-400 text-xs">{user.email}</div></div>
              </div>}
              <Link to="/home">🏠 Home</Link>
              <Link to="/about">ℹ️ About</Link>
              <Link to="/contact">📞 Contact</Link>
              <Link to="/add">➕ Add Tour</Link>
              <Link to="/view">🌍 Browse Tours</Link>
              <Link to="/bookings">🎫 My Bookings</Link>
              <button onClick={logout} className="text-left text-red-400 font-medium">🚪 Logout</button>
            </>
          ) : (
            <><Link to="/">Register</Link><Link to="/login">Login</Link></>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
