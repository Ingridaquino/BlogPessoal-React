import React from 'react';
import './App.css';
import { Home } from './paginas/home/Home';

import { Navbar } from './components/estaticos/navbar/Navbar';
import { Footer } from './components/estaticos/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
