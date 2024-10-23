import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
import AdoptionRequestsUser from '../formsPets/ReqPetUApply';
import Pets from '../formsPets/ListPetsAvai';

const UserPage = () => {
    const { user, logout } = useAuth(); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenla, setIsModalOpenla] = useState(false);

    if (!user) {
      return <Navigate to="/" replace />;
    }
  
    const { name, role } = user;
  
    
    const handleLogout = () => {
      logout();
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const openModala = () => setIsModalOpenla(true);
    const closeModala = () => setIsModalOpenla(false);
  
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[darkslategray] p-6">
  <h1 className="text-4xl font-extrabold text-white mb-6 animate-bounce">
    ¡Bienvenido, {name}!
  </h1>
  <p className="text-2xl text-white mb-8">
    Eres un {role === 'admin' ? 'administrador' : 'usuario normal'}.
  </p>

  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
  <div 
  className="bg-gray-800 shadow-lg rounded-lg p-6 w-80 transform hover:scale-105 transition-transform duration-300 cursor-pointer mx-auto"
  onClick={openModal}
>
  <h2 className="text-2xl font-semibold text-teal-400 mb-4">Enviar una Solicitud de Adopción</h2>
  <p className="text-gray-300">Envía tu solicitud para que la vea el administrador.</p>
  <div className="mt-4">
    <button className="bg-teal-500 text-white py-2 px-4 rounded-full w-full hover:bg-teal-600 transition duration-300">
      Solicitar
    </button>
  </div>
</div>


<div 
  className="bg-gray-800 shadow-lg rounded-lg p-6 w-80 transform hover:scale-105 transition-transform duration-300 cursor-pointer mx-auto"
  onClick={openModala}
>
  <h2 className="text-2xl font-semibold text-yellow-300 mb-4">Lista de Mascotas Disponibles</h2>
  <p className="text-gray-200">Estas lomitos necesitan un hogar.</p>
  <div className="mt-4">
    <button className="bg-yellow-500 text-white py-2 px-4 rounded-full w-full hover:bg-yellow-600 transition duration-300">
      Ver Más
    </button>
  </div>
</div>

  </div>

  <button 
    onClick={handleLogout} 
    className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 transform hover:scale-105"
  >
    Cerrar Sesión
  </button>

  {isModalOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 border border-blue-600 rounded-lg p-6 w-11/12 md:w-1/3 relative shadow-2xl">
        <AdoptionRequestsUser />
        <div className="flex justify-end mt-4">
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            onClick={closeModal}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )}

  {isModalOpenla && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 border border-blue-600 rounded-lg p-6 w-11/12 md:w-1/3 relative shadow-2xl">
        <Pets />
        <div className="flex justify-end mt-4">
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            onClick={closeModala}
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

export default UserPage;
