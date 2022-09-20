import React, { Component } from 'react'

export default class ProductDetail extends Component {
  render() {
    let { shoesInfo } = this.props;
    let { name, price, image, shortDescription, quantity } = shoesInfo;
    return (
      <>
        <div className="col-4 text-center">
          <h3>{name}</h3>
          <img className='img-fluid' src={image} alt="" />
        </div>
        <div className="col-8">
          <h2>Thông tin sản phẩm</h2>
          <table className="table">
            <thead>
              <tr>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Price</td>
                <td>{price}$</td>
              </tr>
              <tr>
                <td>Quantity</td>
                <td>{quantity}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{shortDescription}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    )
  }
}
