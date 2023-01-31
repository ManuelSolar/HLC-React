import React from 'react';

// Elabora dos componentes uno (function component) en donde en cada 
// uno de ellos deberás de implementar un contador que estará compuesto de dos botones uno 
// que incrementará los valores y otro que realizará el decremento de los mismos.

function Contador2() {
    const [contador, setContador] = React.useState(0);
    
    const incrementar = () => {
        setContador(contador + 1);
    }
    
    const decrementar = () => {
        setContador(contador - 1);
    }
    
    return (
        <div>
        <h1>Contador (function component)</h1>
        <h2>{contador}</h2>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
        </div>
    );
    }

export { Contador2 };


