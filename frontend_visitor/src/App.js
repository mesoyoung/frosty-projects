import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbarHeader';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './pages/aboutUs.js';
import WhatWeOffer from './pages/whatWeOffer.js';
import IWantTo from './pages/iWantTo/iWantTo.js';
import BrowsePolicies from './pages/browsePolicies/browsePolicies.js';
import ContactForm from './pages/contactForm.js'
import LandingPage from './pages/landingPage/landingPage.js'


function App() {

  return (
    <div>
      <Router >

        <Navbar />
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/LushGreeneryVisitor' exact component={LandingPage} />
          <Route path='/LushGreeneryVisitor/AboutUs' component={AboutUs} />
          <Route path='/LushGreeneryVisitor/Iwantto' component={IWantTo} />
          <Route path='/LushGreeneryVisitor/WhatWeOffer' component={WhatWeOffer} />
          <Route path='/LushGreeneryVisitor/BrowsePolicies' component={BrowsePolicies} />
          <Route path='/LushGreeneryVisitor/ContactForm' component={ContactForm} />
        </Switch>
      </Router>


    </div>
  );
}

export default App;