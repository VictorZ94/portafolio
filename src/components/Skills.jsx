import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';

// @icons
import HtmlIcon from "../assets/icons/html5-icon.svg"
import CssIcon from "../assets/icons/css3-icon.svg"
import ReactIcon from "../assets/icons/reactjs-icon.svg"
import JsIcon from "../assets/icons/js-icon.svg"
import PythonIcon from "../assets/icons/python-icon.svg"
import MongoIcon from "../assets/icons/mongodb-icon.svg"
import DjangoIcon from "../assets/icons/django-icon.svg"
import ApiIcon from "../assets/icons/api-icon.png"
import JsonIcon from "../assets/icons/json-icon.svg"
import GrapqhqlIcon from "../assets/icons/graphql-icon.svg"


const Skills = () => {
  const [t] = useTranslation("global");

  return (
    <section id={t("nav.skills").toLowerCase()}>
      <Container className='mt-5 text-center'>
        <h5 className="title">
          <span className='color-primary'>My{" "}</span>
            {t("nav.skills")}
        </h5>
        <p>
          <span className="position-relative fw-light">tech stack</span>
        </p>
        <Row>
          <Col sm={12} lg={6} className="my-3">
            <h5>Frontend development</h5>
            <div>
              <span>
                <img src={HtmlIcon} alt="Html5 icon" width={48}/>
              </span>
              <span>
                <img src={CssIcon} alt="Html5 icon" width={48}/>
              </span>
              <span>
                <img src={ReactIcon} alt="Html5 icon" width={48}/>
              </span>
              <span>
                <img src={JsIcon} alt="Html5 icon" width={48}/>
              </span>
            </div>
          </Col>
          <Col sm={12} lg={6} className="my-3">
            <h5>Back-end development</h5>
            <div>
              <span>
                <img src={PythonIcon} alt="Html5 icon" width={48}/>
              </span>
              <span>
                <img src={DjangoIcon} alt="Html5 icon" width={48}/>
              </span>
              <span>
                <img src={MongoIcon} alt="Html5 icon" width={48}/>
              </span>
              <span>
                <img src={ApiIcon} alt="Html5 icon" width={48}/>
              </span>
              <span>
                <img src={JsonIcon} alt="Html5 icon" width={48}/>
              </span>
              <span>
                <img src={GrapqhqlIcon} alt="Html5 icon" width={98}/>
              </span>
            </div>
          </Col>
        </Row>
        <p className='my-2 text-secondary'>I'm willing to learn other skills as required.</p>
      </Container>
    </section>
  )
}

export default Skills