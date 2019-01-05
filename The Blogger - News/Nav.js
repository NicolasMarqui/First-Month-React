import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Nav extends React.Component{
    render(){
       return(
        <header className = "mainHeader">
            <div className = "mainNavBar">
                <div className = "nav-logo">
                    <h1>TheBlogger</h1>
                </div>
            <div className = "nav-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">News</a></li>
                    <li><a href="/">Comments</a></li>
                </ul>
            </div>
            </div>
            <div className="middleWrapper">
                <h1>TheBlogger</h1>
                <p>Your source of News</p>
                <FontAwesomeIcon icon="faArrowAltCircleDown" />
            </div>
        </header>
       )
    }
}

export default Nav
