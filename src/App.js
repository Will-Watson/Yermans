import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
