import React, { Component } from 'react'
import { Container, Row, Col } from "mdbreact";
class ErrorMessage extends Component{
    
    render(){
        if (!this.props.show) {
            return null;
          }
        return (
            <div>
                 <Container>
            <div id="contact">
        <section className="my-5">
        <div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>
        </section>
        </div>
      </Container>

            </div>
        )
    }
}
export default ErrorMessage;