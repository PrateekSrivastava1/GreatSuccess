import React, { useEffect } from "react";
import { useState } from "react";
import Posts from "../../Components/Posts/Posts";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Card from "../../Components/Card/Card";

export default function Home() {

  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  // console.log(location);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await axios.get("/posts" + search);
        setPosts(res.data);
        // console.log(res);
      } 
      catch (err) {
        console.log(err + "\n\n this is the error");
      }
      // const res = await axios.get("/posts");
      // console.log(res);
    }
    fetchAllPosts();
  }, [search]);


  return (
    <>
      <div className="home">
        <Posts posts={posts} />
        {/* <Sidebar /> */}
        {/* <Card/> */}
      </div>
    </> 
  );
}