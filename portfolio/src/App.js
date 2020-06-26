import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navtabs from "./components/Navtabs";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <div>
        <Navtabs />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={AboutMe} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </Router>
  );
}

export default App;