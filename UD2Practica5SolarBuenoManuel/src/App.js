
import React, { useState } from 'react';
import './App.css';
 
function App() {
 
  const fruit = ['Cordoba', 'Sevilla', 'Cadiz', 'Malaga',
    'Almeria', 'Jaen', 'Huelva', 'Almeria'];
 
  const [filter, setFilter] = useState('');
 
  return (
    <div className="App">
      <p>
        <input id="filter"
          name="filter"
          type="text"
          value={filter}
          onChange={event => setFilter(event.target.value)}
        />
      </p>
      <ul>
      {fruit.filter(f => f.includes(filter) || filter === '')
            .map(f => <li key={f}>{f}</li>)}
      </ul>
    </div>
  );
}
 
export default App;
