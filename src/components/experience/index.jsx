import React from 'react'
import { useTranslation } from "react-i18next";

// @styles
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Briefcase, Star } from 'react-feather';

const ExperienceSection = () => {
  const [t] = useTranslation("global");

  const iconStyledComponent = {
    background: "#e91e63",
    color: '#fff'
  }

  return (
    <section className="mt-5 text-center" id="experience">
      <h5 className="title">
        <span className="position-relative">
          {t("nav.experience")}
        </span>
      </h5>
      <div className="pt-4">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="text-white"
            contentStyle={{ background: "#e91e63"}}
            contentArrowStyle={{ borderRight: '7px solid  #e91e63' }}
            date="Enero 2022 - Enero 2023"
            dateClassName='text-muted text-start'
            iconStyle={iconStyledComponent}
            icon={<Briefcase />}
          >
            <h3 className="vertical-timeline-element-title">Desarrollador React</h3>
            <h4 className="vertical-timeline-element-subtitle">TeamClass</h4>
            <p className='pb-4'>Escribí código que impactaba directamente producción usando React para las web de uso interno y Nextjs para la web principal.</p>
            <ul className="text-start">
              <li>Apoyé el desarrollo y mejoras de la interface de usuario (UI) de las páginas web internas con React y la web principal con Nextjs.</li>
              <li>Implementé nuevos formularios para el ingreso de datos claves del negocio, permitiendo su visualización, eliminación y actualización. usando Apollo Client y GraphQL</li>
              <li>Refactoricé, mejoré, probé e implementé código en la web usando el patrón de arquitectura diseño átomico estructurando componentes en React.</li>
              <li>Consumir RestAPI para diseñar e implementar el proceso de validación de direcciones en EEUU e Internacionales, mejorando sustacialmente los envíos de los kits.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="Octubre 2021 - Diciembre 2021"
            iconStyle={iconStyledComponent}
            icon={<Briefcase />}
          >
            <h3 className="vertical-timeline-element-title">Desarrollador Back-end</h3>
            <h4 className="vertical-timeline-element-subtitle">Roiback - Medellín, CO</h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<Briefcase />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
            <p>
              User Experience, Visual Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<Star />}
          />
        </VerticalTimeline>
      </div>
    </section>
  )
}

ExperienceSection.propTypes = {}

export default ExperienceSection