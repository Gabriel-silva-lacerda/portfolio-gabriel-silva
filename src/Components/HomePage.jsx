import React from "react";
import Photo from "../assets/foto.jpg";
import "../styles/Main/Homepage.scss";
import "../styles/Main/HomepageDark.scss";
import "../styles/Main/Responsive/HomeResponsive.scss";

const HomePage = () => {
  return (
    <section className="home-page" id="start">
      <div className="especification">
        <div>
          <h1>
            Prazer em conhecê-los! Me chamo{" "}
            <span className="name">Gabriel Silva</span> e tenho 22 anos
            <span className="point">.</span>
          </h1>
          <p>
            Moro em São Paulo - SP, sou um desenvolvedor front-end apaixonado
            por criar aplicativos na Web, tentando sempre trazer a melhor
            experiência para o usuário. Estou em busca da minha primeira
            oportunidade como desenvolvedor front-end. Tenho conhecimentos em
            <span className="strong"> HTML</span>,
            <span className="strong"> CSS</span>,
            <span className="strong"> JavaScript</span>,
            <span className="strong"> SASS</span>,
            <span className="strong"> Git</span>
            <span className="strong"> e React</span>. Atualmente cursando
            <span className="strong">
              {" "}
              Análise e desenvolvimento de sistemas
            </span>
            , e simultaneamente me aprimorando através de cursos extracurriculares. Sou uma
            pessoa focada, interativa e com grande vontade de aprender!
          </p>
          <div className="contact-perfil">
            <span className="contact">Contate-me</span>
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

        <div className="photo-perfil">
          <img src={Photo} alt="photo perfil" />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
