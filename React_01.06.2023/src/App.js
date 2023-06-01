import React, { Component } from "react";
import Categories from "./Categories";
import Product from "./Product";
import Navbar from "./Navbar1";//component importu
import alertify from "alertifyjs"; //kütüphane importu
import { Col, Row, Container } from "reactstrap";
import CartDetail from "./CartDetail";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Profile from "./Profile";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: [],
    profile: [],
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId != null) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart!", 2);
  };

  removeToCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " removed from cart!", 2);
  };

  addToProfile = (email,password,select,selectMulti,text) => {
    let newProfile = this.state.profile;
    newProfile.push({ email: email, password: password, select: select, selectMulti: selectMulti, text: text});
    this.setState({ profile: newProfile});
    alertify.success(email + " added to Profile!",2);
  };
  
  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Navbar
            products={this.state.cart}
            removeToCart={this.removeToCart}
          />
          <Row>
            <Col xs="3">
              <Categories
                changeCategory={this.changeCategory}
                currentCategory={this.state.currentCategory}
              />
            </Col>

            <Col xs="9">
              <Routes>
                <Route
                  path= "/"
                  element= {
                    <Product
                addToCart={this.addToCart}
                products={this.state.products}
                />
                  } 
                />
                <Route
                  path= "/cart"
                  element= {
                    <CartDetail
                      cart= {this.state.cart}
                      removeToCart= {this.removeToCart}
                    />
                  }
                />

              <Route
                  path= "/profile"
                  element= {
                    <Profile
                      profile = {this.state.profile}
                     
                    />
                  }
                />

                <Route path="/contact" element={<Contact
                addToProfile = {this.addToProfile}
                />}/>
                <Route path="*" element={<NotFound/>}/>

              </Routes>

            </Col> 
          </Row>
        </Container>
      </div>
    );
  }
}