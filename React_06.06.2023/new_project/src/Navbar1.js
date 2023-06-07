import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default class Navbar1 extends Component {
  render() {
    const { products } = this.props;

    return (
      <div>
        <Navbar color="light" light expand="sm">
          <NavbarBrand>
              <NavLink>
                <Link to="/">Anasayfa</Link>
              </NavLink>
          </NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">{products.products}
                  <Link to="/cart">Cart</Link>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/components/">{products.products}
                  <Link to="/contact">Contact</Link>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/components/">{products.products}
                  <Link to="/profile">Profile</Link>
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Ürünler - <b>{products.length}</b>
                </DropdownToggle>

                <DropdownMenu right>
                  {this.props.products.map((product) => (
                    <DropdownItem>
                      <span
                        className="badge badge-danger"
                        onClick={() => this.props.removeToCart(product.product)}
                      >
                        <b>X</b>
                      </span>
                      <span>
                        {" "}
                         {product.product.productName} - <b>{product.quantity}</b>
                      </span>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem></NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}