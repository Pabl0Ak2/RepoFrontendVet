import React, { useState } from 'react';
import axios from 'axios';

const AddPetForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [breed, setBreed] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', name);
        formData.append('age', age);
        formData.append('breed', breed);

        try {
            await axios.post('http://localhost:3000/pets-ado', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setName('');
            setAge('');
            setBreed('');
            setImage(null);
        } catch (error) {
            console.error('Error adding pet:', error);
        }
    };

    return (
        <div className="rounded-xl shadow-lg">
  <h2 className="text-3xl font-extrabold text-white mb-4 text-center">
    Agregar Nueva Mascota
  </h2>
  <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg">
    <div className="mb-4">
      <label className="block text-lg font-semibold text-gray-700 mb-2">Nombre</label>
      <input
        type="text"
        placeholder="Nombre de la mascota"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 focus:border-purple-500 focus:ring-purple-500 p-3 w-full rounded-lg shadow-sm"
        required
      />
    </div>
    
    <div className="mb-4">
      <label className="block text-lg font-semibold text-gray-700 mb-2">Edad</label>
      <input
        type="number"
        placeholder="Edad"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="border border-gray-300 focus:border-purple-500 focus:ring-purple-500 p-3 w-full rounded-lg shadow-sm"
        required
      />
    </div>
    
    <div className="mb-4">
      <label className="block text-lg font-semibold text-gray-700 mb-2">Raza</label>
      <input
        type="text"
        placeholder="Raza"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        className="border border-gray-300 focus:border-purple-500 focus:ring-purple-500 p-3 w-full rounded-lg shadow-sm"
        required
      />
    </div>
    
    <div className="mb-6">
      <label className="block text-lg font-semibold text-gray-700 mb-2">Imagen</label>
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="border border-gray-300 focus:border-purple-500 focus:ring-purple-500 p-3 w-full rounded-lg shadow-sm"
        required
      />
    </div>
    
    <button
      type="submit"
      className="bg-purple-500 text-white p-3 w-full rounded-lg font-semibold shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-transform transform hover:scale-105">
      Agregar Mascota
    </button>
  </form>
</div>

    );
};

export default AddPetForm;
