import React from 'react';
import { Link } from 'react-router-dom';
import miImagen from '../assets/pets-logo.jpg';

const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src={miImagen} alt="Logo" className="h-8 mr-2" />
        <span className="text-white text-xl">Adopta un gran amigo</span>
      </div>

      <ul className="flex space-x-4">
        <li>
          <Link to="/login" className="text-white hover:text-gray-300">
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="text-white hover:text-gray-300">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
