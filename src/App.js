import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Products from './components/pages/Products';
import Categories from './components/pages/Categories';
import User from './components/pages/User';
import SignIn from './components/pages/SignIn';



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact  component={Home}/>
        <Route path='/products' component={Products} />
        <Route path='/categories' component={Categories} />
        <Route path='/user' component={User} />
        <Route path='/sign-in' component={SignIn} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
