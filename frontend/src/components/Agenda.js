import React from 'react';
import './agenda.css'; 

const AgendaPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
  };

  return (
    <div className="form-container">
      <h1>Agendar Asesoría</h1>
      <form id="appointmentForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre Completo</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="phone">Teléfono</label>
        <input type="tel" id="phone" name="phone" required />

        <label htmlFor="date">Fecha de la Asesoría</label>
        <input type="date" id="date" name="date" required />

        <label htmlFor="message">Mensaje (opcional)</label>
        <textarea id="message" name="message" rows="4"></textarea>

        <button type="submit">Agendar</button>
      </form>
    </div>
  );
};

export default AgendaPage;
