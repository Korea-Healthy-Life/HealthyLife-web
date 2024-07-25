import React from 'react';
import './App.css';
import { Routes } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/navigation/Navigation';

import Footer from './components/Footer';
import Sidenavigation from './components/Sidenavigation';
import Home from './views/home/Home';

function App() {
  return (
    <>
    <Sidenavigation />
    <Header />
    <Navigation />
    <Home />   
    <Routes>
    </Routes> 
    <Footer />
    </>
  );
}

export default App;
