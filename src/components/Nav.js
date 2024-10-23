import React from 'react';
import { Link } from 'react-router-dom';
import miImagen from '../assets/pets-logo.jpg';
import DogImageGallery from './auto/Doggie';
import Login from './formsAuth/Login';

const Nav = () => {
  return (
<nav className="bg-darkslategray p-4 flex items-center justify-between">
  <div className="flex items-center">
    <img src={miImagen} alt="Logo" className="md:h-20 md:w-56 h-10 w-10 mr-3 rounded-full" />
    <span className="text-teal-200 text-2xl font-bold hidden sm:block">Adopta un Gran Amigo 🐾</span>
  </div>

  <div className="flex items-center space-x-6">
    <ul className="flex items-center space-x-4">
      <li className="hidden sm:block">
        <Login />
      </li>
      <li className="block sm:hidden">
        <Link
          to="/login"
          className="text-teal-100 bg-teal-500 hover:bg-teal-600 font-bold py-2 px-4 rounded-full transition-all duration-300"
        >
          ¡Inicia Sesión!
        </Link>
      </li>
      <li>
        <Link
          to="/register"
          className="text-teal-100 bg-teal-500 hover:bg-teal-600 font-bold py-2 px-4 rounded-full transition-all duration-300"
        >
          ¡Regístrate!
        </Link>
      </li>
    </ul>
    <div className="hidden sm:block">
      <DogImageGallery />
    </div>
  </div>
</nav>


  );
};

export default Nav;
