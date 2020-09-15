import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Product from './components/pages/Product';
import SignUp from './components/pages/SignUp';
import Services from './components/pages/Services';

function App() {
  return (
  	<>
  	<Router>
  		 <Navbar/>
         <Switch>
         	<Route path='/' exact component=
          {Home} />
          <Route path='/products' component={Product} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/services' component={Services} />
         </Switch>
  	</Router>
      
    </>
  );
}

export default App;
