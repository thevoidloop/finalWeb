// Formulario.js
import React, { useState } from 'react';

const Formulario = ({ onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [titulo, setTitulo] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nombre, titulo, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre completo"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Título profesional"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Crear Tarjeta</button>
    </form>
  );
};

export default Formulario;
