import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Saludo } from './componente1';
import { SaludoHora } from './componente2';
import { SaludoHoraNombre } from './componente3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Saludo />
        <SaludoHora/>
        <SaludoHoraNombre/>
      </header>
    </div>
  );
}

export default App;
