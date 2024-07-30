import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="page-container">
      <header>
        <h1>Acerca de Nosotros</h1>
      </header>
      <main>
        <section>
          <h2>Quiénes Somos</h2>
          <p>
            Somos una firma especializada en brindar soluciones contables,
            legales y financieras, acordes a las necesidades de tu empresa; te
            apoyamos a tomar decisiones basadas en el análisis financiero.
          </p>
        </section>
        <section>
          <h2>Nuestra Misión</h2>
          <p>
            Hacer de los servicios profesionales de alto valor, algo alcanzable
            para las empresas jóvenes.
          </p>
        </section>
        <section>
          <h2>Nuestra Visión</h2>
          <p>
            Ser reconocidos como el mejor aliado de las empresas jóvenes, al
            impulsar su productividad y potenciar su éxito empresarial.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
