import React, { Component } from 'react'

export default class ProductDetail extends Component {
  render() {
    let {item, showDetail } = this.props;
    return (
      <>
        <button onClick={() => {showDetail(item)}} className="btn btn-primary">Xem Chi Tiết</button>
      </>
    )
  }
}
