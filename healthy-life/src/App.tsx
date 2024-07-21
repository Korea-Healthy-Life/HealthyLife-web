import React from 'react';
import './App.css';
import { Routes } from 'react-router-dom';
import Header from './components/Header';
import Navigaition from './components/navigation/Navigaition';

import Footer from './components/Footer';
import Sidenavigation from './components/Sidenavigation';

function App() {
  return (
    <>
    {/* <Header /> */}
    <Navigaition />
    <Sidenavigation />
    <Routes>
    
    </Routes> 
    {/* <Footer /> */}
    </>
  );
}

export default App;
