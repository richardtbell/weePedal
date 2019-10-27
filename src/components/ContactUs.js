import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import "../App.css";
import ValidateForm from './ValidateForm'
import ThankYou from './ThankYou'
class ContactPage extends Component {
  state = {
    showForm: true,
    showThanks: false
  };


  toggleFormAndThanks = () =>{
    this.setState({
        showForm: !this.state.showForm,
        showThanks: !this.state.showThanks
    });
}
 

  render() {
    return (
      <MDBContainer>
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Contact us
          </h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">
           Get in touch with us about bespoke tours and more information about A Wee Pedal and how we can get you onto your cycling journey.
          </p>
          <ValidateForm showForm={this.state.showForm} toggleFormAndThanks={this.toggleFormAndThanks}/>
        </section>
        <ThankYou showThanks={this.state.showThanks} />
      </MDBContainer>
    );
  }
}

export default ContactPage;
