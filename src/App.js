import MainHeader from "./components/MainHeader";
import "semantic-ui-css/semantic.min.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Formulaire from "./components/Formulaire";
import About from "./components/About";
import Game from "./components/Game";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MainHeader className="Navbar" />
      <Router>
        <Menu inverted className="Navbar">
          <Menu.Item as={Link} to="/">
            Home
          </Menu.Item>
          <Menu.Item as={Link} to="/about">
            About
          </Menu.Item>
          <Menu.Item as={Link} to="/admin">
            Admin
          </Menu.Item>
        </Menu>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/admin" component={Formulaire} />
          <Route path="/game/:id" component={Game} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
