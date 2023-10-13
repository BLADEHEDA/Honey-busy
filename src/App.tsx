// src/App.tsx

// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './store';

import './App.css';
import { BrowserRouter,  Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './pages/HOME/Home';
import Footer from './components/Footer';
import AboutUs from './pages/PAGES/AboutUs';
import OurServices from './pages/PAGES/OurServices';
import ContactUs from './pages/PAGES/ContactUs';

function App() {
  return (  
    <BrowserRouter  >
    {/* <Navbar/> */}

    {/* <Home/> */}
    {/* <AboutUs/> */}
    {/* <OurServices/> */}
    <ContactUs/>

    {/* <Footer/> */}
    {/* <Routes> 
    <Route path='/' element={<SigninFacebookGoogle/>}/> 
    <Route path='diary' element={<Home/>}/> 
    <Route path="error" element={<ErrorPage />} />
     <Route path="diary/[create diary]" element={<Form/>} /> 
    <Route path="*" element={<Home />} /> 
    </Routes> */}
    </BrowserRouter>
  );
}

export default App;
