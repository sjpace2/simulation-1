import React, {Component} from 'react';

class Form extends Component {
    constructor () {
        super()
        this.state = {
            name: '',
            price: undefined,
            imageURL: undefined
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



    render(){
        return(
            <div>
                <h1>Form</h1>
                <input value={this.state.name} onChange = {e=>{this.handleNameChange(e.target.value)}} type="text"/>
                <input value={this.state.price} onChange = {e=>{this.handlePriceChange(e.target.value)}} type="text"/>
                <input value={this.state.imageURL} onChange = {e=>{this.handleImageUrlChange(e.target.value)}} type="text"/>
                <button onClick = {this.handleCancelClick}>Cancel</button>
                <button>Add to inventory</button>
            </div>
        )
    }
}

export default Form;