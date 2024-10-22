import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DogCarousel = () => {
  const [dogImages, setDogImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const imagesToShow = 4;

  useEffect(() => {
    const fetchDogImages = async () => {
      try {
        const response = await axios.get(
          'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=20'
        );
        setDogImages(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dog images:', error);
        setLoading(false);
      }
    };

    fetchDogImages();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + imagesToShow >= dogImages.length ? 0 : prevIndex + imagesToShow
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dogImages.length - imagesToShow : prevIndex - imagesToShow
    );
  };

  if (loading) {
    return <div className="text-center py-4">Cargando imágenes...</div>;
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Galería de Perros</h2>
      <div className="flex overflow-hidden rounded-lg shadow-lg">
        {dogImages.slice(currentIndex, currentIndex + imagesToShow).map((dog) => (
          <div key={dog.id} className="w-1/4 p-2 flex-shrink-0">
            <img
              src={dog.url}
              alt="Perro"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        &#10095;
      </button>
      <div className="flex justify-center mt-2">
        {dogImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 transition duration-300 ${
              currentIndex / imagesToShow === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index * imagesToShow)}
          />
        ))}
      </div>
    </div>
  );
};

export default DogCarousel;
