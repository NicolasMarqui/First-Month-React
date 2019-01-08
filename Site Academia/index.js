import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Route, NavLink ,Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Gym from './components/Musculacao/Musculacao';
import Cross from './components/Cross';

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/musculacao" component={Gym}/>
            <Route path="/crossfit" component={Cross}/>
          </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
