import React, { Component } from "react";
import {
  MDBRow,
  MDBContainer
} from "mdbreact";
import ReactMarkdown from "react-markdown";
import Tour from './Tour'
class OurTours extends Component {
  constructor() {
    super();
    this.state = {
      tours: []
    };
  }

  componentWillMount() {
    fetch("http://content.aweepedal.com/tours")
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          tours: response
        });
      });
  }
  render() {
    return (
      <MDBContainer>
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5">Our Tours</h2>
          <p className="grey-text w-responsive mx-auto mb-5">
          <ReactMarkdown source={this.props.pageData} />
          </p>

          <MDBRow className="text-center">
            {this.state.tours.map((tour, i) => <Tour key={i} blurb={tour.TourBlurb} image={tour.TourImage} name={tour.TourName} bookingUrl={tour.BookingLink}/>)}
          </MDBRow>
        </section>
      </MDBContainer>
    );
  }
}

export default OurTours;
