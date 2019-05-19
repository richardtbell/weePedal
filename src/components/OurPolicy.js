import React, { Component } from "react";
import { Container } from "mdbreact";
import ReactMarkdown from "react-markdown";
class OurPolicy extends Component {
  render() {
    return (
      <div id="ourpolicy">
        <Container>
          <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
              Our Policy
            </h2>
            <p className="grey-text text-center w-responsive mx-auto mb-5">
            <ReactMarkdown source={this.props.pageData} />
            </p>
          </section>
        </Container>
      </div>
    );
  }
}

export default OurPolicy;
