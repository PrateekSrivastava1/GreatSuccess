import "./topBar.css";
import { useContext } from "react";
import { Context } from "../../ContextAPI/Context";
import { Link } from "react-router-dom";

// material ui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SearchIcon from "@mui/icons-material/Search";
import Home from "../../Pages/Home/Home";

export default function TopBar() {

  const { user, dispatch } = useContext(Context);

  const handleLogout = (e) => (
    dispatch({ type: "LOGOUT" })
  )

  return (
    <div className="top">
      {/* <div className="topLeft">
        <div className="topIcon">
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
          <TwitterIcon />
        </div>
      </div> */}

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/writeExperience">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user ? "LOGOUT" : ""}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <>
            <Link to="/profile">
              <img
                className="topImg"
                src={user.profilePic}
                alt=""
              />
            </Link>

            <div className="searchIcon">
              <SearchIcon />
            </div>
          </>
        ) : (
          <ul className="topList">
            <li className="topListItem" style={{ marginRight: "20px" }}>
              <Link to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem" >
              <Link to="/Register">
                REGISTER
              </Link>
            </li>
          </ul>
        )
        }
      </div>
    </div>
  );
}
