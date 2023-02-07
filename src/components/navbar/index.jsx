import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";

// @scripts
import { convertStringToSlug } from "../../utility/utils";

// @styles
import "../../styles/index.css";

function NavBar() {
  const [isButtonChecked, setIsButtonChecked] = useState(false);
  const [t] = useTranslation("global");
  const [isActiveNav, setIsActiveNav] = useState(t("nav.home").toLowerCase());
  const [navbarBg, setNavbarBg] = useState(false);

  const styles = {
    backgroundColor: isButtonChecked || navbarBg  ? "#e3e3e3" : "",
    color: isButtonChecked || navbarBg ? "#e91e63" : "white",
    transition: "background-color 500ms linear",
    boxShadow: "0px 6px 16px -6px rgba(0,0,0,0.7)",
  }

  const changeBgColor = () => {
    if (window.scrollY >= 60) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  }

  useEffect(() => {
    changeBgColor()
    window.addEventListener("scroll", changeBgColor)
  })

  return (
    <nav id="home" className="fixed-top fw-bold" style={styles}>
      <Container className="d-flex flex-wrap justify-content-between align-items-center">
        <div className="nav-logo">
          <span className="icon-nav">PORTAFOLIO</span>
        </div>
        <input
          type="checkbox"
          onClick={(e) => setIsButtonChecked(e.target.checked)}
          className="menu-btn"
          id="menu-btn"
        />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

        <ul className="d-flex flex-column flex-lg-row justify-content-lg-between list-unstyled text-uppercase fw-bold mb-0">
          <li className="nav-item">
            <a
              href={`${"#"}${convertStringToSlug(t("nav.home"))}`}
              className={`${t("nav.home").toLowerCase() === isActiveNav ? "active" : ""} nav-link d-block py-2`}
              onClick={() => setIsActiveNav(t("nav.home").toLowerCase())}
            >
              {t("nav.home")}
            </a>
          </li>
          <li className="nav-item">
            <a
              href={`${"#"}${convertStringToSlug(t("nav.about"))}`}
              className={`${isActiveNav === t("nav.about").toLowerCase() ? "active" : ""} nav-link d-block py-2`}
              onClick={() => setIsActiveNav(t("nav.about").toLowerCase())}
            >
                {t("nav.about")}
            </a>
          </li>
          <li className="nav-item">
            <a 
              href={`${"#"}${convertStringToSlug(t("nav.experience"))}`}
              className={`${isActiveNav === t("nav.experience").toLowerCase() ? "active" : ""} nav-link d-block py-2`}
              onClick={() => setIsActiveNav(t("nav.experience").toLowerCase())}
            >
              {t("nav.experience")}
            </a>
          </li>
          <li className="nav-item">
            <a 
              href={`${"#"}${convertStringToSlug(t("nav.project"))}`}
              className={`${isActiveNav === t("nav.project").toLowerCase() ? "active" : ""} nav-link d-block py-2`}
              onClick={() => setIsActiveNav(t("nav.project").toLowerCase())}
            >
              {t("nav.project")}
            </a>
          </li>
          <li className="nav-item">
            <a 
              href={`${"#"}${convertStringToSlug(t("nav.education"))}`}
              className={`${isActiveNav === t("nav.education").toLowerCase() ? "active" : ""} nav-link d-block py-2`}
              onClick={() => setIsActiveNav(t("nav.education").toLowerCase())}
            >
                {t("nav.education")}
            </a>
          </li>
          <li className="nav-item">
            <a 
              href={`${"#"}${convertStringToSlug(t("nav.blog"))}`}
              className={`${isActiveNav === t("nav.blog").toLowerCase() ? "active" : ""} nav-link d-block py-2`}
              onClick={() => setIsActiveNav(t("nav.blog").toLowerCase())}
            >
              {t("nav.blog")}
            </a>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

NavBar.propTypes = {};

export default NavBar;
