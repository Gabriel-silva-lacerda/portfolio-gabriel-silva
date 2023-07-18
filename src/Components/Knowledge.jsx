import React from "react";
import "../styles/Main/Knowledge.scss";
import "../styles/Main/KnowledgeDark.scss";
import "../styles/Main/Responsive/KnowledgeResponsive.scss";
import List from "./ReusedComponents/ListKnowledge";

const Knowledge = () => {
  const icons = [
    {
      text: "HTML",
      url: "src/assets/logo-html.png",
      ulrCertificate: "https://www.origamid.com/certificate/198d719b",
      alt: "image icon html",
      certificate: "Certificado | HTML",
    },
    {
      text: "CSS",
      url: "src/assets/css-3.svg",
      ulrCertificate: "https://www.origamid.com/certificate/3287d4d4",
      alt: "image icon css",
      certificate: "Certificado | CSS",
    },
    {
      text: "JavaScript",
      url: "src/assets/logo-javascript.webp",
      ulrCertificate: "https://www.origamid.com/certificate/c08a42c9",
      alt: "image icon JavaScript",
      certificate: "Certificado | JavaScript",
    },
    {
      text: "React",
      url: "src/assets/react.png",
      ulrCertificate: "https://www.origamid.com/certificate/de30adfb",
      alt: "image icon react",
      certificate: "Certificado | React",
    },
    {
      text: "Sass",
      url: "src/assets/logo-sass.webp",
      ulrCertificate: "",
      alt: "image icon sass",
      certificate: "Certificado | Sass",
    },
    {
      text: "Git",
      url: "src/assets/Git_icon.svg.png",
      ulrCertificate: "",
      alt: "Image icon git",
      certificate: "Certificado | Git",
    },
  ];
  return (
    <section className="knowledge" id="knowledge">
      <div className="knowledge-container">
        <ul className="list-knowledge">
          {icons.map(
            ({ url, text, certificate, alt, ulrCertificate }) => (
              <List
                key={text}
                url={url}
                text={text}
                certificate={certificate}
                alt={alt}
                ulrCertificate={ulrCertificate}
              />
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default Knowledge;
