import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/users', formData);
      navigate('/',);
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      alert('Error al registrar el usuario');
    }
  };

  return (
    <div className="flex justify-center items-center mt-16 p-4">
  <form className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm w-full" onSubmit={handleSubmit}>
    <h2 className="text-2xl font-bold text-teal-300 mb-6 text-center">Registro</h2>
    <input
      type="text"
      name="name"
      placeholder="Nombre"
      value={formData.name}
      onChange={handleChange}
      className="border border-teal-500 rounded w-full p-3 mb-4 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      className="border border-teal-500 rounded w-full p-3 mb-4 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
      required
    />
    <input
      type="password"
      name="password"
      placeholder="Contraseña"
      value={formData.password}
      onChange={handleChange}
      className="border border-teal-500 rounded w-full p-3 mb-4 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
      required
    />
    <select
      name="role"
      value={formData.role}
      onChange={handleChange}
      className="border border-teal-500 rounded w-full p-3 mb-4 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
    >
      <option value="user">Usuario</option>
      <option value="admin">Admin</option>
    </select>
    <button type="submit" className="bg-teal-500 text-white py-2 rounded-full w-full hover:bg-teal-600 transition duration-200">
      Registrarse
    </button>
  </form>
</div>

  );
};

export default Register;
