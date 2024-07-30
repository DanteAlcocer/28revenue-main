import React from 'react';
import './Consulta.css'; 

const Consulta = () => {
  return (
    <div className="consulting-container">
      <h1>Consultoría Especializada</h1>
      <p className="intro-text">
        En 28 Revenue Consultores, ofrecemos servicios de consultoría
        especializada para ayudar a tu empresa a alcanzar su máximo potencial
        mediante un enfoque integral y personalizado.
      </p>
      <div className="service-cards">
        <div className="service-card">
          <h2>Diagnóstico</h2>
          <p>
            Realizamos un análisis exhaustivo de la situación actual de tu
            empresa para identificar áreas de oportunidad y mejoras.
          </p>
        </div>
        <div className="service-card">
          <h2>Propuesta de Mejora</h2>
          <p>
            Desarrollamos una propuesta de mejora detallada y específica,
            adaptada a las necesidades y objetivos de tu empresa.
          </p>
        </div>
        <div className="service-card">
          <h2>Acompañamiento</h2>
          <p>
            Ofrecemos un acompañamiento continuo para implementar las mejoras
            propuestas, asegurando su efectividad y sostenibilidad a largo
            plazo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Consulta;
