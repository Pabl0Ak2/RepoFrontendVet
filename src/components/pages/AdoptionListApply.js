import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdoptionRequestsList = () => {
  const [requests, setRequests] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const fetchRequests = async () => {
    const response = await axios.get('http://localhost:3000/ado-req-pet');
    setRequests(response.data);
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleEdit = (request) => {
    setIsEditing(true);
    setEditId(request.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/ado-req-pet/${id}`);
    fetchRequests();
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-xl shadow-lg">
    <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">Solicitudes recibidas</h1>
  
    <div className="max-h-64 overflow-y-auto bg-white p-4 rounded-lg shadow-md">
      <ul className="space-y-4">
        {requests.map(request => (
          <li key={request.id} className="flex justify-between items-start bg-gray-50 p-4 rounded-lg shadow-sm hover:bg-gray-100 transition duration-200">
            <div>
              <p className="font-semibold"><strong>Name:</strong> {request.name}</p>
              <p><strong>Email:</strong> {request.email}</p>
              <p><strong>Phone:</strong> {request.phone}</p>
              <p><strong>Date:</strong> {new Date(request.date).toLocaleDateString()}</p>
              <p className="text-gray-700"><strong>Description:</strong> {request.description}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(request)}
                className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(request.id)}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>  
  );
};

export default AdoptionRequestsList;
