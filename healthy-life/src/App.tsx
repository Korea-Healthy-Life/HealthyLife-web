import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navigaition from './components/navigation/Navigaition';

import Footer from './components/Footer';
import Sidenavigation from './components/Sidenavigation';
import Home from './views/home/Home';
import Main2 from './views/home/main2/Main2';

function App() {
  return (
    <>
    <Sidenavigation />
    <Header />
    <Navigaition />
    <Home />   
    <Main2/>
    <Routes>
    </Routes> 
    <Footer />
    </>
  );
}

export default App;
