import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DogImageGallery = () => {
    const [breeds, setBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState('');
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchBreeds = async () => {
            try {
                const response = await axios.get('https://dog.ceo/api/breeds/list/all');
                setBreeds(Object.keys(response.data.message));
            } catch (error) {
                console.error('Error fetching breeds:', error);
            }
        };

        fetchBreeds();
    }, []);

    const fetchImages = async (breed) => {
        setLoading(true);
        try {
            const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images`);
            setImages(response.data.message);
            setShowModal(true);
        } catch (error) {
            console.error('Error fetching images:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleBreedChange = (e) => {
        const breed = e.target.value;
        setSelectedBreed(breed);
    };
    const closeModal = () => {
        setShowModal(false);
        setImages([]);
    };
    useEffect(() => {
        if (selectedBreed) {
            fetchImages(selectedBreed);
        }
    }, [selectedBreed]);
    useEffect(() => {
        if (showModal) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [showModal]);

    return (
<div className="container mx-auto p-4">
    <select 
        value={selectedBreed} 
        onChange={handleBreedChange} 
        className="border rounded p-2 bg-gray-800 text-white shadow-md hover:shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-400"
    >
        {breeds.map((breed) => (
            <option key={breed} value={breed} className="bg-gray-800 text-white">
                {breed}
            </option>
        ))}
    </select>

    {loading && <p className="text-center text-gray-300 mt-2">Cargando imágenes...</p>}
    
    {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <div className="bg-gray-900 p-6 rounded-lg shadow-2xl max-w-lg w-full max-h-[80vh] overflow-auto transition-transform transform scale-105">
                <h2 className="text-2xl font-bold text-teal-500 mb-2">Imágenes de {selectedBreed}</h2>
                <button 
                    onClick={closeModal} 
                    className="absolute top-2 right-2 text-red-400 hover:text-red-600 transition duration-300"
                >
                    Cerrar
                </button>
                <div className="grid grid-cols-1 gap-4 mt-4 overflow-y-auto max-h-[60vh]">
                    {images.map((image, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                            <img src={image} alt={`Dog ${index}`} className="w-full h-auto transition-transform transform hover:scale-105" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )}
</div>


    );
};

export default DogImageGallery;
