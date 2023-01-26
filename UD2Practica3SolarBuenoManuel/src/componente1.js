import React from 'react';

// Devuelve un componente de React que muestra una ficha de un alumno con una imagen a la izquieda y el nombre, dirección, localidad y codigo postal a la derecha

export const FichaAlumno = (props) => {
    return (
        <div className="ficha-alumno">
            <img className="imagen-alumno" src
            ={props.imagen} alt="Imagen del alumno" />
            <div className="datos-alumno">
                <div className = "labels-alumno" >
                    <p><label>NOMBRE: </label></p>
                    <p><label>DIRECCION: </label></p>
                    <p><label>LOCALIDAD: </label></p>
                    <p><label>CODIGO POSTAL: </label></p>
                </div>
                
            </div>
            <div className = "parrafos-alumno" >
                    <p className="nombre-alumno"> {props.nombre}</p>
                    <p className="direccion-alumno">{props.direccion}</p>
                    <p className="localidad-alumno">{props.localidad}</p>
                    <p className="codigo-postal-alumno">{props.codigoPostal}</p>
                </div>
        </div>
    );
}
