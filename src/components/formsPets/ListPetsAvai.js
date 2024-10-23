import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PetList = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetchPets();
    }, []);

    const fetchPets = async () => {
        try {
            const response = await axios.get('http://localhost:3000/pets-ado');
            setPets(response.data);
        } catch (error) {
            console.error('Error fetching pets:', error);
        }
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3000/pets-ado/${id}`);
        fetchPets();
    };

    return (
        <div className="container mx-auto mb-8 p-6 bg-gray-50 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">Lista de Mascotas</h1>
        <div className="max-h-96 overflow-y-auto max-w-[400px]">
          <ul className="space-y-6">
            {pets.map((pet) => (
              <li
                key={pet.id}
                className="bg-white shadow-lg p-6 rounded-xl flex justify-between items-center transition-transform transform hover:scale-100"
              >
                <div className="flex items-center space-x-4">
                  {pet.imageUrl && (
                    <img
                      src={`http://localhost:3000/uploads/${pet.imageUrl}`}
                      alt={pet.name}
                      className="w-24 h-24 object-cover rounded-lg shadow-md"
                    />
                  )}
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800">{pet.name}</h2>
                    <p className="text-gray-600">Edad: {pet.age} años</p>
                    <p className="text-gray-600">Raza: {pet.breed}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      
    );
};

export default PetList;
