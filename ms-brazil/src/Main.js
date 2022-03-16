import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/en_us/Home';
import About from './pages/en_us/About';
import Methodology from './pages/en_us/Methodology';
import Inicio from './pages/pt_br/Inicio';
import Sobre from './pages/pt_br/Sobre';
import Metodologia from './pages/pt_br/Metodologia';

const Main = (props) => {
  const {modal_en_open, modal_en_setOpen, modal_pt_open, modal_pt_setOpen} = props;
  return (
    <Routes> 
      <Route path='/' element={<Home modal_en_open={modal_en_open} modal_en_setOpen={modal_en_setOpen}/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/methodology' element={<Methodology/>}></Route>
      <Route path='/pt_br/inicio' element={<Inicio modal_pt_open={modal_pt_open} modal_pt_setOpen={modal_pt_setOpen}/>}></Route>
      <Route path='/pt_br/sobre' element={<Sobre/>}></Route>
      <Route path='/pt_br/metodologia' element={<Metodologia/>}></Route>
      <Route path='*' element={<Home modal_en_open={modal_en_open} modal_en_setOpen={modal_en_setOpen}/>}></Route>
    </Routes>
  );
}

export default Main;
