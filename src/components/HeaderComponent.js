import React, { Component } from 'react';
import {
  Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../images/oldHomesteadLogo.jpg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar className="color-nav" fixed="top" expand="md">
          <div className="container">
            <NavbarBrand href="/"><img src={Logo} height="90" width="90" alt="logo" /></NavbarBrand>
            <h5 className="text-center mr-5">Homemade <br />on the <br />Homestead</h5>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem className="ml-5">
                  <NavLink className="nav-link" to="/home">
                    <i className="fa fa-home fa-lg" /> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <i className="fa fa-info fa-lg" /> About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/blogs">
                    <i className="fa fa-book fa-lg" /> Blogs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/shopping">
                    <i className="fa fa-shopping-basket fa-lg" />Shop
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <i className="fa fa-address-card fa-lg" /> Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
              <span className="navbar-text ml-auto">
                <Form className="form-inline">
                  <Input type="text" className="w-50" placeholder="Search..." name="search" />
                  <Button type="submit"><i className="fa fa-search" /></Button>
                </Form>
                <Button outline onClick={this.toggleModal} className="text-white">
                  <i className="fa fa-sign-in fa-lg text-white" /> Login/Register
                </Button>
              </span>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;