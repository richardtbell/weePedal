import React, { Component } from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer, Fa
} from "mdbreact";
import "../AppPage.css";
import logoPedal from "../img/logoPedal.png";
import {BackgroundHeader, PageHeaderLogo} from '../StyledComponents/StyledComponents'

class Header extends Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div id="apppage">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
              
                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <img src={logoPedal} alt="" className="img-fluid" />
                  {/* <MDBBtn outline color="indigo">
                    Find Out More
                  </MDBBtn> */}
                  <button class="button button2">Find Out More <Fa icon="arrow-right" className="white-text" /> </button>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
        {/* <BackgroundHeader ></BackgroundHeader> */}
        

  
      </div>
    );
  }
}

export default Header;
