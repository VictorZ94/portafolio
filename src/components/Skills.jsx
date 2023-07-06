import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import iconSkills from "../data/skills.js"

const Skills = () => {
  const [t] = useTranslation("global");
  const [skills, setSkills] = useState("all");
  const [filteredSkills, setFilteredSkills] = useState([]);

  useEffect(() => {
    if (skills !== "all") {
      setFilteredSkills(iconSkills.filter(item => item.target.includes(skills)))
    } else {
      setFilteredSkills(iconSkills)
    }
  }, [skills]) 

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
          <Col>
              <Button
                onClick={() => setSkills("all")}
                className='my-2 me-3 outline-custom'>
                  All
              </Button>
              <Button
                onClick={() => setSkills("back-end")}
                className='my-2 me-3 outline-custom'>
                  Backend
              </Button>
              <Button
                onClick={() => setSkills("front-end")}
                className='outline-custom'>
                  Frontend
              </Button>
          </Col>
        </Row>
        <Row className='mt-5'>
          {filteredSkills.sort((a, b) => a.order - b.order).map(icon => (
            <Col key={icon.alt} md={6} lg={4} xl={3} className='p-5 table-color'>
              <div className='icon-skill'>
                <img src={icon.image} alt={icon.alt} height={icon.height}/>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Skills