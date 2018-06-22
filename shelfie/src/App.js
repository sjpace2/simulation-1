import React, { Component } from 'react';

import axios from 'axios';

import './App.css';


import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: []
    }
  }

  getProducts = () => {
    axios.get('/api/inventory').then(response => {
      this.setState({inventory: response.data})
      
      console.log(this.state.inventory)
    })

   
  }

  componentDidMount(){
    this.getProducts()
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
