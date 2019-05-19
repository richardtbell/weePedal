import React from 'react';
import { Container, Footer } from 'mdbreact';

class FooterPage extends React.Component {

    render(){
        return(
            <Footer className="font-small mt-4 foot">
                <Container fluid className="text-center text-md-left">
                
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://jciedinburgh.org.uk/"> A Wee Pedal </a>
                        
                    </Container>
                    <Container fluid>
                        {/* <a href='#!' onClick={this.toggle} >Terms and Conditions</a>
                        <TermsAndConditions show={this.state.modal} close={this.toggle} /> */}
                        
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;