import React, { useEffect, useState } from 'react';

const PetsList = () => {
    const [pets, setPets] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('./assets/pets.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setPets(data);
                return fetch('https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=1&limit=6');
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setImages(data))
            .catch(error => console.error('Error al cargar las mascotas o las imágenes:', error));
    }, []);

    return (
<div className="mt-24 max-w-5xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
    <h1 className="text-5xl font-bold text-center text-teal-300 mb-8 drop-shadow-md">
        Casos de exito de nuestros lomitos
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.map((pet, index) => (
            <div key={index} className="bg-gray-900 border border-teal-500 rounded-lg p-4 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
                {images[index] && (
                    <img src={images[index].url} alt={pet.name} className="w-full h-48 object-cover rounded-t-lg mb-4 border border-gray-700" />
                )}
                <h2 className="text-2xl font-semibold text-teal-200">{pet.name}</h2>
                <p className="text-gray-300 mb-2">{pet.description}</p>
                <p className="text-gray-400 italic">{pet.type}</p>
            </div>
        ))}
    </div>
</div>

    );
};

export default PetsList;
