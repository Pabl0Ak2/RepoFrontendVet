import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdoptionRequests = () => {
  const [requests, setRequests] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    description: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const fetchRequests = async () => {
    const response = await axios.get('http://localhost:3000/ado-req-pet');
    setRequests(response.data);
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await axios.patch(`http://localhost:3000/ado-req-pet/${editId}`, formData);
      setIsEditing(false);
      setEditId(null);
    } else {
      await axios.post('http://localhost:3000/ado-req-pet', formData);
    }
    setFormData({ name: '', email: '', phone: '', date: '', description: '' });
    fetchRequests();
  };

  const handleEdit = (request) => {
    setFormData(request);
    setIsEditing(true);
    setEditId(request.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/ado-req-pet/${id}`);
    fetchRequests();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Adoption Requests</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="p-2 border rounded w-full mb-2" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="p-2 border rounded w-full mb-2" />
        <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required className="p-2 border rounded w-full mb-2" />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required className="p-2 border rounded w-full mb-2" />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="p-2 border rounded w-full mb-2" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {isEditing ? 'Update Request' : 'Add Request'}
        </button>
      </form>
    </div>
  );
};

export default AdoptionRequests;
