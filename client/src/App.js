import React, { Component } from 'react';
import Navbar from './Layout/Navbar';
import Home from './component/Home';
import About from './component/About';
import Footer from './Layout/Footer';
import Team from './component/Team';
import Register from './component/Register';
import Events from './component/Events';
import {BrowserRouter as Router,Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>

<div className="App">
      <Navbar/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/highlights' component={About}/>
      <Route exact path='/team' component={Team}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/event' component={Events}/>
       <Footer/>
      </div>
      </Router>
      
    );
  }
}

export default App;
