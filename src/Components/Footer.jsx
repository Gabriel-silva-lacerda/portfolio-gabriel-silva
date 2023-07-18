import React from "react";
import "../styles/Footer/Footer.scss";
import "../styles/Footer/FooterDark.scss";
import "../styles/Footer/FooterResponsive/FooterResponsive.scss";

const Footer = ({ className }) => {
  return (
    <footer className={`footer-container ${className}`} id="contact">
      <div className="footer-contact">
        <div className="contact-description">
          <h1>
            Contate-me<span className="point">.</span>
          </h1>
          <p>
            Eu adoraria ouvir sobre seu projeto e como eu poderia ajudar. Por
            favor, preencha o formulário, e eu irei retornar o mais breve
            possível.
          </p>
        </div>
        <form
          action="https://formsubmit.co/gabrielp_lacerda@hotmail.com"
          method="POST"
        >
          <div className="single-input">
            <input required type="text" name="name" />
            <label htmlFor="name">Nome</label>
          </div>
          <div className="single-input">
            <input required type="email" name="email" />
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="text-area">
            <textarea
              required
              name="mensage"
              id=""
              cols="60"
              rows="10"
            ></textarea>
            <label htmlFor="mensage">Mensagem</label>
          </div>
          <div className="button-container">
            <div>
              <button>Enviar Mensagem</button>
            </div>
          </div>
        </form>
      </div>
      <div className="contact-icons">
        <span className="logo">Gabriel Silva</span>
        <div className="icons">
          <span className="icon">
            <a
              href="https://www.linkedin.com/in/gabriel-s-6608b1120/"
              target="blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </span>
          <span className="icon">
            <a href="https://github.com/Gabriel-silva-lacerda" target="blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </span>
          <span className="icon">
            <a href="https://wa.me/5511969101312" target="blank">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
