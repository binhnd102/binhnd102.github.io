import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";


const BlogPost = ({ post }) => {
  return (
    <div className="col-md-6" key={post.id}>
    <div className="card mb-4">
      <img
        src={post.imageUrl}
        className="card-img-top"
        alt="Blog Post Image"
      />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.description}</p>
        <Link to={`/blog/${post.id}`} className="btn btn-primary">
            Read More
        </Link>
      </div>
    </div>
  </div>
  );
};

export default BlogPost;
