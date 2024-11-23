import React from "react";

const Newsitem = (props) => {
  let { title, description, imageUrl, url, date, author, source } = props;
  return (
    <div>
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            top: "0",
            right: "0",
          }}
        >
          <span className="badge  bg-danger">{source}</span>
        </div>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-danger">
              By {author ? author : "Unknown"} on {new Date(date).toUTCString()}
            </small>
          </p>
          <a href={url} target="-blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
