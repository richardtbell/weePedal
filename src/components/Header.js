import React, {Component} from 'react'
import MediaQuery from 'react-responsive';
import logoPedal from '../img/logoPedal.png'
import { MDBBtn} from 'mdbreact'
class Header extends Component {

    render(){
        const padding ={
            paddingTop: '130px',
            height: '600px'
          }

          const paddingMobile ={
            paddingTop: '200px'
          }
        return(
            <div >
                <header className="App-header-image">
                <MediaQuery query="(min-device-width: 1224px)">
                <img src={logoPedal}  style={padding} className="img-fluid"  height="220"/>
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">
                <img src={logoPedal} style={paddingMobile} className="img-fluid"  height="220"/>
                </MediaQuery>
                 <MDBBtn outline color="indigo">
                   Find Out More
                 </MDBBtn>
                {/* <Schrollchor to="#about" animate={{duration: 600, offset:-90}}>
                  <Button outline color="white">Learn More</Button>
                  </Schrollchor> */}
                </header>
            </div>
        )
    }
}

export default Header