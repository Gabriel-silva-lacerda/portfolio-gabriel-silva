import React from "react";

const ListProjects = ({
  urlProjetc,
  nameProject,
  urlIconHtml,
  urlIconCss,
  urlIconJavaScript,
  urlIconTypescript,
  urlIconReactQuery,
  urlIconAxios,
  text,
  linkProject,
  linkRepository,
  altProject,
  altHtml,
  altCss,
  altJavaScript,
  altIconTypescript,
  altReactQuery,
  altIconAxios,
}) => {
  return (
    <li className="list-projects">
      <a href={linkProject} target="blank">
        <img className="img-project" src={urlProjetc} alt={altProject} />
      </a>
      <div className="projects-especification">
        <span className="name-project">{nameProject}</span>
        <ul className="img-projects">
          {urlIconHtml && (
            <li>
              <img src={urlIconHtml} alt={altHtml} />
            </li>
          )}
          {urlIconTypescript && (
            <li>
              <img src={urlIconTypescript} alt={altIconTypescript} />
            </li>
          )}
          <li>
            <img src={urlIconCss} alt={altCss} />
          </li>
          {urlIconAxios && (
            <li>
              <img src={urlIconAxios} alt={altIconAxios} />
            </li>
          )}
          {urlIconReactQuery && (
            <li>
              <img src={urlIconReactQuery} alt={altReactQuery} />
            </li>
          )}
          <li>
            <img src={urlIconJavaScript} alt={altJavaScript} />
          </li>
        </ul>
      </div>
      <div className="project-description">
        <span>{text}</span>
      </div>
      <div className="view-more">
        <a className="link" href={linkProject} target="blank">
          Projeto
        </a>
        <a className="link" href={linkRepository} target="blank">
          Repositório
        </a>
      </div>
    </li>
  );
};

export default ListProjects;
