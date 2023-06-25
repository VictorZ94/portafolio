import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";

// @scripts
import { convertStringToSlug } from "../utility/utils";
import Avatar from "../assets/avatar.jpg";

// @styles
import "../styles/index.css";

function NavBar() {
  const [isButtonChecked, setIsButtonChecked] = useState(false);
  const [t] = useTranslation("global");
  const [isActiveNav, setIsActiveNav] = useState(
    window.location.hash.split("#")[1] || t("nav.home").toLowerCase()
  );
  const [showImage, setShowImage] = useState(false);
  const navRef = useRef();

  const changeImgBrand = () => {
    if (window.scrollY > 450) {
      setShowImage(true);
    } else {
      setShowImage(false);
    }
  }

  useEffect(() => {
    changeImgBrand()
    window.addEventListener("scroll", changeImgBrand)
  })

  const section = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav .nav-item a');

  window.onscroll = () => {
    section.forEach(sec => {
      let myTop = window.scrollY;
      let offset = sec.offsetTop - 100;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (myTop >= offset && myTop < (offset + height)) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('nav .nav-item a[href*=' + id + ']').classList.add('active')
        })
      }
    })
  }

  return (
    <nav id="home" className="bg-white shadow-sm sticky-top" ref={navRef}>
      <Container className="d-lg-flex text-end pr-3 justify-content-lg-between align-items-center position-relative">
        <input
          type="checkbox"
          onClick={(e) => setIsButtonChecked(e.target.checked)}
          className="menu-btn"
          id="menu-btn"
        />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

        <ul className="d-flex flex-column flex-lg-row justify-content-lg-between list-unstyled fw-bold mb-0">
          <li className="nav-item">
            <a
              href={`${"#"}${convertStringToSlug(t("nav.home"))}`}
              className={`nav-link d-block py-2 active`}
            >
              {t("nav.home")}
            </a>
          </li>
          <li className="nav-item">
            <a
              href={`${"#"}${convertStringToSlug(t("nav.about"))}`}
              className={`nav-link d-block py-2`}
            >
              {t("nav.about")}
            </a>
          </li>
        </ul>
        {!isButtonChecked && (
          <ul className="d-flex flex-column flex-lg-row justify-content-lg-between list-unstyled fw-bold mb-0">
            {showImage ? (
              <li className="nav-brand text-center animate__animated animate__fadeInDown">
                <h6 className="mb-0 fw-light">Víctor Zuluaga</h6>
                <p className="mb-0 text-muted">Software Developer</p>
              </li>
            ) : (
              <li className="nav-item-img animate__animated animate__fadeInUp">
                <img src={Avatar} alt="Victor Zuluaga avatar" width={170} height={170} className="img-avatar" />
              </li>
            )}

          </ul>
        )}
        <ul className="d-flex flex-column flex-lg-row justify-content-lg-between list-unstyled fw-bold mb-0">
          <li className="nav-item">
            <a 
              href={`${"#"}${convertStringToSlug(t("nav.project"))}`}
              className={`nav-link d-block py-2`}
            >
              {t("nav.project")}
            </a>
          </li>
          <li className="nav-item">
            <a 
              href={`${"#"}${convertStringToSlug(t("nav.skills"))}`}
              className={`nav-link d-block py-2`}
            >
              {t("nav.skills")}
            </a>
          </li>
          <li className="nav-item">
            <a 
              href={`${"#"}${convertStringToSlug(t("nav.blog"))}`}
              className={`nav-link d-block py-2`}
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
