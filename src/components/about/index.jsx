// @packages
import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from "react-i18next";
import { convertStringToSlug } from '../../utility/utils';
import { Container } from 'react-bootstrap';

const AboutSection = () => {
  const [t] = useTranslation("global");

  return (
    <section className="mt-5 mt-lg-2 text-center" id={convertStringToSlug(t("nav.about"))}>
      <Container className='bg-white shadow p-5'>
        <h5 className="title">
          <span className="position-relative">
            {t("nav.about")}
          </span>
        </h5>
        <div className="description px-2 pt-4 px-md-5">
          <p>Desarrollador front-end con Javacript/React tengo apróxidamente año y medio de experiencia usando React y su framework Nextjs. Cuento conocimiento en back-end con Python/Django y FastAPI, consultas en base de datos SQL (Postgresql/MySQL) y NoSQL (MongoDB), Uso las distribuciones de Linux OS (Ubuntu, Manjaro) como mis favoritas. También cuento con un backgroud en contabilidad y finanzas. He escrito código en lenguajes de programación tipados como C/C++ y no tipados como Python y Javascript.</p>
          <p>Me considero miembro del club de las 5:00 AM. Desde el 2022 vengo aplicando las técnicas para máximizar mi enfoque y volverme más productivo, despertando al alba determino como será el resto de mi día</p>
          <p>Con los conocimiento que he adquirido, ayudo a transformar interfaces de usuario (UI) en productos funcionales, creando web optimizadas, escalables y con las mejores prácticas recomendadas de Experiencia de Usuario (UX). Me encanta el trabajo por objetivos y la colaboración entre equipos.
          </p>
        </div>
      </Container>
    </section>
  );
};

AboutSection.propTypes = {};

export default AboutSection;
