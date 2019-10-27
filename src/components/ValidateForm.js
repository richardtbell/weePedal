import React from "react";
import { Row, Col, MDBBtn } from "mdbreact";
import * as api from "../api";
import ReCAPTCHA from "react-google-recaptcha";

class ValidateForm extends React.Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    captchaStatus: "",
    showError: false
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
    if (this.getValidationState()) {
      api.sendEmail(this.state.name, this.state.email, this.state.subject, this.state.message)
      .then(api.sendAutoResponse(this.state.email))
      .then(this.props.toggleFormAndThanks());
    }
    else{
      this.toggleErrorMessage();
    }
  };

  changeHandler = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  getValidationState = () => {
    return this.isEmailValid() && this.state.captchaStatus ? true : false;
  };

  isEmailValid = () => {
    // eslint-disable-next-line no-control-regex
    const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    return this.state.email.length>0 && emailRegex.test(this.state.email) ? true : false;
   
  };
  isNameValid = () => {
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    return nameRegex.test(this.state.name) ? true : false;
  };
  isSubjectValid = () => {
    const subjectRegex = /^[a-zA-Z ]{2,30}$/;
    return subjectRegex.test(this.state.subject) ? true : false;
  }
  isMessageValid = () => {
    // eslint-disable-next-line no-useless-escape
    const messageRegex = /^[a-zA-Z0-9!*@.()\/+-]{2,250}$/;
    return messageRegex.test(this.state.message) ? true : false;
  }
  verifyCaptcha = value => {
    api.verifyCaptcha(value).then(res => {
      this.setState({
        captchaStatus: res
      });
    });
  };
  toggleAlert = () => {
    this.setState({
      showError: !this.state.showError
    });
  }
  toggleErrorMessage = () => {
    this.setState({
      showError: !this.state.showError
    })
  }

  render() {
    if (!this.props.showForm) {
      return null;
    }
    return (
      <div>
      {/* <ErrorMessage show={this.state.showError} toggleErrorMessage={this.toggleErrorMessage}/> */}
          <Row className="my-6">
            <Col>
              <form
                className="needs-validation"
                onSubmit={this.submitHandler}
              >
                <Row>
                  <div className="md-form mb-0 col-md-6 mb-3">
                    
                    <input
                      value={this.state.name}
                      name="name"
                      onChange={this.changeHandler}
                      type="text"
                      id="defaultFormRegisterNameEx"
                      className="form-control"
                      placeholder="Your name"
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">Please check name</div>
                  </div>
                  
                  <div className="md-form mb-0 col-md-6 mb-3">
                  
                    <input
                      value={this.state.email}
                      onChange={this.changeHandler}
                      type="email"
                      id="defaultFormRegisterConfirmEx3"
                      className="form-control"
                      name="email"
                      placeholder="Your Email address"
                      required
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">Please check email address</div>
                  </div>
                </Row>
                <Row>
                <div className="md-form mb-0 col-md-12 mb-3">
                    <input
                      value={this.state.subject}
                      name="subject"
                      onChange={this.changeHandler}
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>

                    <div className="invalid-feedback">Please check subject</div>
                  </div>
                </Row>
                <Row>
                <div className="md-form mb-0 col-md-12 mb-3">
                    <input
                      value={this.state.message}
                      name="message"
                      onChange={this.changeHandler}
                      type="text"
                      className="form-control"
                      placeholder="Your Message"
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                </Row>
                
                <ReCAPTCHA
                ref="recaptcha"
                sitekey="6LdXpqYUAAAAAGDUJOqXVZrDWCVTFqwRCP9iwQxH"
                onChange={this.verifyCaptcha}
              />
                 <MDBBtn outline color="indigo" type="submit">
            Book Tour
          </MDBBtn>
              </form>
            </Col>
          </Row>
          </div>
     
    );
  }
}

export default ValidateForm;
