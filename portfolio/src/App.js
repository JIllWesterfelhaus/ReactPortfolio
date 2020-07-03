import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navtabs from "./components/Navtabs";
import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import Portfolio from "./components/pages/Portfolio";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Navtabs />
        <Header/>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={AboutMe} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;