import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, Fa, NavLink, NavItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header'
import Schrollchor from "react-scrollchor";

class Navigation extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  render() {
    const bgBlue = {backgroundColor: '#29b6f6'}
    const container = {height: 500}
    return(
      <div>
        <Router>
          <header>
            <MDBNavbar style={bgBlue} dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/">
                  {/* <strong>Navbar</strong> */}
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                  
                  <Schrollchor
                        to="#"
                        animate={{ duration: 600, offset: -90 }}
                      >
                        <NavLink
                          className="nav-link Ripple-parent"
                          onClick={this.onClick}
                          to="/"
                        >
                          Home
                        </NavLink>
                      </Schrollchor>
                  </MDBNavItem>
                  <MDBNavItem>
                  <Schrollchor
                        to="#about"
                        animate={{ duration: 600, offset: -90 }}
                      >
                        <NavLink
                          className="nav-link Ripple-parent"
                          onClick={this.onClick}
                          to="/"
                        >
                          About Us
                        </NavLink>
                      </Schrollchor>
                  </MDBNavItem>
                  <MDBNavItem>
                  <Schrollchor
                        to="#tours"
                        animate={{ duration: 600, offset: -90 }}
                      >
                        <NavLink
                          className="nav-link Ripple-parent"
                          onClick={this.onClick}
                          to="/"
                        >
                          Our Tours
                        </NavLink>
                      </Schrollchor>
                  </MDBNavItem>
                  <MDBNavItem>
                  <Schrollchor
                        to="#book"
                        animate={{ duration: 600, offset: -90 }}
                      >
                        <NavLink
                          className="nav-link Ripple-parent"
                          onClick={this.onClick}
                          to="/"
                        >
                         Online Booking
                        </NavLink>
                      </Schrollchor>
                  </MDBNavItem>
                  <MDBNavItem>
                  <Schrollchor
                        to="#ourpolicy"
                        animate={{ duration: 600, offset: -90 }}
                      >
                        <NavLink
                          className="nav-link Ripple-parent"
                          onClick={this.onClick}
                          to="/"
                        >
                         Our Policy
                        </NavLink>
                      </Schrollchor>
                  </MDBNavItem>
                  <MDBNavItem>
                  <Schrollchor
                        to="#contactUs"
                        animate={{ duration: 600, offset: -90 }}
                      >
                        <NavLink
                          className="nav-link Ripple-parent"
                          onClick={this.onClick}
                          to="/"
                        >
                        Contact Us
                        </NavLink>
                      </Schrollchor>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                <NavItem>
                      <div className="text-center">
                        <ul className="list-unstyled list-inline">
                          <li className="list-inline-item">
                            <a className="btn-floating btn-lg btn-fb mx-1" href="https://www.facebook.com/aweepedal/" target="_blank">
                            
                              <Fa icon="facebook" className="white-text" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="btn-floating btn-lg btn-in mx-1" href="https://www.instagram.com/aweepedal/" target="_blank">
                              <Fa icon="instagram" className="white-text" />
                            </a>
                          </li>

                          
                        </ul>
                      </div>
                    </NavItem>
                 
                  
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </Router>
        {/* <MDBContainer style={container} className="text-center mt-5 pt-5">
       <Header />
        </MDBContainer> */}
      </div>
    );
  }
}

export default Navigation;