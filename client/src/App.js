import React, {Component} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Logins from './components/pages/Log-in';
import SignUp from './components/pages/SignUp';
import Maj1 from './components/pages/Maj1';
import Maj2 from './components/pages/Maj2';
import Event from './components/pages/Event';
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
          <Route path='/maj1' component={Maj1} />
          <Route path="/maj2" component={Maj2} />
          <Route path="/event" component={Event} />
          <Route exact path="/login" component={Logins} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
         </Switch>
  	</Router>
      
    </>
  );
}

export default App;
