/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggle }) => (
  <nav className="flex items-center justify-between px-8 py-4 font-mono uppercase shadow">
    <h3 className="text-xl font-bold">Egg</h3>
    <div className="hidden md:block">
      <Link to="/" className="p-4">
        Home
      </Link>
      <Link to="/menu" className="p-4">
        Menu
      </Link>
      <Link to="/about" className="p-4">
        About
      </Link>
      <Link to="/contact" className="p-4">
        Contact
      </Link>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 cursor-pointer md:hidden"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={toggle}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </nav>
);

export default Navbar;
