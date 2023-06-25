// @packages
import React from "react";

// @components
import AboutSection from "./components/About";
import NavBar from "./components/Navbar";
import IntroSection from "./components/Intro";
import PortafolioSection from "./components/Portafolio";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import BlogSection from "./components/Blog";

const App = () => {

  return (
    <>
      <IntroSection />
      <NavBar />
      <AboutSection />
      <PortafolioSection />
      <Skills />
      <BlogSection />
      <Footer></Footer>
    </>
  );
}

export default App;
