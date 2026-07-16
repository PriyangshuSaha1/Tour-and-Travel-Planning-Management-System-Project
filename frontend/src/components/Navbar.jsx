import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="bg-blue-700 text-white shadow-xl">

                <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-4">

                    {/* Logo */}
                    <h1 className="text-xl md:text-2xl font-bold">
                        Tour and Travel Planning Management System
                    </h1>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-6">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/add">Add Tour</Link>
                        <Link to="/view">View Tour</Link>
                    </div>

                    {/* Mobile Button */}
                    <button
                        className="md:hidden text-3xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? "✖" : "☰"}
                    </button>

                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                        menuOpen
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                    }`}
                >
                    <div className="flex flex-col items-center gap-4 py-4 bg-blue-600">

                        <Link to="/" onClick={() => setMenuOpen(false)}>
                            Home
                        </Link>

                        <Link to="/about" onClick={() => setMenuOpen(false)}>
                            About
                        </Link>

                        <Link to="/contact" onClick={() => setMenuOpen(false)}>
                            Contact
                        </Link>

                        <Link to="/add" onClick={() => setMenuOpen(false)}>
                            Add Tour
                        </Link>

                        <Link to="/view" onClick={() => setMenuOpen(false)}>
                            View Tour
                        </Link>

                    </div>
                </div>

            </nav>
        </>
    );
};

export default Navbar;