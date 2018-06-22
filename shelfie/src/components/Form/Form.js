import React, {Component} from 'react';

import axios from 'axios';

class Form extends Component {
    constructor () {
        super()
        this.state = {
            name: '',
            price: undefined,
            imageURL: ''
        }


    }

    handleNameChange = value => {
        this.setState({
            name: value
        })
    }

    handlePriceChange = value => {
        this.setState({
            price: value
        })
    }

    handleImageUrlChange = value => {
        this.setState({
            imageURL: value
        })
    }

    handleCancelClick = () => {
        this.setState({
            name: '',
            price: '',
            imageURL: ''
        })
    }

    // newProduct = () =>{
    //     let newProduct = {
    //         name: this.state.name,
    //         price: this.state.price,
    //         imageURL: this.state.imageURL
    //     }
    // }
   
    postProducts = (props) => {
        axios.post('/api/product', {name: this.state.name, price: this.state.price, imageURL: this.state.imageURL} ).then(response=>{
            
            
            this.setState({
                name: response.data.name,
                price: response.data.price,
                imageURL: response.data.imageURL
            })
            console.log(this.props)
            this.props.get()
      
            this.handleCancelClick()
        })
    }



    render(){
        return(
            <div>
                <h1>Form</h1>
                <input value={this.state.name} onChange = {e=>{this.handleNameChange(e.target.value)}} type="text"/>
                <input value={this.state.price} onChange = {e=>{this.handlePriceChange(e.target.value)}} type="text"/>
                <input value={this.state.imageURL} onChange = {e=>{this.handleImageUrlChange(e.target.value)}} type="text"/>
                <button onClick = {this.handleCancelClick}>Cancel</button>
                <button onClick = {this.postProducts}>Add to inventory</button>
            </div>
        )
    }
}

export default Form;