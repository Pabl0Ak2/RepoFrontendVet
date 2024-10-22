import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', formData);
      alert('Login exitoso, token: ' + response.data.access_token);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al iniciar sesión');
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-lg font-bold mb-4">Iniciar Sesión</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border rounded w-full p-2 mb-4"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          className="border rounded w-full p-2 mb-4"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
