import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Methodology from './pages/Methodology';
import Inicio from './pages/Inicio';
import Sobre from './pages/Sobre';
import Metodologia from './pages/Metodologia';

const Main = () => {
  return (
    <Routes> 
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/methodology' element={<Methodology/>}></Route>
      <Route path='/inicio' element={<Inicio/>}></Route>
      <Route path='/sobre' element={<Sobre/>}></Route>
      <Route path='/metodologia' element={<Metodologia/>}></Route>
    </Routes>
  );
}

export default Main;
