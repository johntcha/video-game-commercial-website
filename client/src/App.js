import React, {Component} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Maj1 from './components/pages/Maj1';
import Maj2 from './components/pages/Maj2';
import Event from './components/pages/Event';
import Video from './components/pages/Video';


function App() {
  return (
  	<>
  	<Router>
  		 <Navbar/>
         <Switch>
         	<Route path='/' exact component=
          {Home} />
          <Route path='/maj1' component={Maj1} />
          <Route path="/maj2" component={Maj2} />
          <Route path="/event" component={Event} />
          <Route path="/video" component={Video} />
         </Switch>
  	</Router>
      
    </>
  );
}

export default App;
