// @packages
import React from 'react'
import Typical from "react-typical";
import Container from "react-bootstrap/Container";
import { useTranslation } from "react-i18next";

const IntroSection = () => {
  const [t] = useTranslation("global");

  return (
    <div className="bg-image" id={t("nav.home")}>
      <Container className="d-flex justify-content-between align-items-center h-100">
        <section className="intro text-white">
          <h1 className="intro-title mb-4">{t("title")}</h1>
          <p className="intro-subtitle">
            {t("subtitle")}{" "}
            <Typical
              wrapper="b"
              steps={[
                t("step.item1"),
                2000,
                t("step.item2"),
                2000,
                t("step.item3"),
                2000,
                t("step.item4"),
                2000,
              ]}
            />
          </p>
        </section>
      </Container>
    </div>
  )
}

IntroSection.propTypes = {}

export default IntroSection