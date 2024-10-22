import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import UserList from './components/UsersListAd';
import backgroundImage from './assets/pets.jpeg';  
import PetsNList from './components/PetsList';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="text-white h-[600px] flex flex-col justify-center items-center bg-cover bg-center relative" 
  style={{ backgroundImage: `url(${backgroundImage})` }}>
  <h2 className='text-6xl font-black text-center'>ADOPTA UN GRAN AMIGO</h2>
  <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10 md:-mb-14 -mb-8">
    <div className="md:w-[300px] w-[100px] md:h-28 h-16 bg-red-500"></div>
    <div className="md:w-[300px] w-[100px] md:h-28 h-16 bg-green-500"></div>
    <div className="md:w-[300px] w-[100px] md:h-28 h-16 bg-blue-500"></div>
  </div>
</div>


          } 
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <div className='mt-24'><UserList /></div>
      <div className='mt-14'><PetsNList/></div>
    </Router>
  );
};

export default App;

