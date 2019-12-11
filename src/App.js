import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from "./pages/Homepage.js";
import Searchpage from "./pages/Searchpage.js";
import Housepage from "./pages/Housepage.js";
import Bookingpage from "./pages/Bookingpage.js";

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
        <Route exact path="/house">
          <Housepage />
        </Route>
        <Route exact path="/booking">
          <Bookingpage />
        </Route>
      </Router>
    );
  }
}

export default App;
