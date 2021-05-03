import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div
      // className='background-image'
      // style={{
      //   backgroundImage: `url(https://i.pinimg.com/originals/ad/a9/eb/ada9eb4f19d7f2bb3dbd8f76a7d6e606.jpg)`,
      // }}
      >
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
