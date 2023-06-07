import React from "react";
import  Navbar  from "./Navbar";
import  List  from "./List";
import  Table from "./Table";
import Footer from "./Footer";
import { Container } from "reactstrap";

function App() {
  const links = [
    { title: "Home", url: "/" },
    { title: "List", url: "/list" },
    { title: "Table", url: "/table" },
  ];

  const listItems = ["Item 1", "Item 2", "Item 3", "Item 4"];

  const tableData = [
    { id: 1, name: "Atakan Öztürk", age: 25 },
    { id: 2, name: "Alihan Tokuç", age: 27 },
    { id: 3, name: "Hüseyin Toprak", age: 27 }
  ];


  return (
    <div>
      <Navbar links={links} />
      <Container>
        <h1>Welcome to the App</h1>

        <h2>List</h2>
        <List listItems={listItems} />

        <h2>Table</h2>
        <Table tableData={tableData} />

      </Container>
      <Footer />
    </div>
  );
}

export default App;
