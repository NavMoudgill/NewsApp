import React from "react";
const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, publishedAt, author, source } =
    props;
  return (
    <div className="card my-2" style={{ height: "33rem", width: "20rem" }}>
      <img
        src={
          imgUrl
            ? imgUrl
            : "https://images.unsplash.com/photo-1610513320995-1ad4bbf25e55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        }
        style={{ height: "16rem", minWidth: "16rem", minHeight: "16rem" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">
          {title}...
          <span
            className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-secondary text-light"
            // style={{
            //   left: "80%",
            // }}
          >
            {source}
          </span>
        </h5>
        <p className="card-title">{new Date(publishedAt).toGMTString()}</p>
        <p className="card-title">Written by {author}</p>
        <p className="card-text">{description}...</p>
        <a
          href={newsUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-sm"
        >
          See in detail
        </a>
      </div>
    </div>
  );
};
export default NewsItem;
