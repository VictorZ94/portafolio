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
    <section className="mt-5 text-center" id={t("nav.experience").toLowerCase()}>
      <h5 className="title">{t("nav.experience")}</h5>
      <p>
        <span className="position-relative fw-light">Mi previa experiencia laboral</span>
      </p>
      <div className="pt-4">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="text-start"
            date="Enero 2022 - Enero 2023"
            dateClassName='text-muted text-start'
            iconStyle={iconStyledComponent}
            contentStyle={{ borderTop: "3px solid #e91e63" }}
            icon={<Briefcase />}
          >
            <h3 className="vertical-timeline-element-title">Desarrollador React</h3>
            <h4 className="vertical-timeline-element-subtitle fw-light">TeamClass, (Remoto)</h4>
            <p className='pb-4'>
              Principalmente usé React y su framework Nextjs, para mejorar las interfaces de usuario de la páginas web.
              También brindé soporte para resolver bugs y mejoras a las mismas.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="text-start"
            date="Octubre 2021 - Diciembre 2021"
            contentStyle={{ borderTop: "3px solid #e91e63" }}
            iconStyle={iconStyledComponent}
            icon={<Briefcase />}
          >
            <h3 className="vertical-timeline-element-title">Desarrollador Back-end</h3>
            <h4 className="vertical-timeline-element-subtitle fw-light">Roiback, (Híbrido) - Medellín, CO</h4>
            <p>
              Brindar soporte de los bugs en la web basadas en el framework de Python, Django.
              creación de páginas web requeridas por los clientes.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="text-start"
            date="Enero 2021 - Marzo 2021"
            contentStyle={{ borderTop: "3px solid #e91e63" }}
            iconStyle={iconStyledComponent}
            icon={<Briefcase />}
          >
            <h3 className="vertical-timeline-element-title">Desarrollador Full-stack</h3>
            <h4 className="vertical-timeline-element-subtitle fw-light">Tributi, (Remoto)</h4>
            <p>
              Participé en el proceso de extracción de data de una hoja de calculo en excel usando la librería openpyxl de python
              y en el frontend apoyé la programación de la interface con React.
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