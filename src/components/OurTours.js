import React , { useState, Component }from "react";
import { MDBContainer, Container, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter,Fa, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";
import falkirkWheel from '../img/the-falkirk-wheel-james-lamb.jpg'
import roslynChapel from '../img/roslynChapel.jpg'
import craigmillar from '../img/Craigmillar.jpg'
import mussleburgh from '../img/musselburgh.jpg'
import linlithgow from '../img/linlithgow-palace-britain-explorer.jpg'
import TourModal from './TourModal'
class OurTours extends Component{
  state = {
    modalOpen: false,
    section: ''
  };

  toggle = (e) => {
    this.setState({
        section: e.target.name,
      modalOpen: !this.state.modalOpen
    });
  }
  
render(){
  const style ={
    height: '170px'
  }
    return (
      <div id="tours">
        <Container>
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Our Tours
          </h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
    
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
              <MDBCard collection className="z-depth-1-half">
                <div className="view zoom">
                  <img
                    src={craigmillar}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="stripe light">
                    {/* <a href="#!" id="link" onClick={this.toggle}> */}
                      {/* <button className="image-text" name="MQS" onClick={this.toggle}>
                      Mary Queen of Scots <Fa icon="angle-right" />
                      </button> */}
                      <MDBBtn color="primary" outline rounded name="MQS" onClick={this.toggle}>Mary Queen of Scots <Fa icon="angle-right" /></MDBBtn>
                    {/* </a> */}
                    
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
              <MDBCard collection className="z-depth-1-half">
                <div className="view zoom">
                  <img
                    src={mussleburgh}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="stripe light">
                  {/* <a href="#!" onClick={this.toggle}>
                    <p className="image-text">
                      Edinburgh to Musselburgh <Fa icon="angle-right" />
                      </p>
                    </a> */}
                     <MDBBtn color="primary" outline rounded name="MUSS" onClick={this.toggle}> Edinburgh to Musselburgh <Fa icon="angle-right" /></MDBBtn>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
              <MDBCard collection className="z-depth-1-half">
                <div className="view zoom">
                  <img
                    src={roslynChapel}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="stripe light">
                  {/* <a href="#!" onClick={this.toggle}>
                    <p className="image-text">
                      Da Vinci Code at Roslin Chapel <Fa icon="angle-right" />
                      </p>
                    </a> */}
                    <MDBBtn color="primary" outline rounded name="DAVINCI" onClick={this.toggle}> Da Vinci Code at Roslin Chapel <Fa icon="angle-right" /></MDBBtn>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
              <MDBCard collection className="z-depth-1-half">
                <div className="view zoom">
                  <img
                    src={linlithgow}
                    style={style}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="stripe light">
                  {/* <a href="#!" onClick={this.toggle}>
                    <p className="image-text">
                      Edinburgh to Falkirk Wheel  <Fa icon="angle-right" />
                      </p>
                    </a> */}
                      <MDBBtn color="primary" outline rounded name="OUT" onClick={this.toggle}> Outlander Adventure <Fa icon="angle-right" /></MDBBtn>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
              <MDBCard collection className="z-depth-1-half">
                <div className="view zoom">
                  <img
                    src={falkirkWheel}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="stripe light">
                  {/* <a href="#!" onClick={this.toggle}>
                    <p className="image-text">
                      Edinburgh to Falkirk Wheel  <Fa icon="angle-right" />
                      </p>
                    </a> */}
                      <MDBBtn color="primary" outline rounded name="ETF" onClick={this.toggle}>  Edinburgh to Falkirk Wheel  <Fa icon="angle-right" /></MDBBtn>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </section>
        <TourModal modalOpen={this.state.modalOpen} toggleModal={this.toggle} sectionToRender={this.state.section} />
        </Container>
        </div>
      );
}

  
}

export default OurTours;