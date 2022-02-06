import Home from "./Pages/Home/Home";
import TopBar from "./Components/TopBar/TopBar";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./ContextAPI/Context";

function App() {
  const { user } = useContext(Context);

  return (
    <Router>
      <TopBar />
      <Switch>
        <Route path="/post/:postID">
          <Single />
        </Route> 
        <Route path="/writeExperience">{user ? <Write /> : <Login />}</Route>
        <Route path="/profile">{user ? <Profile /> : <Login />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/">
          <Home />  
        </Route>
      </Switch>
    </Router> 
  );
}

export default App;
