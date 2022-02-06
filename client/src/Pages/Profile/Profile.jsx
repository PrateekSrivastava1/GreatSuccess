import React, { useContext, useState } from "react";
import "./Profile.css";
import Sidebar from "../../Components/Sidebar/Sidebar";

import { Context } from "../../ContextAPI/Context"
import axios from "axios";

export default function Profile() {

  const { user, dispatch } = useContext(Context);

  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);


  // update user
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" })
    const updateUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    console.log(updateUser);
    // console.log(user.username);
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updateUser.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }
    try {
      const userInfo = await axios.put("/users/" + user._id, updateUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: userInfo.data })
    } catch (err) {
      console.log(err);
      dispatch({ type: "UPDATE_FAILURE" })
    }
  }

  const PF = "http://localhost:5000/images/"

  return (
    <div className="profile">

      {/* new design */}
      <div className="profileWrapper">
        <div className="container">
          <div className="avatar-flip">
            <label htmlFor="fileInput">
              {/* dummy profilepic url : https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg */}
              <img
                src={ user.profilePic}
                height="150" 
                width="150"
              /> 
            </label>
          </div>
          {/* <label className="profilePictureIcon" htmlFor="fileInput">
            <AccountCircleIcon />
          </label> */}
          <form className="profileInputs" onSubmit={handleUpdateUser}>
            <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
            <label> Username</label>
            <input type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <label> Email </label>
            <input type="email" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <label> Password</label>
            <input type="password" placeholder="Enter your new password..." onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button className="profileSubmit" type="submit" >Update</button>
            <br />
            <br />
            {success &&
              <span style={{ color: "green", marginTop: "10px" }} >Your profile has been updated :)</span>
            }
          </form>
        </div>
        <span className="profileDeleteTitle"> Delete your Account </span>
      </div>
      <Sidebar />
    </div>
  );
}
