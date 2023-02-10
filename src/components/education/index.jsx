import React from 'react'
import { useTranslation } from "react-i18next";

// @styles
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { BookOpen, Star } from 'react-feather';


const EducationComponent = () => {
  const [t] = useTranslation("global");

  const iconStyledComponent = {
    background: "#e91e63",
    color: '#fff'
  }

  return (
    <section className="mt-5 text-center" id={t("nav.education").toLowerCase()}>
      <h5 className="title">
        <span className="position-relative">
          {t("nav.education")}
        </span>
      </h5>
      {/* <img src={ReactIcon} alt="" /> */}
      <div className="pt-4">
        <VerticalTimeline>
          <VerticalTimelineElement
            date="Enero 2022 - Enero 2023"
            dateClassName='text-muted text-start'
            iconStyle={iconStyledComponent}
            icon={<BookOpen /> }
          >
            <h3 className="vertical-timeline-element-title">Desarrollador de software</h3>
            <h4 className="vertical-timeline-element-subtitle fw-light">Holberton School</h4>
            <p className='pb-4'>C, Python, Javascript, Bash, Linux.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="Octubre 2021 - Diciembre 2021"
            iconStyle={iconStyledComponent}
            icon={<BookOpen />}
          >
            <h3 className="vertical-timeline-element-title">Contador público</h3>
            <h4 className="vertical-timeline-element-subtitle fw-light">Corporación universitaria americana</h4>
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