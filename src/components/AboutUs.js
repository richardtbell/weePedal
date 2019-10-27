import React, { Component } from "react";
import { Container } from "mdbreact";

import ReactMarkdown from "react-markdown";
function Image(props) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img {...props} style={{ height: "500px", paddingBottom: "100px" }} className="columnCenter" />;
}
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
              <ReactMarkdown source={this.props.pageData} renderers={{image: Image}} />
            </p>
          </section>
        </div>
      </Container>
    );
  }
}

export default AboutUs;
