import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Contador } from './componente1';
import { Contador2 } from './componente2';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contador />
        <Contador2/>
      </header>
    </div>
  );
  
}

export default App;
