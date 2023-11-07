// App.js
import React, { useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tarjeta from './Tarjeta';

function App() {
  const [datosPersonales, setDatosPersonales] = useState(null);

  const recibirDatos = (datos) => {
    setDatosPersonales(datos);
  };

  return (
    <div className="App">
      <Formulario onSubmit={recibirDatos} />
      <Tarjeta datos={datosPersonales} />
    </div>
  );
}

export default App;
