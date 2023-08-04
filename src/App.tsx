// src/App.tsx

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import Footer from './components/shared/Footer'
import { BrowserRouter,  Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './pages/HOME/Home';

function App() {
  return (  
    <BrowserRouter  >
    <Navbar/>
    <Home/>
    {/* <Routes> 
    <Route path='/' element={<SigninFacebookGoogle/>}/> 
    <Route path='diary' element={<Home/>}/> 
    <Route path="error" element={<ErrorPage />} />
     <Route path="diary/[create diary]" element={<Form/>} /> 
    <Route path="*" element={<Home />} /> 
    </Routes> */}
    {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
