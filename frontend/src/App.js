import './App.css';
import Navbar from './layouts/NavigationBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './modules/home/Home';
import About from './modules/about/About';
import DashBoard from './modules/dashboard/DashBoard';
import ScoreChart from './modules/dashboard/ScoreChart';

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
        <Route path="/scorechart">
          <ScoreChart />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
