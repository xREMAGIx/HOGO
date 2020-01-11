import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from "./pages/Homepage.js";
import Searchpage from "./pages/Searchpage.js";
import Housepage from "./pages/Housepage.js";
import Bookingpage from "./pages/Bookingpage.js";
import Hostpage from "./pages/Hostpage.js";
import BHost1 from "./pages/hostingPageContent/HostStep1.js";
import BHost2 from "./pages/hostingPageContent/HostStep2.js";
import BHost3 from "./pages/hostingPageContent/HostStep3.js";
import Profilepage from "./pages/Profilepage.js";
import Profilepage1 from "./pages/Profilepage1.js";
import Savedpage from "./pages/Savedpage.js";
import Inboxpage from "./pages/Inboxpage.js";

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
        <Route exact path="/hosting">
          <Hostpage />
        </Route>
        <Route exact path="/bhost1">
          <BHost1 />
        </Route>
        <Route exact path="/bhost2">
          <BHost2 />
        </Route>
        <Route exact path="/bhost3">
          <BHost3 />
        </Route>
        <Route exact path="/profile">
          <Profilepage />
        </Route>
        <Route exact path="/profile1">
          <Profilepage1 />
        </Route>
        <Route exact path="/saved">
          <Savedpage />
        </Route>
        <Route exact path="/inbox">
          <Inboxpage />
        </Route>
      </Router>
    );
  }
}

export default App;
