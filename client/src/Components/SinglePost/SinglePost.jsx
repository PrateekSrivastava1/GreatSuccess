import React, { useContext, useEffect, useState } from "react";
import "./../SinglePost/SinglePost.css";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../ContextAPI/Context";

// material ui icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function SinglePost() {

  const location = useLocation();
  const postId = location.pathname.split("/")[2];

  const [post, setPost] = useState({});
  const publicFolder = "http://localhost:5000/images/";
  const { user } = useContext(Context);

  // useStates to update post title and description
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState("");


  // fetch post whenever postId changes
  useEffect(() => {
    const fetchPost = async () => {
      const fullPost = await axios.get("/posts/" + postId);
      // console.log(fullPost.data);
      setPost(fullPost.data);
      setTitle(fullPost.data.title);
      setDescription(fullPost.data.description);
    };
    fetchPost();
  }, [postId]);


  // delete post
  const handleDeletePost = async (e) => {
    try {
      e.preventDefault();
      await axios.delete("/posts/" + postId, { data: { username: user.username } });
      window.location.replace("/");
    }
    catch (err) { }
  }

  // update post
  const handleUpdatePost = async (e) => {
    try {
      e.preventDefault();
      await axios.put("/posts/" + postId, { username: user.username, title, description });
      setUpdateMode(false);
    }
    catch (err) { }
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">

        {post.photo ? (
          <img
            className="singlePostImg"
            src={publicFolder + post.photo}
            alt=""
          />
        )
          :
          (<img
            className="singlePostImg"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
            alt=""
          />)
        }
        {updateMode ?
          (<input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e) => setTitle(e.target.value)} />) :
          (
            <h1 className="singlePostTitle">
              {title}
              {post.username === user?.username && (
                <div className="singlePostEdit">
                  <div className="singlePostIcon">
                    <EditIcon onClick={(e) => setUpdateMode(true)} />
                  </div>
                  <div className="singlePostIcon">
                    <DeleteIcon onClick={handleDeletePost} /> 
                  </div>
                </div>
              )}
            </h1>
          )
        }

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <Link to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? (
          <textarea className="SinglePostDescInput" value={description} onChange={(e) => setDescription(e.target.value)} />
        ) :
          <p className="SinglePostDesc">
            {description}
          </p>
        }

        {updateMode && <button className="singlePostUpdate" onClick={handleUpdatePost}>Update</button>}

      </div>
    </div>
  );
}
