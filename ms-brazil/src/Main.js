import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Methodology from './pages/Methodology';

const Main = () => {
  return (
    <Routes> 
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/methodology' element={<Methodology/>}></Route>
    </Routes>
  );
}

export default Main;
