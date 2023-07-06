// @packages
import React from 'react'
import { useTranslation } from "react-i18next";
import { convertStringToSlug } from '../utility/utils';
import Container from 'react-bootstrap/Container';

const AboutSection = () => {
  const [t] = useTranslation("global");

  return (
    <section className="my-5 text-center" id={convertStringToSlug(t("nav.about"))}>
      <Container className='shadow p-5'>
        <h5 className="title">
          <span className='color-primary'>
            {t("nav.about")}{" "}
          </span> 
          me
        </h5>
        <p>
          <span className="position-relative fw-light">a brief intro about me</span>
        </p>
        <div className="description px-2 pt-4 px-md-5">
          <p>I'm a web developer, with experience turning ideas into functional web products. I have been seasoned working with Python and Django in Back-end alongside with React and Javascript in Front-end</p>
          <p>I have worked for several startups, always maintaining as a priority the idea that it is better to do things well than to do them perfect. I love to work iteratively, constantly improving the product through feedback and new ideas.</p>
          <p>If you need help in the development of your web project, I will be happy to work with you and help you bring your ideas to reality.</p>
        </div>
      </Container>
    </section>
  );
};

AboutSection.propTypes = {};

export default AboutSection;
