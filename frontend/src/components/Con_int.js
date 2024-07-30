import React from 'react';
import './Con_int.css'; 

const AccountingPage = () => {
  return (
    <div className="accounting-container">
      <h1>Contabilidad Integral</h1>
      <p className="intro-text">
        En 28 Revenue Consultores, ofrecemos un servicio completo de
        contabilidad integral diseñado para satisfacer todas las necesidades
        financieras y legales de tu empresa.
      </p>
      <div className="service-cards">
        <div className="service-card">
          <h2>Registro de Operaciones</h2>
          <p>
            Nos encargamos de llevar un registro detallado y preciso de todas
            tus operaciones financieras, asegurando la transparencia y exactitud
            en tu contabilidad.
          </p>
        </div>
        <div className="service-card">
          <h2>Atención de Obligaciones</h2>
          <p>
            Cumplimos con todas las obligaciones fiscales y contables,
            presentando declaraciones y reportes necesarios ante las autoridades
            correspondientes.
          </p>
        </div>
        <div className="service-card">
          <h2>Asesoría Financiera</h2>
          <p>
            Brindamos asesoría personalizada para optimizar tus recursos
            financieros, mejorando la rentabilidad y eficiencia de tu empresa.
          </p>
        </div>
        <div className="service-card">
          <h2>Asesoría Legal</h2>
          <p>
            Ofrecemos asesoría legal especializada para garantizar el
            cumplimiento de todas las normativas y regulaciones aplicables a tu
            negocio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountingPage;
