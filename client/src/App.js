import React, {Component} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Logins from './components/pages/Log-in';
import SignUp from './components/pages/SignUp';
import Services from './components/pages/Services';
import Particles from 'react-particles-js';
import { Dashboard } from "./components/Dashboard/Dashboard.js";
import { Login } from "./components/Login/Login.js";
import { Signup } from "./components/Signup/Signup.js";
import { PrivateRoute } from "./components/PrivateRoute.js";

function App() {
  return (
  	<>
  	<Router>
  		 <Navbar/>
         <Switch>
         	<Route path='/' exact component=
          {Home} />
          // <Route path='/logins' component={Login} />
          // <Route path='/sign-up' component={SignUp} />
          <Route path='/services' component={Services} />

          <Route exact path="/login" component={Logins} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
         </Switch>
  	</Router>
      
    </>
  );
}

export default App;
