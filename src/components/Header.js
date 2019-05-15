import React, {Component} from 'react'
import MediaQuery from 'react-responsive';
import pedalLogo from '../img/pedalLogo.jpeg'
import Schrollchor from 'react-scrollchor'
import headerImage from '../img/pedalLogo.jpeg'
class Header extends Component {

    render(){
        const padding ={
            paddingTop: '130px'
          }
        return(
            <div >
                <header className="">
                <MediaQuery query="(min-device-width: 1224px)">
                <img src={headerImage} style={padding}className="img-fluid"  height="220"/>
                </MediaQuery>
                {/* <img src={bonoboLogo} className="img-fluid"  height="220"/> */}
                <MediaQuery query="(max-device-width: 1224px)">
                <img src={headerImage} style={padding} className="img-fluid"  height="220"/>
                </MediaQuery>
                </header>
            </div>
        )
    }
}

export default Header