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
        <div
          className='background-image'
          style={{
            backgroundImage: `url(https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2013/09/how-to-varnish.jpg)`,
          }}
        >
          <BrowserRouter>
            <NavBar />
            <Route exact path='/' component={Home} />
            <Route exact path='/contact' component={Contact} />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
