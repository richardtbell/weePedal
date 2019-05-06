import React from 'react';
import { Container, Footer } from 'mdbreact';

class FooterPage extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       modal: false,
    //     };
    
    //   }
    //   toggle = () => {
    //     this.setState({
    //       modal: !this.state.modal
    //     });
    //   };
    render(){
        return(
            <Footer color="light-blue lighten-1" className="font-small pt-4 mt-4 foot">
                <Container fluid className="text-center text-md-left">
                    {/* <Row>
                    <Col sm="6">
                        <h5 className="title">Footer Content</h5>
                        <p>Here you can use rows and columns here to organize your footer content.</p>
                    </Col>
                    <Col sm="6">
                        <h5 className="title">Links</h5>
                        <ul>
                        <li className="list-unstyled"><a href="#!">Link 1</a></li>
                        <li className="list-unstyled"><a href="#!">Link 2</a></li>
                        <li className="list-unstyled"><a href="#!">Link 3</a></li>
                        <li className="list-unstyled"><a href="#!">Link 4</a></li>
                        </ul>
                    </Col>
                    </Row> */}
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