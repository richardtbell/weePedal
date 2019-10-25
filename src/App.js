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
import Testimonials from './components/Testimonials'
import {
  BrowserRouter as Router,
  Switch,
  Route // for later
} from 'react-router-dom'
import pages from './content/pages'

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
  componentDidMount() {
        this.getPageTextAndSetState(pages);
  }

  getPageTextAndSetState = response => {
    const aboutPage = response.find(res => res.PageTitle === "About Us");
    const toursPage = response.find(res => res.PageTitle === "Our Tours");
    const ourPolicyPage = response.find(res => res.PageTitle === "Our Policy");
    const exploreEdinburghPage = response.find(res => res.PageTitle === "Explore Your Edinburgh");
    this.setState({
      aboutUsText: aboutPage.PageBlurb,
      ourToursText: toursPage.PageBlurb,
      ourPolicyText: ourPolicyPage.PageBlurb,
      exploreEdinburghText: exploreEdinburghPage.PageBlurb
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
                  <Route path="/testimonials" render={(props) => <Testimonials {...props} />} />
                </Switch>
                <FooterPage />
              </div>
            </Router>
      </div>
    );
  }
 
}

export default App;
