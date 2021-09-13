/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ toggle, isMenuOpen }) => (
  <div
    className={
      isMenuOpen
        ? 'flex flex-col items-center justify-center bg-yellow-300'
        : 'hidden'
    }
    onClick={toggle}
  >
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
);

export default Dropdown;
