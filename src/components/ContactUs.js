import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
          <ValidateForm showForm={this.state.showForm} toggleFormAndThanks={this.toggleFormAndThanks}/>
          
          {/* <MDBRow>
            <MDBCol md="12" className="md-0 mb-5">
              <form>
                <MDBRow>
                  <MDBCol md="6">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="text"
                        id="contact-name"
                        label="Your name"
                      />
                    </div>
                  </MDBCol>
                  <MDBCol md="6">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="text"
                        id="contact-email"
                        label="Your email"
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="12">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="text"
                        id="contact-subject"
                        label="Subject"
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="12">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="textarea"
                        id="contact-message"
                        label="Your message"
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
              </form>
              <div className="text-center text-md-center">
                <MDBBtn outline color="indigo">
                  Send
                </MDBBtn>
              </div>
            </MDBCol>
          </MDBRow> */}
        </section>
        <ThankYou showThanks={this.state.showThanks} />
      </MDBContainer>
    );
  }
}

export default ContactPage;
