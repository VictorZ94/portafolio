import React from 'react'
import Container from 'react-bootstrap/Container';
import { useTranslation } from "react-i18next";
import { Card, Col, Row } from 'react-bootstrap';
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
        <Row className='mt-5'>
          <Col md={6} lg={4} className='mb-3'>
            <Card>
              <Card.Img variant="top" src={ImgBlogPost} alt="Blog post image"/>
              <Card.Body>
                <Card.Title>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className='mb-3'>
            <Card>
              <Card.Img variant="top" src={ImgBlogPost} alt="Blog post image"/>
              <Card.Body>
                <Card.Title>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}  className='mb-3'>
            <Card>
              <Card.Img variant="top" src={ImgBlogPost} alt="Blog post image"/>
              <Card.Body>
                <Card.Title>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

BlogSection.propTypes = {}

export default BlogSection