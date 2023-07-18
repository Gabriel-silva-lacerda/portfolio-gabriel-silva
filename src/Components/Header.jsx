import React, { useEffect, useRef, useState } from "react";
import "../styles/Header/Header.scss";
import "../styles/Header/HeaderDark.scss";
import "../styles/Header/HeaderResponsive/HeaderResponsive.scss";

const Header = ({ className, functionTheme }) => {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <header className={`header ${className}`}>
      <nav className={`nav ${isActive ? "active" : null}`}>
        <h2 className="logo">Gabriel Silva</h2>
        <button onClick={onClick} className="btn-mobile">
          <span className="hamburguer"></span>
        </button>
        <ul onClick={() => setIsActive(false)}>
          <li>
            <a href="#start">Início</a>
          </li>
          <li>
            <a href="#knowledge">Conhecimentos</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
          <li>
            <button className={`btn ${className}`} onClick={functionTheme}>
              <span className="material-symbols-outlined">dark_mode</span>
              <span className="material-symbols-outlined light">
                light_mode
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
