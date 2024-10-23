import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DogCarousel = () => {
  const [dogImages, setDogImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const imagesToShow = 4;

  useEffect(() => {
    const fetchDogImages = async () => {
      const allImages = [];

      try {
        for (let i = 1; i <= 2; i++) {
          const response = await axios.get(
            `https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=${i}&limit=10`
          );
          allImages.push(...response.data);
        }

        setDogImages(allImages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dog images:', error);
        setLoading(false);
      }
    };

    fetchDogImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, dogImages.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + imagesToShow >= dogImages.length ? 0 : prevIndex + imagesToShow
    );
  };

  if (loading) {
    return <div className="text-center py-4">Cargando imágenes...</div>;
  }

  return (
<div className="relative max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
  <h2 className="text-4xl font-bold text-center text-teal-300 mb-8 drop-shadow-lg">
    Nuevos Integrantes Perrunos
  </h2>
  <div className="flex overflow-hidden rounded-lg shadow-2xl transition-transform duration-300">
    {dogImages.slice(currentIndex, currentIndex + imagesToShow).map((dog) => (
      <div key={dog.id} className="w-1/4 p-2 flex-shrink-0 transition-transform transform hover:scale-105">
        <img
          src={dog.url}
          alt="Perro"
          className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-teal-500"
        />
      </div>
    ))}
  </div>
</div>


  );
};

export default DogCarousel;
