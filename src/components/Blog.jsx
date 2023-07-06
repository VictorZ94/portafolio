import React from 'react'
import Container from 'react-bootstrap/Container';
import { useTranslation } from "react-i18next";
import ImgBlogPost from "../assets/intro-bg4.jpg";

const BlogSection = () => {
  const [t] = useTranslation("global");

  return (
    <section className="mt-2 pt-2" id={t("nav.blog").toLowerCase()}>
      <Container className='mt-5 text-center'>
        <h5 className="title"><span className='color-primary'>My{" "}</span> {t("nav.blog")}</h5>
        <p>
          <span className="position-relative fw-light">Latest post</span>
        </p>
        <div class="card mx-sm-2 mx-md-5 mt-5 mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={ImgBlogPost} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8 text-start p-4">
              <div class="card-body">
                <h3 class="card-title fw-light">Card title</h3>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                <a href="#">Read More!</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

BlogSection.propTypes = {}

export default BlogSection