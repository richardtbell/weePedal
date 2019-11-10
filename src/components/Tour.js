import React from "react";
import { MDBCol, MDBCardBody, MDBBtn, MDBView, MDBMask } from "mdbreact";
import ReactMarkdown from "react-markdown";
const Tour = props => {
  
  return (
    <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
      <img src={props.image.src} alt={props.image.alt} className="img-fluid" />

      <MDBCardBody className="pb-0">
        <h4 className="font-weight-bold my-3">{props.name}</h4>
        <p className="grey-text">
          <ReactMarkdown source={props.blurb} />
        </p>
        {
          props.bookingUrl &&
        (<a href={props.bookingUrl} target="_blank" rel="noopener noreferrer">
          <MDBBtn outline color="indigo">
            Book Tour
          </MDBBtn>
        </a>) 
        }
      </MDBCardBody>
    </MDBCol>
  );
};

export default Tour;
