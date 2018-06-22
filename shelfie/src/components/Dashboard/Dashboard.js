import React, {Component} from 'react';
import axios from 'axios';
import Product from '../Product/Product';

class Dashboard extends Component {
    constructor () {
        super()
    }

    deleteRequest = (name) => {
        axios.delete(`/api/product/${name}`).then(response => {
            this.props.get()
        })
    }

    render(){
        let displayedList = this.props.list.map((product, index) => {
            return <Product delete = {this.deleteRequest} key={index} value={product} name={product.name} price={product.price} image={product.img}/>
        })
        
        return(
            <div>
                Dashboard
                <Product/>
                {displayedList}
                
            </div>
        )
    }
}

export default Dashboard;