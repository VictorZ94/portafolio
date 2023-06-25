import React from 'react'
import Container from 'react-bootstrap/Container';
import { useTranslation } from "react-i18next";
import { Link, Search } from 'react-feather';
import previewSmilingSchool from "../assets/preview-smiling-school.png"
import previewMoviesSeach from "../assets/buscador-pelis.png"
import image3 from "../assets/intro-bg2.jpg"

const PortafolioSection = () => {
  const [t] = useTranslation("global");

  return (
    <section className="mt-2 pt-2" id={t("nav.project").toLowerCase()}>
      <Container className='mt-5 text-center'>
        <h5 className="title"><span className='color-primary'>My{" "}</span> {t("nav.project")}</h5>
        <p>
          <span className="position-relative fw-light">featured projects</span>
        </p>
        <div className="projects mt-5">
          <div className="single-project">
            <img src={previewSmilingSchool} alt="First project" width={280} height={350}/>
            <div className="project-body">
              <h2>Smiling School</h2>
              <p>Front-end project</p>
              <p>
                <a
                  href="https://github.com/VictorZ94/holberton-smiling-school-javascript"
                  target="_blank"
                  rel="noreferrer"
                  title="Repositorio"
                >
                  <Search  color="white" width={18}/>
                </a>
                <a
                  href="https://victorz94.github.io/holberton-smiling-school-javascript/homepage.html"
                  target="_blank"
                  rel="noreferrer"
                  title="Smiling School website"
                >
                  <Link color="white" width={18}/>
                </a>
              </p>
            </div>
          </div>
          <div className="single-project">
            <img src={previewMoviesSeach} alt="First project"  width={280} height={350}/>
            <div className="project-body">
              <h2>Movies search</h2>
              <p>React frontend project</p>
              <p>
                <a 
                  href="https://github.com/VictorZ94/platzi-student-coding/tree/main/05-buscador-peliculas"
                  target="_blank"
                  rel="noreferrer"
                  title="Github link"
                >
                  <Search color="white" width={18}/>
                </a>
                <a 
                  href="https://645826179d0f6734c31f2315--chipper-cupcake-8c3780.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  title="Movies search"
                >
                  <Link color="white" width={18}/>
                </a>
              </p>
            </div>
          </div>
          <div className="single-project">
            <img src={image3} alt="First project"  width={280} height={350}/>
            <div className="project-body">
              <h2>Project description</h2>
              <p>Project front-end</p>
              <p>
                <a href="#">
                  <Search color="white" width={18}/>
                </a>
                <a href="#">
                  <Link color="white" width={18}/>
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

PortafolioSection.propTypes = {}

export default PortafolioSection