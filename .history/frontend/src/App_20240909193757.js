import React, { createContext } from 'react';
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
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const MyContext = createContext();
function App() {
    const [alertBox, setAlertBox] = useState({
        error: false,
        msg: "",
        snackOpen: false,
      });

    const values = {
        alertBox,
        setAlertBox,
      };
    
      const handleClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
    
        setAlertBox((prev) => ({ ...prev, snackOpen: false }));
      };
    
    return (  
        
<BrowserRouter>
<MyContext.Provider value={values}>
  < Navbar/>
  <Snackbar
          open={alertBox.snackOpen}
          autoHideDuration={5000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity={alertBox.error === true ? "error" : "success"}
            variant="filled"
            sx={{ width: "100%",backgroundColor: "#00b853",maxWidth:"400px" }}
          >
            {alertBox.msg}
          </Alert>
        </Snackbar>
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
export { MyContext };
export default App;