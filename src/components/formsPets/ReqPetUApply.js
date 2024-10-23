import React, { useState } from 'react';
import axios from 'axios';

const AdoptionRequestsUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/ado-req-pet', formData);
    setFormData({ name: '', email: '', phone: '', date: '', description: '' });
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-xl shadow-lg">
  <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">Enviar Una Solicitud de Adopción</h1>
  
  <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={formData.name}
      onChange={handleChange}
      required
      className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
    
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      required
      className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
    
    <input
      type="text"
      name="phone"
      placeholder="Phone"
      value={formData.phone}
      onChange={handleChange}
      required
      className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
    
    <input
      type="date"
      name="date"
      value={formData.date}
      onChange={handleChange}
      required
      className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
    
    <textarea
      name="description"
      placeholder="Description"
      value={formData.description}
      onChange={handleChange}
      className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
    ></textarea>
    
    <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-300">
      Add Request
    </button>
  </form>
</div>

  );
};

export default AdoptionRequestsUser;
