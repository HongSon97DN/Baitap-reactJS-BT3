import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    renderShoes = () => {
        let {arrayShoes,showDetail} = this.props;
        return arrayShoes.map((item) => {
            return (
                <div className="col-4 my-3" key={`shoes-${item.id}`}>
                    <ProductItem item={item} showDetail={showDetail}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderShoes()}
            </div>
        )
    }
}
