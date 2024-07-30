import React from 'react';
import './Auditoria.css'; 

const AuditoriaPage = () => {
  return (
    <div className="audit-container">
      <h1>Auditoría Financiera</h1>
      <p className="intro-text">
        En 28 Revenue Consultores, ofrecemos servicios de auditoría financiera
        para garantizar la transparencia y confiabilidad de la información
        financiera de tu empresa.
      </p>
      <div className="service-cards">
        <div className="service-card">
          <h2>Análisis de la Situación Financiera</h2>
          <p>
            Realizamos un análisis detallado de la situación financiera actual
            de tu empresa, evaluando la solvencia, liquidez y rentabilidad.
          </p>
        </div>
        <div className="service-card">
          <h2>Análisis del Cumplimiento Normativo</h2>
          <p>
            Evaluamos el cumplimiento de las normativas y regulaciones
            financieras aplicables a tu empresa, asegurando el cumplimiento
            legal.
          </p>
        </div>
        <div className="service-card">
          <h2>Identificación de Áreas de Oportunidad</h2>
          <p>
            Identificamos áreas de oportunidad para mejorar los procesos
            financieros y optimizar el rendimiento económico de tu empresa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuditoriaPage;
