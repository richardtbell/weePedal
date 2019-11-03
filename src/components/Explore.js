import React from 'react'
import { Container} from 'mdbreact'
import ReactMarkdown from "react-markdown";
import { Image } from '../StyledComponents/StyledComponents';
import ExploreEdinburgh1 from '../img/ExploreEdinburgh1.jpg'
import ExploreEdinburgh2 from '../img/ExploreEdinburgh2.jpg'
// function Image(props) {
  
//   return (
//       // eslint-disable-next-line jsx-a11y/alt-text
//       <img {...props} style={{height:'200px'}} className="column"/>
//   )
// }

const Explore = ({pageData}) =>{

    return(
        <Container>
        <div id="about">
          <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
              Explore your Edinburgh
            </h2>
            <p className="grey-text text-center w-responsive mx-auto mb-5">
            <p class="grey-text text-center w-responsive mx-auto mb-5">
              <p>
                On booking this bespoke ride, we shall discus where you would like to ride from and to where. 
              </p>
              <p>
                I will show you quieter routes and take advantage of the extensive cycle path network in Edinburgh. 
              </p>
              <p>
                Popular rides usually start from your home and learn how to get onto a cycle path for an average ride of 2 hours.
              </p>
              <p>
                Contact us to book a time.
              </p>
            </p>
            <Image height="400" src={ExploreEdinburgh1} alt="Scenic picture"/>
            <Image height="400" src={ExploreEdinburgh2} alt="Scenic picture"/>

            
            </p>

          </section>

        </div>
      </Container>
    )
}

export default Explore