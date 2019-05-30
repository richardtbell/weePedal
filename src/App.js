import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation'
import ContactUs from './components/ContactUs'
import FooterPage from './components/FooterPage'
import HomePage from './components/HomePage'
import OurPolicy from './components/OurPolicy'
import OurTours from './components/OurTours'
import AboutUs from './components/AboutUs'
import Explore from './components/Explore'
import {
  BrowserRouter as Router,
  Switch,
  Route // for later
} from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      aboutUsText: "",
      ourToursText: "",
      ourPolicyText: "",
      exploreEdinburghText: ""
    };
  }
  componentWillMount() {
    fetch("http://content.aweepedal.com/pages")
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.getPageTextAndSetState(response);
      });
  }

  getPageTextAndSetState = response => {
    const aboutPage = response.filter(res => res.PageTitle === "About Us");
    const toursPage = response.filter(res => res.PageTitle === "Our Tours");
    const ourPolicyPage = response.filter(res => res.PageTitle === "Our Policy");
    const exploreEdinburghPage = response.filter(res => res.PageTitle === "Explore Your Edinburgh");
    this.setState({
      aboutUsText: aboutPage[0].PageBlurb,
      ourToursText: toursPage[0].PageBlurb,
      ourPolicyText: ourPolicyPage[0].PageBlurb,
      exploreEdinburghText: exploreEdinburghPage[0].PageBlurb
    });
  };
  render() {
    return (
      <div className="App">
           <Router>
              <div>
              <Navigation />
                <Switch>
                  <Route path="/" component={HomePage} exact={true} />
                  <Route path="/aboutUs" render={(props) => <AboutUs {...props} pageData={this.state.aboutUsText}/>}/>
                  <Route path="/explore" render={(props) => <Explore {...props} pageData={this.state.exploreEdinburghText}/>}/>
                  <Route path="/ourTours" render={(props) => <OurTours {...props} pageData={this.state.ourToursText} />}/>
                  <Route path="/contactUs" render={(props) => <ContactUs {...props} />} />
                  <Route path="/ourPolicy" render={(props) => <OurPolicy {...props} pageData={this.state.ourPolicyText} />} />
                </Switch>
                <FooterPage />
              </div>
            </Router>
      </div>
    );
  }
 
}

export default App;
