import React, { Component } from 'react';
import './App.css';
import {Route, Redirect ,NavLink ,Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import Gym from './components/Musculacao/Musculacao';
import Cross from './components/Cross';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isVisible : true,
    }
  }

  render() {
    return (
      <div className="App">
        <div className="localMusculacao">
          <div className="mainContentMusc">
            <h1>Visite a Musculação</h1>
            <button><Link to="/musculacao" style={{textDecoration: 'none', color:"white"}} >Vistar</Link></button>
          </div>
        </div>
        <div className="localCross">
          <div className="mainContentCross">
            <h1>Visite o Cross</h1>
            <button><Link to="/crossfit" style={{textDecoration: 'none',color:'white'}}>Visitar</Link></button>
          </div>
        </div>     
      </div>
    );
  }
}

export default App;
