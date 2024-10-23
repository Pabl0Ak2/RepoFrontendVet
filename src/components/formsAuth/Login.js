import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', formData);
      const { access_token, role, name } = response.data;

      login({ access_token, role, name });

      if (role === 'admin') {
        navigate('/bienvenida', { state: { name, role } });
      } else if (role === 'user') {
        navigate('/user-page', { state: { name, role } });
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al iniciar sesión');
    }
  };

  return (
<div className="flex items-center justify-center p-6">
  <form className="flex flex-col bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full sm:hidden" onSubmit={handleSubmit}>
    <h2 className="text-3xl font-bold text-center text-teal-300 mb-6">Iniciar Sesión</h2>
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      className="border border-teal-500 rounded p-3 mb-4 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
      required
    />
    <input
      type="password"
      name="password"
      placeholder="Contraseña"
      value={formData.password}
      onChange={handleChange}
      className="border border-teal-500 rounded p-3 mb-6 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
      required
    />
    <button 
      type="submit" 
      className="bg-teal-500 text-white p-3 rounded transition-all duration-300 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
    >
      Iniciar Sesión
    </button>
  </form>

  <form className="flex items-center space-x-4 hidden sm:flex" onSubmit={handleSubmit}>
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      className="border rounded p-2"
      required
    />
    <input
      type="password"
      name="password"
      placeholder="Contraseña"
      value={formData.password}
      onChange={handleChange}
      className="border rounded p-2"
      required
    />
    <button type="submit" className="bg-blue-500 text-white p-2 rounded w-32">
      Iniciar Sesión
    </button>
  </form>
</div>

  );
};

export default Login;
