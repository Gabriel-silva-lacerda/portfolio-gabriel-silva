import React from "react";
import "../styles/Main/Knowledge.scss";
import "../styles/Main/KnowledgeDark.scss";
import "../styles/Main/Responsive/KnowledgeResponsive.scss";
import List from "./ReusedComponents/ListKnowledge";
import HTML from "../assets/logo-html.png";
import CSS from "../assets/css-3.svg";
import JavaScript from "../assets/logo-javascript.webp";
import ReactIcon from "../assets/react.png";
import TypeScriptIcon from "../assets/logo-typescript.png";
import TypeScriptReactIcon from "../assets/logo-typescript-react.png";
import WordpressIcon from "../assets/icone-wordpress.png";
import Sass from "../assets/logo-sass.webp";
import Git from "../assets/Git_icon.svg.png";

const Knowledge = () => {
  const icons = [
    {
      text: "HTML",
      url: HTML,
      ulrCertificate: "https://www.origamid.com/certificate/198d719b",
      alt: "image icon html",
      certificate: "Certificado | HTML",
    },
    {
      text: "CSS",
      url: CSS,
      ulrCertificate: "https://www.origamid.com/certificate/3287d4d4",
      alt: "image icon css",
      certificate: "Certificado | CSS",
    },
    {
      text: "JavaScript",
      url: JavaScript,
      ulrCertificate: "https://www.origamid.com/certificate/c08a42c9",
      alt: "image icon JavaScript",
      certificate: "Certificado | JavaScript",
    },
    {
      text: "React",
      url: ReactIcon,
      ulrCertificate: "https://www.origamid.com/certificate/de30adfb",
      alt: "image icon react",
      certificate: "Certificado | React",
    },
    {
      text: "Typescript",
      url: TypeScriptIcon,
      ulrCertificate: "https://www.origamid.com/certificate/96a1bd58",
      alt: "image icon typescript",
      certificate: "Certificado | Typescript",
    },
    {
      text: "TSX",
      url: TypeScriptReactIcon,
      ulrCertificate: "https://www.origamid.com/certificate/a0b382c2",
      alt: "image icon typescript com react",
      certificate: "Certificado | TSX",
    },
    {
      text: "Wordpress",
      url: WordpressIcon,
      ulrCertificate: "https://www.origamid.com/certificate/94924248",
      alt: "image icon typescript",
      certificate: "Certificado | Wordpress",
    },
    {
      text: "Sass",
      url: Sass,
      ulrCertificate: "https://www.origamid.com/certificate/1297790c",
      alt: "image icon sass",
      certificate: "Certificado | Sass",
    },
    {
      text: "Git",
      url: Git,
      ulrCertificate: "",
      alt: "Image icon git",
      certificate: "Certificado | Git",
    },
  ];
  return (
    <section className="knowledge" id="knowledge">
      <div className="knowledge-container">
        <h2>
          Conhecimentos<span className="point">.</span>
        </h2>
        <ul className="list-knowledge">
          {icons.map(({ url, text, certificate, alt, ulrCertificate }) => (
            <List
              key={text}
              url={url}
              text={text}
              certificate={certificate}
              alt={alt}
              ulrCertificate={ulrCertificate}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Knowledge;
