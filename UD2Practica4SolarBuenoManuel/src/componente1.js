import React from 'react';

// Elabora dos componentes uno (class component y otro function component) en donde en cada 
// uno de ellos deberás de implementar un contador que estará compuesto de dos botones uno 
// que incrementará los valores y otro que realizará el decremento de los mismos.

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
  }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  }

  decrementar = () => {
    this.setState({ contador: this.state.contador - 1 });
  }

  render() {
    return (
      <div>
        <h1>Contador (class component)</h1>
        <h2>{this.state.contador}</h2>
        <button onClick={this.incrementar}>Incrementar</button>
        <button onClick={this.decrementar}>Decrementar</button>
      </div>
    );
  }
}

export { Contador };



