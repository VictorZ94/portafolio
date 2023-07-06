import React from "react"

const CardBlog = ({ title, content, publishedDate, blogImge, url  }) => (
    <div className="card mx-sm-2 mx-md-5 mt-5 mb-3">
        <div className="row g-0">
        <div className="col-md-4">
            <img
                src={blogImge}
                className="img-fluid rounded-start"
                alt="blog image python object and values"
            />
        </div>
        <div className="col-md-8 text-start p-4">
            <div className="card-body">
            <h3 className="card-title fw-light">{title}</h3>
            <p className="card-text">{content}</p>
            <p className="card-text">
                <small className="text-muted">
                    {publishedDate}
                </small>
            </p>
            <a
                className="nav-link text-custom-primary"
                href={url}
                target="_blank"
                rel="noreferrer"
                title={title}
            >
                Read More &gt;&gt;
            </a>
            </div>
        </div>
        </div>
    </div>
);

export default CardBlog;
