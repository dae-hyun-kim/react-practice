import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Home from "./routes/Home"
import About from "./routes/About";
import Contact from "./routes/Contact";
import Form from "./routes/Form";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {



  return (
    <Router>
      <div className="App">
        <NavBar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/form" exact component={Form} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
