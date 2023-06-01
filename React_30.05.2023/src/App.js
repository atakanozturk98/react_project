import React from "react";
import { Component } from "react";
import Categories from "./Categories";
import Product from "./Product";
import Navbar from "./Navbar";
import { Col, Row, Container } from "reactstrap";

export default class App extends Component{
  state = {
  currrentCategory: "",
  products: [],
};

changeCategory = (category) =>{
  this.setState({currentCategory: category.categoryName});
  this.getProducts(category.id)
};

getProducts = (categoryId) => {
  let url = "http://localhost:3000/products"
  if(categoryId){
    url += "?categoryId="+categoryId
  }

  fetch(url)
  .then((response)=>response.json())
  .then((data)=>this.setState({products:data}))
}

componentDidMount() {
  this.getProducts()
}

render() {
  return (
  <div>
    <Container>
      <Navbar/>
      <Row>
        <Col xs="3">
          <p><b>Groups</b></p>
          <Categories
          changeCategory={this.changeCategory}
          currentCategory={this.state.currentCategory}/>
        </Col>
        <Col xs="9">
          <p><b>Workers</b></p>
          <Product
          products = {this.state.products}
          currentCategory={this.state.currentCategory}
          />
        </Col>
      </Row>
    </Container>
  </div>
  );
}
}