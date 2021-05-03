import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Beers from './components/Beers';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/beers' component={Beers} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
