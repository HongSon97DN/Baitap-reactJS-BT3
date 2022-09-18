import React, { Component } from 'react'
import ProductDetail from './ProductDetail';

export default class ProductItem extends Component {
    render() {
        let {item, showDetail } = this.props;
        return (
            <div className="card" style={{ height: "440px" }}>
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.price}$</p>
                    <ProductDetail item={item} showDetail={showDetail}/>
                </div>
            </div>
        )
    }
}
