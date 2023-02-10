import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container';
import { useTranslation } from "react-i18next";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, Search } from 'react-feather';
import image1 from "../../assets/intro-bg-primary.jpg"
import image2 from "../../assets/intro-bg.jpg"
import image3 from "../../assets/intro-bg2.jpg"

const PortafolioSection = () => {
  const [t] = useTranslation("global");

  return (
    <section className="bg-white mt-2 pt-2" id={t("nav.project").toLowerCase()}>
      <Container className='mt-5 text-center'>
        <h5 className="title">{t("nav.project")}</h5>
        <p>
          <span className="position-relative fw-light">Mis proyectos destacados</span>
        </p>
        <div className="projects mt-5">
          <div className="single-project">
            <img src={image1} alt="First project" width={280} height={350}/>
            <div className="project-body">
              <h2>Project description</h2>
              <p>Project front-end</p>
              <p>
                <a href="#">
                  <Search  color="white" width={18}/>
                </a>
                <a href="#">
                  <Link color="white" width={18}/>
                </a>
              </p>
            </div>
          </div>
          <div className="single-project">
            <img src={image2} alt="First project"  width={280} height={350}/>
            <div className="project-body">
              <h2>Project description</h2>
              <p>Project front-end</p>
              <p>
                <a href="#" color='#FFF'>
                  <Search color="white" width={18}/>
                </a>
                <a href="#">
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