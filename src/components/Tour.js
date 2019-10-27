import React from "react";
import { MDBCol, MDBCardBody, MDBBtn, MDBView, MDBMask } from "mdbreact";
import ReactMarkdown from "react-markdown";
const Tour = props => {
  const imageUrl = "https://content.aweepedal.com" + props.image.url;
  return (
    <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
      <MDBView className="overlay rounded z-depth-1" waves>
        <img src={imageUrl} alt="" className="img-fluid" />
        <a href="#!">
          <MDBMask overlay="white-slight" />
        </a>
      </MDBView>

      <MDBCardBody className="pb-0">
        <h4 className="font-weight-bold my-3">{props.name}</h4>
        <p className="grey-text">
          <ReactMarkdown source={props.blurb} />
        </p>
        <a href={props.bookingUrl} target="_blank" rel="noopener noreferrer">
          <MDBBtn outline color="indigo">
            Book Tour
          </MDBBtn>
        </a>
      </MDBCardBody>
    </MDBCol>
  );
};

export default Tour;
