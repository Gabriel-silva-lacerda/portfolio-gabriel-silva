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
          <div>
            <h1>
              Prazer em conhecê-los! Me chamo{" "}
              <span className="name">Gabriel Silva</span>, tenho 24 anos
              <span className="point">.</span>
            </h1>
            <p>
              Sou desenvolvedor front-end com foco em <span className="strong">Angular</span> e quase 2 anos de experiência em criação de aplicações web integradas com APIs REST. Atualmente trabalho na <span className="strong">Confitec</span> como desenvolvedor full-stack, utilizando <span className="strong">Angular</span>, <span className="strong">.NET</span>, <span className="strong">Entity Framework</span> e <span className="strong">Ionic</span>. 
              <br /><br />
              Atuei também na <span className="strong">Nambbu</span>, desenvolvendo sites e sistemas com <span className="strong">WordPress</span>, <span className="strong">React</span>, <span className="strong">TypeScript</span>, <span className="strong">Styled Components</span> e <span className="strong">React Query</span>. 
              <br /><br />
              Busco constantemente evoluir, aprimorando minhas habilidades com projetos práticos, cursos e novos desafios.
            </p>
            <div className="contact-perfil">
              <span className="contact">Contate-me</span>
              <span className="icon">
                <a
                  href="https://www.linkedin.com/in/gabriel-s-6608b1120/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </span>
              <span className="icon">
                <a
                  href="https://github.com/Gabriel-silva-lacerda"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </span>
              <span className="icon">
                <a
                  href="https://wa.me/5511968101312"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </span>
            </div>
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
