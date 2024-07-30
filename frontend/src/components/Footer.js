import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
      </div>
      <div className="footer-suggestions">
        <a href="#">Términos y Condiciones</a>
        <a href="/privacidad.html">Aviso de Privacidad</a>
      </div>
    </footer>
  );
};

export default Footer;
