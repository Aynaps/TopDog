import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import UserPage from './components/userpage/userpage';
import AboutPage from './components/aboutpage/about';
import LoginScreenInitial from './components/loginscreen/LoginScreenInitial';
import LoginScreenLogin from './components/loginscreen/LoginScreenLogin';
import LoginScreenSignUp from './components/loginscreen/LoginScreenSignUp';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={LoginScreenInitial} />
    <Route exact path="/login" component={LoginScreenLogin} />
    <Route exact path="/signup" component={LoginScreenSignUp} />
    <Route exact path="/userprofile" component={UserPage} />
    <Route exact path="/about" component={AboutPage} />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
