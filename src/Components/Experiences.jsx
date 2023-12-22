import React, { useState } from "react";
import "../styles/Main/Experiences.scss";
import "../styles/Main/ExperiencesDark.scss";
import "../styles/Main/Responsive/ExperiencesResponsive.scss";
import { experiencesData } from "../MetaData/experiencesData";
import { ExperienceList } from "./ReusedComponents/ExperinceList";

const Experiences = () => {
  const [selectedCompany, setSelectedCompany] = useState(0);

  const handleCompanyClick = (index) => {
    setSelectedCompany(index);
  };

  return (
    <section className="experiences-container" id="experiences">
      <div>
        <h2>
          Experiências<span className="point">.</span>
        </h2>
        <div className="experiences">
          <ul>
            {experiencesData.map((experience, index) => (
              <li
                key={index}
                onClick={() => handleCompanyClick(index)}
                className={selectedCompany === index ? "selected" : ""}
              >
                {experience.company}
              </li>
            ))}
          </ul>
          {experiencesData.map((experience, index) => (
            <ExperienceList
              key={index}
              onClick={() => handleCompanyClick(index)}
              isSelected={selectedCompany === index}
              {...experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
