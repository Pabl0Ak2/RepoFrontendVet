import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/formsAuth/Login';
import Register from './components/formsAuth/Register';
import UserList from './components/auto/UsersListAd';
import backgroundImage from './assets/pets.jpeg';  
import PetsNList from './components/auto/PetsList';
import PetsSucces from './components/auto/PetsSuccess';
import Bienvenida from './components/pages/Bienvenida';
import ProtectedRoute from './auth/ProtectedRoute';
import UserPage from './components/pages/UserPage';

const AppContent = () => {
   const location = useLocation();
   const excludedRoutes = ['/bienvenida', '/user-page'];
  
   const isExcludedRoute = excludedRoutes.includes(location.pathname);

  return (
    <>
      {!isExcludedRoute && <Nav />}
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="text-white h-[600px] flex flex-col justify-center items-center bg-cover bg-center relative" 
            style={{ backgroundImage: `url(${backgroundImage})` }}>
              <h2 className='text-6xl font-black text-center'>ADOPTA UN GRAN AMIGO</h2>
              <p className="text-center">
              Diversidad de Especies y Razas: En muchos refugios y organizaciones de adopción, puedes encontrar una 
              amplia variedad de mascotas, incluyendo perros, gatos, conejos, y aves. Estas mascotas pueden pertenecer 
              a diferentes razas y tamaños, lo que permite a los adoptantes elegir según sus preferencias y necesidades.
              </p>

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10 md:-mb-14 -mb-8">
  <div className="md:w-[300px] w-[100px] md:h-28 h-16 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg transition-transform transform hover:scale-105 duration-300">
    <p className="text-white text-center font-semibold md:text-base text-xs">¡Cada perro merece un hogar!</p>
  </div>
  <div className="md:w-[300px] w-[100px] md:h-28 h-16 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg transition-transform transform hover:scale-105 duration-300">
    <p className="text-white text-center font-semibold md:text-base text-xs">¡Adopta, no compres!</p>
  </div>
  <div className="md:w-[300px] w-[100px] md:h-28 h-16 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg transition-transform transform hover:scale-105 duration-300">
    <p className="text-white text-center font-semibold md:text-base text-xs">¡Un amigo leal te está esperando!</p>
  </div>
</div>

            </div>
          } 
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bienvenida" element={ <ProtectedRoute><Bienvenida /></ProtectedRoute> }/>
        <Route path="/user-page" element={ <ProtectedRoute><UserPage /></ProtectedRoute> }/>
      </Routes>

      {!isExcludedRoute && (
        <>
          <div className='mt-14'><PetsSucces/></div>
          <div className='mt-14'><PetsNList/></div>
          <div className='mt-24'><UserList /></div>
        </>
      )}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
