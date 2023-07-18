import React from "react";
import "../styles/Main/Projects.scss";
import "../styles/Main/ProjectsDark.scss";
import "../styles/Main/Responsive/ProjectsResponsive.scss";

import ListProjects from "./ReusedComponents/ListProjects";

const Projects = () => {
  const informations = [
    {
      urlProjetc: "src/assets/bikecraft.png",
      urlIconHtml: "src/assets/logo-html.png",
      urlIconCss: "src/assets/css-3.svg",
      urlIconJavaScript: "src/assets/logo-javascript.webp",
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
      urlProjetc: "src/assets/pokedex.png",
      urlIconHtml: "src/assets/logo-html.png",
      urlIconCss: "src/assets/logo-sass.webp",
      urlIconJavaScript: "src/assets/free-javascript.webp",
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
      urlProjetc: "src/assets/formulario.png",
      urlIconHtml: "src/assets/logo-html.png",
      urlIconCss: "src/assets/logo-sass.webp",
      urlIconJavaScript: "src/assets/free-javascript.webp",
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
      urlProjetc: "src/assets/todolist.png",
      urlIconHtml: "src/assets/logo-html.png",
      urlIconCss: "src/assets/logo-sass.webp",
      urlIconJavaScript: "src/assets/free-javascript.webp",
      linkProject: "https://gabriel-silva-lacerda.github.io/to-do-list/",
      linkRepository: "https://github.com/Gabriel-silva-lacerda/to-do-list",
      altProject: "Projeto to-do list",
      altHtml: "image icon html",
      altCss: "image icon sass",
      altJavaScript: "image icon JavaScript",
      nameProject: "Lista de afazeres",
      text: "Desenvolvimento de uma lista de afazeres. Uma estrutura para poder anotar os seus compromissos.",
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
