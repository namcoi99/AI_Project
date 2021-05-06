import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './containers/Home';
import About from './containers/About';
import DashBoard from './containers/DashBoard';
import ScoreTable from './components/ScoringCriteria/ScoreTable';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <DashBoard />
        </Route>
        <Route path="/scoreTable">
          <ScoreTable />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
