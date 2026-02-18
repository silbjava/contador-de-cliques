import { useState } from 'react';
import './App.css'

const Contador = () => {
  const [count, setCount] = useState(0);

  const incrementarContador = () => {
    setCount(count + 1);
  };

  return (
    <div className="card">
      <h1>Contador: {count}</h1>
      <button onClick={incrementarContador}>Clique aqui</button>
    </div>
  );
};

export default Contador;