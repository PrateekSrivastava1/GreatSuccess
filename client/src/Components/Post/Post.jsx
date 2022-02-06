import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {

  const publicFolder = "http://localhost:5000/images/";

  return (
    <div className="post">

      {post.photo ? (
        <img
          className="postImg"
          src={publicFolder + post.photo}
          alt=""
        />
      )
        :
        <img
          className="postImg"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
          alt=""
        />
      }

      <div className="postInfo">
        <div className="postCats">
          {
            post.categories.map((cats) => (
              <span className="postCat">{"#" + cats}</span>
            ))
          }
        </div>
        <Link to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
      </div>
      <p className="postDesc">
        {post.description}
      </p>
      <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
    </div>
  );
}
