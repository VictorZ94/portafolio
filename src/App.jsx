// @packages
import React from "react";

// @components
import AboutSection from "./components/about";
import ExperienceSection from "./components/experience";
import NavBar from "./components/navbar";
import IntroSection from "./components/intro";
import PortafolioSection from "./components/portafolio";
import EducationComponent from "./components/education";

const App = () => {

  return (
    <>
      <NavBar />
      <IntroSection />
      <main>
        <AboutSection />
      </main>
      <ExperienceSection />
      <PortafolioSection />
      <EducationComponent />
    </>
  );
}

export default App;
