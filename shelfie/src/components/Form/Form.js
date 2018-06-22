import React, {Component} from 'react';

class Form extends Component {
    constructor () {
        super()
        this.state = {
            name: '',
            price: 0,
            imageURL: 0
        }
    }

    handleNameChange =()=>{

    }

    handlePriceChange =()=>{

    }

    handImageUrlChange =()=>{

    }

    render(){
        return(
            <div>
                <h1>Form</h1>
                <input onChange={e=>{this.handleNameChange(e.target.value)}} type="text"/>
                <input onChange={e=>{this.handlePriceChange(e.target.value)}} type="text"/>
                <input onChange={e=>{this.handleImageUrlChange(e.target.value)}} type="text"/>
                <button>Cancel</button>
                <button>Add to inventory</button>
            </div>
        )
    }
}

export default Form;