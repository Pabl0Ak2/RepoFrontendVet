import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/?nat=mx&results=6');
      setUsers(response.data.results);
    } catch (error) {
      console.error('Error fetching the users:', error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto p-6">
    <h1 className="text-4xl font-bold text-center text-teal-600 mb-8">Personas que han adoptado</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {users.map((user, index) => (
        <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl p-4">
          <div className="relative mb-4">
            <img
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              className="w-32 h-32 rounded-full mx-auto border-4 border-teal-300 transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
            <div className="absolute top-2 right-2 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded">
              Adoptante
            </div>
          </div>
          <h2 className="text-2xl text-center font-semibold text-gray-800 mb-1">
            {user.name.first} {user.name.last}
          </h2>
          <p className="text-left text-gray-600">Edad: <span className="font-bold">{user.dob.age}</span></p>
          <p className="text-left text-gray-600">Email: <span className="font-bold">{user.email}</span></p>
          <p className="text-left text-gray-600">Celular: <span className="font-bold">{user.cell}</span></p>
          <p className="text-left text-gray-600">Ciudad: <span className="font-bold">{user.location.city}</span></p>
          <p className="text-left text-gray-600">Estado: <span className="font-bold">{user.location.state}</span></p>
          <p className="text-left text-gray-600">País: <span className="font-bold">{user.location.country}</span></p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default UserList;
