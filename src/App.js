import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import Header from './components/Header'
import OurTours from './components/OurTours'
import AboutUs from './components/AboutUs'
import OnlineBooking from './components/OnlineBooking'
import ContactPage from './components/ContactUs'
import FooterPage from './components/FooterPage'
import { Footer } from 'mdbreact';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Navigation />
     
      <Header />
      <AboutUs />
       <OurTours />
       <OnlineBooking />
       <ContactPage />
       <FooterPage />
    </div>
  );
}

export default App;
