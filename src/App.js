import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Beers from './components/Beers';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route
            exact
            path='/yermans-irish-pub-nyc-contact'
            component={Contact}
          />
          <Route exact path='/yermans-irish-pub-nyc-beers' component={Beers} />
          <Route exact path='/yermans-irish-pub-nyc-menu' component={Menu} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
