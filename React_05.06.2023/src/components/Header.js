import React from 'react';
import { Link } from "react-router-dom";
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
          <NavLink tag={Link} to="/teams">Anasayfa</NavLink>
          </NavItem>
         
          <NavItem>
          <NavLink tag={Link} to="/squad">Squads</NavLink>
          </NavItem>

          {/* <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown> */}

          <NavItem>
            <NavLink href="/edit">Edit</NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem> */}
        </Nav>
      </div>
    );
  }
}