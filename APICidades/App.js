import React, { Component } from 'react';
import './App.css';
import Select from './components/Select';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      cidades: ["STATE PADRAO"],
    }
  }

  componentDidMount(){
    fetch('https://gist.githubusercontent.com/letanure/3012978/raw/36fc21d9e2fc45c078e0e0e07cce3c81965db8f9/estados-cidades.json')
      .then(res => res.json())
      .then(data => this.saveData(data));
  }

  saveData = data => {
    this.setState({
      cidades: data.estados,
    })
  }


  render() {
    return (
      <div className="App">
        <Select city={this.state.cidades}/>
      </div>
    );
  }
}

export default App;
