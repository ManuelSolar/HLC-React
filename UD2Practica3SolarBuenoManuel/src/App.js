import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { FichaAlumno } from './componente1';
import imagen from './img/manuel.jpg';


function App() {
  const alumno = {
    nombre: "Manuel",
    direccion: "Av. Barcelona",
    localidad: "Córdoba",
    codigoPostal: "14010",
    imagen: "./img/andres.jpg"
  };
  return (
    <div className="App"> 
      <FichaAlumno nombre={alumno.nombre} direccion={alumno.direccion} localidad={alumno.localidad} codigoPostal={alumno.codigoPostal} imagen={imagen}/>
    </div>
  );
}

export default App;
