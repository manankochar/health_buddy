import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from './components/home/HomePage';
import Quiz from './components/quiz/Quiz';
import Blog from './components/blogs/Blog';
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from './components/NotFound';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Anxiety from './components/blogs/Anxiety';
import Sleep from './components/blogs/Sleep';
import Depression from './components/blogs/depression';
import Diet from './components/blogs/Diet';
import Stigma from './components/blogs/stigma';
<<<<<<< Updated upstream
import SignUpPage from './components/SignUp/Signup';
=======
import Routine from './components/blogs/Routine';

>>>>>>> Stashed changes

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
    <Route path='/depression' element={<Depression/>}/>
    <Route path='/sleep' element={<Sleep/>}/>
    <Route path='/Diet' element={<Diet/>}/>
    <Route path='/stigma' element={<Stigma/>}/>
<<<<<<< Updated upstream
    <Route path='/signup' element={<SignUpPage/>}/>
=======
    <Route path='/Routine' element={<Routine/>}/>
    
>>>>>>> Stashed changes

   
    

  </Routes>
  < Footer/>
  </BrowserRouter>
);



