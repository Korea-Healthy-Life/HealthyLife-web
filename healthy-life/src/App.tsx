import React from 'react';
import './App.css';
import { Routes } from 'react-router-dom';
import Header from './components/Header';
import Navigaition from './components/Navigaition';

import Footer from './components/Footer';
import Sidenavigation from './components/Sidenavigation';
import Main2 from './components/main2/Main2';

function App() {
  return (
    <>
    <Header />
    <Navigaition />
    <Main2/>
    <Sidenavigation />
    <Routes>

    </Routes> 
    <Footer />
    </>
  );
}

export default App;
