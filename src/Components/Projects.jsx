import React from "react";
import "../styles/Main/Projects.scss";
import "../styles/Main/ProjectsDark.scss";
import "../styles/Main/Responsive/ProjectsResponsive.scss";
import Bikecraft from "../assets/bikecraft.png";
import Pokedex from "../assets/pokedex.png";
import Formulario from "../assets/formulario.png";
import ListaDeAfazeres from "../assets/todolist.png";
import CatalogoDeAnimes from "../assets/catalogo-animes.png";
import Calculadora from "../assets/calculadora.png";
import HTML from "../assets/logo-html.png";
import CSS from "../assets/css-3.svg";
import JavaScript from "../assets/logo-javascript.webp";
import Sass from "../assets/logo-sass.webp";
import ReactIcon from "../assets/react.png";

import ListProjects from "./ReusedComponents/ListProjects";

const Projects = () => {
  const informations = [
    {
      urlProjetc: CatalogoDeAnimes,
      urlIconHtml: HTML,
      urlIconCss: Sass,
      urlIconJavaScript: ReactIcon,
      linkProject: "https://catalogo-de-animes.netlify.app/",
      linkRepository:
        "https://github.com/Gabriel-silva-lacerda/catalogo-de-animes",
      altProject: "Projeto catálogo de animes",
      altHtml: "image icon html",
      altCss: "image icon sass",
      altJavaScript: "image icon React",
      nameProject: "Catálogo de animes",
      text: "Desenvolvimento de um catálogo utilizando a KITSU API, que permite a realização da busca dos animes, adicioná-los aos favoritos e a descrição do mesmo.",
    },

    {
      urlProjetc: Pokedex,
      urlIconHtml: HTML,
      urlIconCss: Sass,
      urlIconJavaScript: JavaScript,
      linkProject: "https://gabriel-silva-lacerda.github.io/pokedex/",
      linkRepository: "https://github.com/Gabriel-silva-lacerda/pokedex",
      altProject: "Projeto Pokedex",
      altHtml: "image icon html",
      altCss: "image icon sass",
      altJavaScript: "image icon JavaScript",
      nameProject: "Pokedex",
      text: "Aplicação desenvolvida consumindo a poke API, que retorna detalhes sobre o Pokemon. ",
    },
    {
      urlProjetc: Formulario,
      urlIconHtml: HTML,
      urlIconCss: Sass,
      urlIconJavaScript: JavaScript,
      linkProject: "https://gabriel-silva-lacerda.github.io/formulario/",
      linkRepository: "https://github.com/Gabriel-silva-lacerda/formulario",
      altProject: "Projeto Formulário",
      altHtml: "image icon html",
      altCss: "image icon sass",
      altJavaScript: "image icon JavaScript",
      nameProject: "Formulário",
      text: "Desenvolvimento de um formulário, onde foi colocado em prática meus conhecimentos em validações de inputs.",
    },
    {
      urlProjetc: ListaDeAfazeres,
      urlIconHtml: HTML,
      urlIconCss: Sass,
      urlIconJavaScript: JavaScript,
      linkProject: "https://gabriel-silva-lacerda.github.io/to-do-list/",
      linkRepository: "https://github.com/Gabriel-silva-lacerda/to-do-list",
      altProject: "Projeto to-do list",
      altHtml: "image icon html",
      altCss: "image icon sass",
      altJavaScript: "image icon JavaScript",
      nameProject: "Lista de afazeres",
      text: "Desenvolvimento de uma lista de afazeres. Uma estrutura para poder anotar os seus compromissos.",
    },
    {
      urlProjetc: Bikecraft,
      urlIconHtml: HTML,
      urlIconCss: CSS,
      urlIconJavaScript: JavaScript,
      linkProject: "https://gabriel-silva-lacerda.github.io/bikcraft/",
      linkRepository: "https://github.com/Gabriel-silva-lacerda/bikcraft",
      altProject: "Projeto Bikecraft",
      altHtml: "image icon html",
      altCss: "image icon css",
      altJavaScript: "image icon JavaScript",
      nameProject: "BikeCraft",
      text: "Desenvolvimento de um site relacionados a vendas de bicicletas, onde o mesmo possui links, que descrevem mais sobre os produtos.",
    },
    {
      urlProjetc: Calculadora,
      urlIconHtml: HTML,
      urlIconCss: CSS,
      urlIconJavaScript: JavaScript,
      linkProject: "https://gabriel-silva-lacerda.github.io/calculadora/",
      linkRepository: "https://github.com/Gabriel-silva-lacerda/calculadora",
      altProject: "Projeto Calculadora",
      altHtml: "image icon html",
      altCss: "image icon css",
      altJavaScript: "image icon JavaScript",
      nameProject: "Calculadora",
      text: "Desenvolvimento de uma calculadora, onde a mesma possibilita a realização de cálculos relacionados à Matemática básica como operações da adição, subtração, multiplicação, divisão e raiz quadrada",
    },
  ];

  return (
    <section className="projects-container">
      <div className="projects" id="projects">
        <h1>
          Projetos<span className="point">.</span>
        </h1>
        <ul className="projects-list">
          {informations.map(
            ({
              urlIconHtml,
              urlIconCss,
              urlIconJavaScript,
              urlProjetc,
              nameProject,
              text,
              linkProject,
              linkRepository,
              altProject,
              altHtml,
              altCss,
              altJavaScript,
            }) => (
              <ListProjects
                key={altProject}
                urlProjetc={urlProjetc}
                nameProject={nameProject}
                urlIconHtml={urlIconHtml}
                urlIconCss={urlIconCss}
                urlIconJavaScript={urlIconJavaScript}
                text={text}
                linkProject={linkProject}
                linkRepository={linkRepository}
                altProject={altProject}
                altHtml={altHtml}
                altCss={altCss}
                altJavaScript={altJavaScript}
              />
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
