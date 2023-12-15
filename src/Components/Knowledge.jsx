import React from "react";
import "../styles/Main/Knowledge.scss";
import "../styles/Main/KnowledgeDark.scss";
import "../styles/Main/Responsive/KnowledgeResponsive.scss";
import List from "./ReusedComponents/ListKnowledge";
import { icons } from "../MetaData/iconData";

const Knowledge = () => {
  return (
    <section className="knowledge" id="knowledge">
      <div className="knowledge-container">
        <h2>
          Conhecimentos<span className="point">.</span>
        </h2>
        <ul className="list-knowledge">
          {icons.map((props, index) => (
            <List key={index} {...props} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Knowledge;
