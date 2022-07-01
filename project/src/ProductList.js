import React, { Component } from 'react'

export default class ProductList extends Component {
  
  render() {
    return (
      <div>
        <h3>{this.props.info.title} - {this.props.currentCategory}</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Unit</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.products.map(product => (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.productName}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.unitsInStock}</td>
                  <td><button onClick={() => { this.props.addToCart(product) }} type="button" className="btn btn-primary">AddToCart</button></td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    )
  }
}
