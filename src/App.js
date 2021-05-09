import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Preloader from "./components/UI/Pre";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/Helper/ScrollToTop";
import Footer from "./components/UI/Footer";
import Navbar from "./components/UI/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Timeline from "./components/Timeline/Timeline";
require("mailgo/dist/mailgo.min.js");

function App() {
  // load state to show loader
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1200);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/timeline" component={Timeline} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
