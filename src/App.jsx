// src/App.js
import  { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbarr from './compnonents/Navbar/Navbar';
import Footerr from './compnonents/Footer/Footer';
import Titlee from './compnonents/title/Title';
import Cardd from './compnonents/card/Card';
import HomePagee from './compnonents/HOMEpage/Homepage';


function App() {
  const homeRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToHome = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <Navbarr scrollToHome={scrollToHome} scrollToFooter={scrollToFooter} />
      <Routes>
        <Route 
          path="/" 
          element={
          <div ref={homeRef}>
            <HomePagee />
            <Titlee/>
            <Cardd />
          
          </div>
             
        } 
         
        />
        <Route 
          path="/content" 
          element={
              <div ref={footerRef}>
                <Footerr />
              </div>
           
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
