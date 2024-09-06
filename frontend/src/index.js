import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from './components/home/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  < Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    {/* <Route path='*' element={<NotFound/>}/> */}
  </Routes>
  < Footer/>
  </BrowserRouter>
);



