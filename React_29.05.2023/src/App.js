
import React from "react";
import Header from "./Header";
import Products from "./Products";
import Categories from "./Categories";
import { Col, Container, Row } from "reactstrap";

function App() {
  const categories = ["Category1","Category2","Category3","Category4","Category5"]
  const products = ["Products1","Products2","Products3","Products4","Products5"]

  return (
    <Container>
      <Header/>
      <Row>
      <Col sx="3"><Categories categories = {categories}/></Col>
      <Col sx="9"><Products products ={products} /></Col>
      </Row>
  </Container>
    
  );
}

export default App;
