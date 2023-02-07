import React from 'react'
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";

const HeaderSection = ({ className }) => {
  const [_, i18n] = useTranslation("global");
  const englishIsActive = i18n.resolvedLanguage === "en";

  return (
    <header className={className}>
      <Col className="text-end container">
        <div>
          <span
            className={`${englishIsActive ? "text-muted" : "text-success"} mx-3 cursor-pointer`}
            onClick={() => i18n.changeLanguage("es")}
          >
            ES
          </span>
          <span
            className={`${!englishIsActive ? "text-muted" : "text-success"} mx-2 cursor-pointer`}
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </span>
        </div>
      </Col>
    </header>
  )
}

export default HeaderSection;