import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';

const UserCarousel = () => {
  const [users, setUsers] = useState([]);
  const [focusedIndex, setFocusedIndex] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?nat=mx&results=6');
        setUsers(response.data.results);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: (current) => setFocusedIndex(current + 1),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          autoplaySpeed: 5000,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center p-6">
    <h1 className="text-5xl font-bold text-center text-teal-300 mb-8 drop-shadow-lg">Personas que han adoptado</h1>
    <div className="max-w-3xl w-full">
        <Slider {...settings}>
            {users.map((user, index) => (
                <div 
                    key={index} 
                    className={`p-4 transition-transform duration-700 ease-in-out ${index === focusedIndex ? 'scale-110' : ''}`}
                >
                    <div className={`flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${index === focusedIndex ? 'bg-gray-700' : ''}`}>
                        <img 
                            src={user.picture.large} 
                            alt={`${user.name.first} ${user.name.last}`} 
                            className={`rounded-full object-cover mb-2 transition-transform duration-700 ease-in-out ${index === focusedIndex ? 'w-32 h-32' : 'w-24 h-24'} md:w-32 md:h-32`} // Ajuste en pantallas medianas y superiores
                        />
                        <h2 className="text-xl font-semibold text-teal-200 text-center">{`${user.name.first} ${user.name.last}`}</h2>
                        <p className="text-sm text-gray-300 text-center">Edad: {user.dob.age}</p>
                        <p className="text-sm text-gray-300 text-center">Email: {user.email}</p>
                        <p className="text-sm text-gray-300 text-center">Celular: {user.phone}</p>
                        <p className="text-sm text-gray-300 text-center">Ciudad: {user.location.city}</p>
                        <p className="text-sm text-gray-300 text-center">Estado: {user.location.state}</p>
                        <p className="text-sm text-gray-300 text-center">País: {user.location.country}</p>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
</div>

  );
};

export default UserCarousel;
