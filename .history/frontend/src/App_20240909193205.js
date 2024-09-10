import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from './components/home/HomePage';

import AnxietyQuiz from './components/quiz/AnxietyQuiz';
import StressQuiz from './components/quiz/StressQuiz';
import DepressionQuiz from './components/quiz/DepressionQuiz';

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
import SignUpPage from './components/SignUp/Signup';
import Routine from './components/blogs/Routine';
import Snacbar from './components/snackbar';

function App() {
    return (  
<BrowserRouter>
<MyContext.Provider value={values}>
  < Navbar/>

  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='*' element={<NotFound/>}/>
    <Route path='/anxietyquiz' element={<AnxietyQuiz/>}/>
    <Route path='/stressquiz' element={<StressQuiz/>}/>
    <Route path='/depressionquiz' element={<DepressionQuiz/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/anxiety' element={<Anxiety/>}/>
    <Route path='/depression' element={<Depression/>}/>
    <Route path='/sleep' element={<Sleep/>}/>
    <Route path='/Diet' element={<Diet/>}/>
    <Route path='/stigma' element={<Stigma/>}/>

    <Route path='/signup' element={<SignUpPage/>}/>

    <Route path='/Routine' element={<Routine/>}/>
    


   
    

  </Routes>
  < Footer/>
  </MyContext.Provider>
  </BrowserRouter>
    );
}

export default App;