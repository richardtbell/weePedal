import React from 'react'
import { Container} from 'mdbreact'
import ReactMarkdown from "react-markdown";
const Explore = ({pageData}) =>{

    return(
        <Container>
        <div id="about">
          <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
              Explore your Edinburgh
            </h2>
            <p className="grey-text text-center w-responsive mx-auto mb-5">
            <ReactMarkdown source={pageData} /> 
            </p>
          </section>
        </div>
      </Container>
    )
}

export default Explore