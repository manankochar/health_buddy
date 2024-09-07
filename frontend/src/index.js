import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from './components/home/HomePage';
import Quiz from './components/quiz/Quiz';
import Blog from './components/blogs/Blog';

import NotFound from './components/NotFound';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Anxiety from './components/blogs/Anxiety';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  < Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='*' element={<NotFound/>}/>
    <Route path='/quiz' element={<Quiz/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/anxiety' element={<Anxiety/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/blog' element={<Blog/>}/>

  </Routes>
  < Footer/>
  </BrowserRouter>
);



