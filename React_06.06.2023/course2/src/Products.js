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
            <th>Product Name</th>

          </tr>
        </thead>
        <tbody>
          
            {products.map((product,index) => (
                <tr>
                <td key={index}> {product}</td>
                </tr> 
            ))}
          
        </tbody>
      </Table>
    )
  }
}
