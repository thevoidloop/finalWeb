// Tarjeta.js
import React from 'react';

const Tarjeta = ({ datos }) => {
  if (!datos) {
    return null;
  }

  return (
    <div className="tarjeta">
      <h2>{datos.nombre}</h2>
      <p>{datos.titulo}</p>
      <p>{datos.email}</p>
    </div>
  );
};

export default Tarjeta;
