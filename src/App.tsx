import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
//import Header from './components/Header/Header';
import { Router } from './router';

function App() {
  return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>

  );
}

export default App;
