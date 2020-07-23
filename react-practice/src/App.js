import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Home from "./routes/Home"
import HotButton from "./routes/HotButton";
import Contact from "./routes/Contact";
import Form from "./routes/Form";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HotButtonContextProvider from './contexts/HotButtonContext';

const App = () => {



  return (
    <Router>
      <div className="App">
        <NavBar/>
          <Switch>
            <HotButtonContextProvider>
              <Route path="/" exact component={Home}/>
              <Route path="/about" exact component={HotButton} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/form" exact component={Form} />
            </HotButtonContextProvider>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
