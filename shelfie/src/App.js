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
//pass getproducts to form
  
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
        <Dashboard get={this.getProducts} list = {this.state.inventory}/>
        <Form get={this.getProducts}/>
        <Header/>
      </div>
    );
  }
}

export default App;
