// @packages
import React from "react";

// @components
import AboutSection from "./components/about";
import ExperienceSection from "./components/experience";
import NavBar from "./components/navbar";
import IntroSection from "./components/intro";

const App = () => {

  return (
    <>
      <NavBar />
      <IntroSection />
      <main>
        <AboutSection />
      </main>
      <ExperienceSection />
    </>
  );
}

export default App;
