import React, { Component } from 'react';

import './App.css';

import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: [
        {name: 'brown paper packages', price: 29, img: 'image'}, 
        {name: 'warm woolen mittens', price: 18, img: 'image'}, 
        {name: 'schnitzel with noodles', price: 8, img: 'image'}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Dashboard list={this.state.inventory}/>
        <Form/>
        <Header/>
      </div>
    );
  }
}

export default App;
