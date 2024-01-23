import Container from "react-bootstrap/Container";
import { useTranslation } from "react-i18next";
import { Link, Search } from "react-feather";
import previewSmilingSchool from "../assets/preview-smiling-school.png";
import previewMoviesSeach from "../assets/buscador-pelis.png";
import Wallet from "../assets/wallet.png";
import Indicadores from "../assets/indicadoresco.png";

const PortafolioSection = () => {
  const [t] = useTranslation("global");

  return (
    <section className="mt-2 pt-2" id={t("nav.project").toLowerCase()}>
      <Container className="mt-5 text-center">
        <h5 className="title">
          <span className="color-primary">My </span> {t("nav.project")}
        </h5>
        <p>
          <span className="position-relative fw-light">featured projects</span>
        </p>
        <div className="projects mt-5">
          <div className="single-project">
            <img
              src={Indicadores}
              alt="First project"
              width={280}
              height={350}
            />
            <div className="project-body">
              <h2>Indicadores Colombia</h2>
              <p>Indicadores colombianos más importantes</p>
              <p>
                <a
                  href="https://github.com/VictorZ94/IndicadoresCO"
                  target="_blank"
                  rel="noreferrer"
                  title="Github link - Indicadores Colombia"
                >
                  <Search color="white" width={18} />
                </a>
                <a
                  href="https://indicadoresco-65f4c3b60b35.herokuapp.com/docs/"
                  target="_blank"
                  rel="noreferrer"
                  title="Indicadores Colombia"
                >
                  <Link color="white" width={18} />
                </a>
              </p>
            </div>
          </div>
          <div className="single-project">
            <img src={Wallet} alt="First project" width={280} height={350} />
            <div className="project-body">
              <h2>Digital wallet</h2>
              <p>Django Backend & React Frontend</p>
              <p>
                <a
                  href="https://github.com/No-Country/c13-30-t-python"
                  target="_blank"
                  rel="noreferrer"
                  title="Github link - Chat mock ChatGPT"
                >
                  <Search color="white" width={18} />
                </a>
                <a
                  href="https://digital-wallet.victorzuluaga.com/"
                  target="_blank"
                  rel="noreferrer"
                  title="Chat mock ChatGPT"
                >
                  <Link color="white" width={18} />
                </a>
              </p>
            </div>
          </div>
          <div className="single-project">
            <img
              src={previewMoviesSeach}
              alt="First project"
              width={280}
              height={350}
            />
            <div className="project-body">
              <h2>Movies search</h2>
              <p>React frontend project</p>
              <p>
                <a
                  href="https://github.com/VictorZ94/platzi-student-coding/tree/main/05-buscador-peliculas"
                  target="_blank"
                  rel="noreferrer"
                  title="Github link"
                >
                  <Search color="white" width={18} />
                </a>
                <a
                  href="https://645826179d0f6734c31f2315--chipper-cupcake-8c3780.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  title="Movies search"
                >
                  <Link color="white" width={18} />
                </a>
              </p>
            </div>
          </div>
          <div className="single-project">
            <img
              src={previewSmilingSchool}
              alt="First project"
              width={280}
              height={350}
            />
            <div className="project-body">
              <h2>Smiling School</h2>
              <p>Front-end project</p>
              <p>
                <a
                  href="https://github.com/VictorZ94/Smilling-school"
                  target="_blank"
                  rel="noreferrer"
                  title="Repositorio"
                >
                  <Search color="white" width={18} />
                </a>
                <a
                  href="https://victorz94.github.io/Smilling-school/homepage.html"
                  target="_blank"
                  rel="noreferrer"
                  title="Smiling School website"
                >
                  <Link color="white" width={18} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

PortafolioSection.propTypes = {};

export default PortafolioSection;
