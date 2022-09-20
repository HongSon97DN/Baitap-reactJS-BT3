import React, { Component } from 'react'

export default class ProductDetail extends Component {
  render() {
    let { shoesInfo } = this.props;
    let { name, price, image, shortDescription, quantity } = shoesInfo;
    return (
      <>
        <div className="modal fade" id="itemModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Thông tin chi tiết sản phẩm</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body d-flex">
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
                          <td style={{fontWeight:"700"}}>Price</td>
                          <td>{price}$</td>
                        </tr>
                        <tr>
                          <td style={{fontWeight:"700"}}>Quantity</td>
                          <td>{quantity}</td>
                        </tr>
                        <tr>
                          <td style={{fontWeight:"700"}}>Description</td>
                          <td>{shortDescription}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
