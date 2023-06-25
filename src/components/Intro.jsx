// @packages
import React from 'react'
import Container from "react-bootstrap/Container";
import { useTranslation } from "react-i18next";
import SocialMedia from './Social';

const IntroSection = () => {
  const [t] = useTranslation("global");

  return (
    <section className="bg-image active" id={t("nav.home").toLowerCase()}>
      <Container>
        <SocialMedia />
      </Container>
      <Container className="d-flex justify-content-between align-items-center h-100">
        <section className="intro text-white">
          <p className='mb-0 intro-subtitle'>Hello, I'm</p>
          <h1 className="intro-title">{t("title")}</h1>
          <p className='intro-desc'>Web Developer | Front-end developer React</p>
        </section>
      </Container>
    </section>
  )
}

IntroSection.propTypes = {}

export default IntroSection;
