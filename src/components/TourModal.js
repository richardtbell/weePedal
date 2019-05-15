import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import {MaryQueenOfScotsText, EdinburghToMusselburghText, DavinciCodeAtRoslinChapel, EdinburghToFalkirkWheel, OutlanderAdventure} from './TourText'
class TourModal extends Component {

  render() {
    if (!this.props.modalOpen) {
        return null;
      }
    return (
      <MDBContainer>
        {/* BUTTON */}
        {/* <MDBBtn color="info" onClick={this.toggle}>Click</MDBBtn> */}
        {/* MODAL */}
        <MDBModal isOpen={this.props.modalOpen} toggle={this.props.toggleModal}    >
          <MDBModalHeader toggle={this.props.toggleModal}>Tour Title</MDBModalHeader>
          <MDBModalBody>
              {this.props.sectionToRender === "MQS" ? <MaryQueenOfScotsText /> : null}
              {this.props.sectionToRender === "MUSS" ? <EdinburghToMusselburghText /> :null}
              {this.props.sectionToRender === "DAVINCI" ? <DavinciCodeAtRoslinChapel />:null}
              {this.props.sectionToRender === "ETF" ? <EdinburghToFalkirkWheel /> : null}
              {this.props.sectionToRender === "OUT" ? <OutlanderAdventure /> : null}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.props.toggleModal}>Close</MDBBtn>
            <MDBBtn color="primary">Book</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}
export default TourModal;