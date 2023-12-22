import React from "react";

export const ExperienceList = ({
  company,
  position,
  date,
  description,
  isSelected,
  onClick,
}) => {
  return (
    <>
      <div
        className={`experiences-name ${isSelected ? "show" : "hide"}`}
        onClick={onClick}
      >
        <div className="developer-container">
          <span>{position}</span>
          <span className="year">{date}</span>
        </div>
        <div className="developer-description">
          <span>{company}</span>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};
