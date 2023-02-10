import React from 'react'
import { useTranslation } from "react-i18next";

// @styles
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Briefcase, Star } from 'react-feather';

const EducationComponent = () => {
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
            // className="text-white"
            // contentArrowStyle={{ borderRight: '7px solid  #e91e63' }}
            date="Enero 2022 - Enero 2023"
            dateClassName='text-muted text-start'
            iconStyle={iconStyledComponent}
            icon={<Briefcase />}
          >
            <h3 className="vertical-timeline-element-title">Desarrollador React</h3>
            <h4 className="vertical-timeline-element-subtitle">TeamClass</h4>
            <p className='pb-4'>Escribí código que impactaba directamente producción usando React para las web de uso interno y Nextjs para la web principal.</p>
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
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<Star />}
          />
        </VerticalTimeline>
      </div>
    </section>
  )
}

EducationComponent.propTypes = {}

export default EducationComponent;