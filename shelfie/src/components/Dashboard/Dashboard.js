import React, {Component} from 'react';

import Product from '../Product/Product';

class Dashboard extends Component {
    constructor () {
        super()
    }

    render(){
        let displayedList = this.props.list.map((product, index) => {
            return <Product key={index} value={product} name={product.name} price={product.price} image={product.img}/>
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