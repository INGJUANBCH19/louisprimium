import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <img src="./src/assets/PHOTO-2025-02-19-23-07-15.png" alt="Logo Louisprimium" className="logo" />
      <nav>
        <a href="/">Inicio</a>
        <a href="/servicios">Servicios</a>
        <a href="/contacto">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;