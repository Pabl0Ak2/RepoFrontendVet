import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
import AdoptionRequests from '../formsPets/ReqPetApply';
import AdoptionRequestsList from './AdoptionListApply';
import AddPet from '../formsPets/AddPets';

const Bienvenida = () => {
  const { user, logout } = useAuth();
  const [isModalOpenla, setIsModalOpenla] = useState(false);
  const [isModalOpenl, setIsModalOpenl] = useState(false);


  if (!user) {
    return <Navigate to="/" replace />;
  }

  const { name, role } = user; 

  const handleLogout = () => {
    logout();
  };

  const openModalLa = () => setIsModalOpenla(true);
  const closeModalLa = () => setIsModalOpenla(false);

  const openModalL = () => setIsModalOpenl(true);
  const closeModalL = () => setIsModalOpenl(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[darkslategray] p-6">
  <h1 className="text-4xl font-extrabold text-white mb-6 animate-bounce">
    ¡Bienvenido, {name}!
  </h1>
  <p className="text-2xl text-white mb-8">
    Eres un {role === 'admin' ? 'administrador' : 'usuario normal'}.
  </p>

  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8 cursor-pointer">
  <div 
  className="bg-gray-800 shadow-lg rounded-lg p-6 w-80 transform hover:scale-105 transition-transform duration-300 mx-auto"
  onClick={openModalLa}
>
  <h2 className="text-2xl font-semibold text-teal-300 mb-4">Lista de Solicitudes</h2>
  <p className="text-gray-200">Gestiona las solicitudes de las personas que quieren adoptar.</p>
  <div className="mt-4">
    <button className="bg-teal-500 text-white py-2 px-4 rounded-full w-full hover:bg-teal-600 transition duration-300">
      Ver Solicitudes
    </button>
  </div>
</div>


<div 
  className="bg-gray-800 shadow-lg rounded-lg p-6 w-80 transform hover:scale-105 transition-transform duration-300 mx-auto"
  onClick={openModalL}
>
  <h2 className="text-2xl font-semibold text-teal-300 mb-4">Añadir una Mascota</h2>
  <p className="text-gray-200">Registra una nueva mascota para adopción.</p>
  <div className="mt-4">
    <button className="bg-teal-500 text-white py-2 px-4 rounded-full w-full hover:bg-teal-600 transition duration-300">
      Comenzar
    </button>
  </div>
</div>

  </div>

  <button 
    onClick={handleLogout} 
    className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-transform duration-300 transform hover:scale-105 mb-4"
  >
    Cerrar Sesión
  </button>

  {isModalOpenla && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 border border-blue-600 rounded-lg p-6 w-11/12 md:w-1/3 shadow-2xl relative">
        <AdoptionRequestsList />
        <div className="flex justify-end mt-4">
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            onClick={closeModalLa}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )}

  {isModalOpenl && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 border border-blue-600 rounded-lg p-6 w-11/12 md:w-1/3 shadow-2xl relative">
        <AddPet />
        <div className="flex justify-end mt-4">
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            onClick={closeModalL}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )}
</div>

  );
};

export default Bienvenida;
