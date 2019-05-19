import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  Fa,
  NavLink,
  NavItem
} from "mdbreact";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    const bgBlue = { backgroundColor: "#282761" };
    return (
      <div>
        <header>
          <MDBNavbar style={bgBlue} dark expand="md" scrolling fixed="top">
            <MDBNavbarBrand href="/">
              {/* <strong>Navbar</strong> */}
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.onClick} />
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <NavLink
                    className="nav-link Ripple-parent"
                    onClick={this.onClick}
                    to="/"
                  >
                    Home
                  </NavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <NavLink
                    className="nav-link Ripple-parent"
                    onClick={this.onClick}
                    to="/aboutUs"
                  >
                    About Us
                  </NavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <NavLink
                    className="nav-link Ripple-parent"
                    onClick={this.onClick}
                    to="/ourTours"
                  >
                    Our Tours
                  </NavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <NavLink
                    className="nav-link Ripple-parent"
                    onClick={this.onClick}
                    to="/booking"
                  >
                    Online Booking
                  </NavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <NavLink
                    className="nav-link Ripple-parent"
                    onClick={this.onClick}
                    to="/ourPolicy"
                  >
                    Our Policy
                  </NavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <NavLink
                    className="nav-link Ripple-parent"
                    onClick={this.onClick}
                    to="/contactUs"
                  >
                    Contact Us
                  </NavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <NavItem>
                  <div className="text-center">
                    <ul className="list-unstyled list-inline">
                      <li className="list-inline-item">
                        <a
                          className="btn-floating btn-lg btn-fb mx-1"
                          href="https://www.facebook.com/aweepedal/"
                          target="_blank"
                        >
                          <Fa icon="facebook" className="white-text" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          className="btn-floating btn-lg btn-in mx-1"
                          href="https://www.instagram.com/aweepedal/"
                          target="_blank"
                        >
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
        {/* <MDBContainer style={container} className="text-center mt-5 pt-5">
       <Header />
        </MDBContainer> */}
      </div>
    );
  }
}

export default Navigation;
