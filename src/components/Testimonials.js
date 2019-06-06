import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTestimonial,  MDBIcon } from "mdbreact";
import ReactMarkdown from 'react-markdown'

class TestimonialsPage extends Component {

  constructor(){
    super()
    this.state = {
      testimonials: []
    }
  }

  componentDidMount(){
    fetch("https://content.aweepedal.com/testimonials")
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          testimonials: response
        })
      });
  }
  render(){
    if(!this.state.testimonials){
      return(
        <div></div>
      )
    }
    return(
      <MDBContainer>
      <section className="team-section text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5">
            Testimonials
          </h2>
          <p className="dark-grey-text w-responsive mx-auto mb-5">
           
          </p>

          <MDBRow className="text-center">

            {this.state.testimonials.map(testimonial => {
              return(
                <MDBCol md="4" className="mb-md-0 mb-5">
               
                <p className="font-weight-normal dark-grey-text">
                  <ReactMarkdown source={testimonial.testimonial_blurb} />
                </p>
                <h6 className="font-weight-bold blue-text my-3">
                  <ReactMarkdown source={testimonial.reviewer_name_and_location} />
                </h6>
               
            </MDBCol>
              )
            })}
            
          </MDBRow>
        </section>
    </MDBContainer>
    )
  }
}


export default TestimonialsPage;