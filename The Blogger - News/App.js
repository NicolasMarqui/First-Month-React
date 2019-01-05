import React, { Component } from 'react';
import Header from './components/Nav';
import News from './components/News';
import Comments from './components/Comments';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowAltCircleDown)

class App extends Component {

  componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=";
    let query = "android";
    let API_KEY = "62704746509249139c8c3ec2351e0f75";
    let rest = "&from=2018-12-04&sortBy=publishedAt&apiKey="

    fetch(url + query + rest + API_KEY)
      .then(res => res.json())
      .then(data => this.saveData(data))

    fetch("https://jsonplaceholder.typicode.com/comments/")
      .then(res => res.json())
      .then(data => this.saveComments(data));

  }

  constructor(props){
    super(props);

    this.state = {
      news: [],
      comments: [],
      visible: false,
    }
  }

  saveData = (data) => {
    this.setState({
      news: data.articles,
    })
  }

  saveComments = (data) => {
    this.setState({
      comments: data
    })
  }

  show = () => {
    this.setState({
      visible: true,
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <News showNews = {this.state.news}/>
        <div className="showComentarios">
          <div className="centerMe">
            <button onClick={this.show}>See Comments</button>
          </div>
        </div>
        {this.state.visible ? <Comments showComments = {this.state.comments}/> : null}   
      </div>
    );
  }
}

export default App;
