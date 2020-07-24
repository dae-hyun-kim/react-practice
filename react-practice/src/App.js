import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Home from "./routes/Home"
import HotButton from "./routes/HotButton";
import ToggleSwitch from "./routes/ToggleSwitch";
import Form from "./routes/Form";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HotButtonContextProvider from './contexts/HotButtonContext';
import ToggleSwitchContainerProvider from "./contexts/ToggleSwitchContext"

const App = () => {



  return (
    <Router>
      <div className="App">
        <NavBar/>
        <ToggleSwitchContainerProvider>
        <HotButtonContextProvider>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/HotButton" exact component={HotButton} />
              <Route path="/ToggleSwitch" exact component={ToggleSwitch} />
              <Route path="/form" exact component={Form} />
          </Switch>
        </HotButtonContextProvider>
        </ToggleSwitchContainerProvider>
      </div>
    </Router>
  );
}

export default App;
