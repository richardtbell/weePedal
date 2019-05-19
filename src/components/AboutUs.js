import React, { Component } from "react";
import { Container } from "mdbreact";

import ReactMarkdown from "react-markdown";

class AboutUs extends Component {
  render() {
    return (
      <Container>
        <div id="about">
          <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
              About Us
            </h2>
            <p className="grey-text text-center w-responsive mx-auto mb-5">
            <ReactMarkdown source={this.props.pageData} />
            </p>
          </section>
        </div>
      </Container>
    );
  }
}

export default AboutUs;
