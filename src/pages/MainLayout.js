import React from 'react';
import Header from '../components/Header';
import BeginYourJourney from '../components/BeginYourJourney';
import Footer from '../components/Footer';
import SocialFooter from '../components/SocialFooter';
import ContentRoutes from '../routes/ContentRoutes';

function MainLayout() {
  return (
    <div className="container">
      <div className='content'>
        <Header/>
        <ContentRoutes/>
        <BeginYourJourney/>
        <Footer/>
        <SocialFooter/>
      </div>
    </div>
  );
}

export default MainLayout;
