import React from 'react';
import './Blog.css'; 

const BlogPage = () => {
  return (
    <div className="page-container">
      <header>
        <h1>Blog</h1>
      </header>
      <main>
        <section>
          <h2>Últimos Artículos</h2>
          <article>
            <h3>Consejos para Mejorar tu Gestión Financiera</h3>
            <p>
              Aprende algunos consejos prácticos para mejorar la gestión
              financiera de tu empresa.
            </p>
          </article>
          <article>
            <h3>Tendencias Financieras en 2024</h3>
            <p>
              Descubre las tendencias financieras que marcarán el 2024 y cómo
              prepararte para ellas.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
};

export default BlogPage;
