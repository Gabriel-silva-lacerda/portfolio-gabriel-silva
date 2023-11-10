import React from "react";
import "../styles/Main/Experiences.scss";
import "../styles/Main/ExperiencesDark.scss";
import "../styles/Main/Responsive/ExperiencesResponsive.scss";

const Experiences = () => {
  return (
    <section className="experiences-container" id="experiences">
      <div>
        <h2>
          Experiências<span className="point">.</span>
        </h2>
        <div className="experiences">
          <div className="experiences-name">
            <div>
              <span>Desenvolvedor Front-end.</span>
              <span>Empresa: Nambbu</span>
            </div>
            <span className="year">Set 2023 - Atualmente</span>
          </div>
          <p>
            Desenvolvimento de sites com tecnologias como: Wordpress, Elementor,
            Oxygen, HTML, CSS, JavaScript, PHP, ReactJS, Typescript e NextJS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
