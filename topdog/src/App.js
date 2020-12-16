import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { HomePage } from './components/homepage';
// import { 
//   Navbar,
//   Nav,
//   Form,
//   Button,
//   FormControl,
// } from 'react-bootstrap'

export default function App() {
  return (
    
    <Router>
      <div className="navbar">
        <a href="/about">
          <img src="logo.svg" alt=" " height="25px" width="25px" />
        </a>
        <a href="/">
          Home
        </a>

      </div>


        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <HomePage />
            <About/>
          </Route>
        </Switch>
    </Router>
  );
}


function About() {
  return <h2>About</h2>;
}


//export default App;
