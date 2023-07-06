import React from 'react'
import Container from 'react-bootstrap/Container';
import { useTranslation } from "react-i18next";
import blogPost from "../data/blogs.js"
import CardBlog from './CardBlog';

const BlogSection = () => {
  const [t] = useTranslation("global");

  return (
    <section className="mt-2 pt-2" id={t("nav.blog").toLowerCase()}>
      <Container className='mt-5 text-center'>
        <h5 className="title"><span className='color-primary'>My{" "}</span> {t("nav.blog")}</h5>
        <p>
          <span className="position-relative fw-light">Latest post</span>
        </p>
        {blogPost.map(blog => (
          <CardBlog key={blog.blogId} {...blog} />
        ))}
      </Container>
    </section>
  )
}

BlogSection.propTypes = {}

export default BlogSection