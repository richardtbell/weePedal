import React , { useState, Component }from "react";
import { MDBContainer, Container, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter,Fa, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";
import falkirkWheel from '../img/the-falkirk-wheel-james-lamb.jpg'
import roslynChapel from '../img/roslynChapel.jpg'
import craigmillar from '../img/Craigmillar.jpg'
import mussleburgh from '../img/musselburgh.jpg'
import TourModal from './TourModal'
class OnlineBooking extends Component{

render(){
    const textColor ={
        colour: '#29b6f6'
    }
    return (
        <Container>
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Online Booking
          </h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
    
         
        </section>
        </Container>
      );
}

  
}

export default OnlineBooking;