import React, { Component } from 'react'
import { Table } from 'reactstrap'

export default class Products extends Component {
  render() {
    const {products} = this.props;
    return (
        <Table hover>
          
        <thead>
          <tr>
            <th>#</th>
            <th>Worker Name</th>
            <th>Worker Surname</th>
            <th>Worker Image</th>

          </tr>
        </thead>
        <tbody>
          
            {products.map((product) => (
                <tr key={product.id}>
                <td > {product.id} </td>
                <td> {product.productName}</td>
                <td > {product.productSurname}</td>
                <td> <img src={product.image}  style={{ width: '50px', height: '50px' }}></img></td>
                </tr> 
            ))}
          
        </tbody>
      </Table>
    )
  }
}