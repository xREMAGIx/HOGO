import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage.js";
import Searchpage from "./pages/Searchpage.js";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/search">
          <Searchpage />
        </Route>
      </Router>
    );
  }
}

export default App;
