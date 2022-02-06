import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import axios from "axios";
// material ui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function Sidebar() {

  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const allCategories = await axios.get("/categories");
      setCats(allCategories.data);
      console.log(allCategories.data);
    }
    getCategories();
  }, []);



  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImage"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          doloribus, quisquam dolorum adipisci excepturi corrupti molestias
          inventore. Ipsam, dolor assumenda!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ui className="sidebarList">
          {
            cats.map(ct => (
              <Link to={`/?cat=${ct.name}`}>
                <li className="sidebarListItem"> {ct.name} </li>
              </Link> 
            ))
          }
        </ui>  
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <div className="sidebarIcon">
            <FacebookIcon />
          </div>
          <div className="sidebarIcon">
            <InstagramIcon />
          </div>
          <div className="sidebarIcon">
            <LinkedInIcon />
          </div>
          <div className="sidebarIcon">
            <TwitterIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
