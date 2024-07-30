import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="./assets/logos/revenue.jpg" alt="Logo" />
      </div>
      <nav className="nav">
        <Link to="/about">Acerca de nosotros</Link>
        <div className="dropdown">
          <button id="serv">Servicios</button>
          <div className="dropdown-content">
            <Link to="/con_int">Contabilidad Integral</Link>
            <Link to="/consul">Consultoría especializada</Link>
            <Link to="/auditoria">Auditoría financiera</Link>
          </div>
        </div>
        <Link to="/publications">Publicaciones</Link>
        <Link to="/tips">Tips</Link>
        <Link to="/contact">Contactanos</Link>
      </nav>
      <div className="contact">
        <span className="tel">📞 771 200 3950</span>
        <Link to="/login" className="register">Iniciar sesión</Link>
        <Link to="/sign_up" className="register">Ayuda?</Link>
      </div>
    </header>
  );
};

export default Header;
