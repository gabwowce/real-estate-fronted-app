import React from 'react';
import './styles/main.scss';
import Header from './components/Header';
import Intro from './components/Intro';
import Properties from './components/Properties';
import ClientFeedback from './components/ClientFeedback';
import FAQ from './components/FAQ';
import BeginYourJourney from './components/BeginYourJourney';
import Footer from './components/Footer';
import SocialFooter from './components/SocialFooter';

function App() {
  return (
    <div className="container">
      <div className='content'>
        <Header/>
        <Intro/>
        <Properties/>
        <ClientFeedback/>
        <FAQ/>
        <BeginYourJourney/>
        <Footer/>
        <SocialFooter/>
      </div>
    </div>
  );
}

export default App;
