import React, { Component } from 'react'
import { Container } from "mdbreact";
class ThankYou extends Component{
    
    render(){
        if (!this.props.showThanks) {
            return null;
          }
        return (
            <div>
                 <Container>
            <div id="contact">
        <section className="my-5">
        
          <p className="text-center w-responsive mx-auto pb-5">
          Thank you! We will be in touch as soon as we can.
          </p>
        </section>
        </div>
      </Container>

            </div>
        )
    }
}
export default ThankYou;