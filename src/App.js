import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="left">
          <NavLink exact to="/" activeClassName="navLinkActive">
            Home
          </NavLink>
          <br />
          <NavLink exact activeClassName="navLinkActive" to="/about">
            About
          </NavLink>
        </div>
        <div className="right">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
