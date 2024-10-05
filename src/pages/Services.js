import React from 'react';
import Intro from '../components/home/Intro';
import PropertiesCards from '../components/home/PropertiesCards';
import ClientFeedback from '../components/home/ClientFeedback';
import FAQ from '../components/home/FAQ';

function Services() { 


  return (
    <>
        <Intro/>
        <PropertiesCards/>
        <ClientFeedback/>
        <FAQ/>
    </>
   
  );
}

export default Services;