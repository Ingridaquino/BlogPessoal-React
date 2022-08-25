import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './components/home/Home';
import { Main } from './components/main/Main';

function App() {
  return (
    <div className="App">
     <Home />
     <Main />
    </div>
  );
}

export default App;
