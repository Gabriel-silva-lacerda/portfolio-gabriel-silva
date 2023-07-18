import React from "react";

const List = ({
  url,
  text,
  certificate,
  alt,
  ulrCertificate,
}) => {

  return (
    <li>
      <div className="skills">
        <p>{text}</p>

        <img className="html" src={url} alt={alt} />
      </div>

      {ulrCertificate ? (
        <button className="certificate">
          <a target="blank" href={ulrCertificate}>
            {certificate}
          </a>
        </button>
      ) : (
        <button className="certificate" disabled style={{ pointerEvents: "none"}} >
          <a
            className="d"
            target="blank"
            href="/"
            style={{ pointerEvents: "none", color: "#a09d9d", fontWeight: "normal" }}
          >
            {certificate}
          </a>
        </button>
      )}
    </li>
  );
};

export default List;
