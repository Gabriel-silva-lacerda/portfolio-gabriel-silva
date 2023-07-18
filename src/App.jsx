import React from "react";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Knowledge from "./Components/Knowledge";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Theme from "./Components/Functions/Theme";

const App = () => {
  const { handleClick, toglleClassCheck } = Theme();

  return (
    <div
      className={`container ${toglleClassCheck}`}
      style={{ transition: "all .5s" }}
    >
      <Header functionTheme={handleClick} className={toglleClassCheck} />
      <main>
        <HomePage className={toglleClassCheck} />
        <Knowledge className={toglleClassCheck} />
        <Projects className={toglleClassCheck} />
      </main>
      <Footer className={toglleClassCheck} />
    </div>
  );
};

export default App;
