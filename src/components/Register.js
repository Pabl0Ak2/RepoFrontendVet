import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
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
      alert('Usuario registrado con éxito');
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      alert('Error al registrar el usuario');
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-lg font-bold mb-4">Registro</h2>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          className="border rounded w-full p-2 mb-4"
          required
        />
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
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="border rounded w-full p-2 mb-4"
        >
          <option value="user">Usuario</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
