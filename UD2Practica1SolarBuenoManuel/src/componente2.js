import React from 'react';

export const SaludoHora = () => {
    let hora = new Date().getHours();
    let saludo = "";
    if (hora >= 8 && hora < 12) {
        saludo = "Buenos días";
    } else if (hora >= 12 && hora < 21) {
        saludo = "Buenas tardes";
    }
    else if (hora >= 21 && hora < 24) {
        saludo = "Buenas noches";
    }
    else if (hora >= 0 && hora < 8) {
        saludo = "A dormir";
    }
    return <h1>{saludo}</h1>
}