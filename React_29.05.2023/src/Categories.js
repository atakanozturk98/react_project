import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class Categories extends Component {
  render() {
    const { categories } = this.props;
    return (
    <ListGroup>
        {categories.map((category,index) => (
            <ListGroupItem key={index}>{category}</ListGroupItem>
        ))}

    </ListGroup>
    )
  }
}
