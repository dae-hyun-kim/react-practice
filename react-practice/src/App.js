import React, { useState } from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Form from "./routes/Form";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {



  return (
    <div className="App">
      <NavBar/>
      <Router>
        <About />
        <Contact />
        <Form />
      </Router>
    </div>
  );
}

export default App;
