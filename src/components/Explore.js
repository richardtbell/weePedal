import React from 'react'
import { Container} from 'mdbreact'
import ReactMarkdown from "react-markdown";
import {MDBCol, MDBRow, MDBView} from 'mdbreact'
const Explore = ({pageData}) =>{

  function Image(props) {
    
    return (

      
        <img {...props} style={{height:'200px'}} className="column"/>

      
    )
  }
    return(
        <Container>
        <div id="about">
          <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
              Explore your Edinburgh
            </h2>
            <p className="grey-text text-center w-responsive mx-auto mb-5">
            <ReactMarkdown source={pageData}  renderers={{image: Image}} /> 
            </p>
          </section>
        </div>
      </Container>
    )
}

export default Explore