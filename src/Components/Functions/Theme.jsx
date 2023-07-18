import React, { useState } from "react";

const Theme = () => {
  const [btnState, setBtnState] = useState(false);

  const handleClick = () => {
    setBtnState((btnState) => !btnState);
  };

  let toglleClassCheck = !btnState ? "ligth" : "dark";
  return { btnState, handleClick, toglleClassCheck };
};

export default Theme;
