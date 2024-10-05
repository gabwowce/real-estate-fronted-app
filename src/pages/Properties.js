import React from 'react';
import Intro from '../components/home/Intro';
import PropertiesCards from '../components/home/PropertiesCards';
import ClientFeedback from '../components/home/ClientFeedback';
import FAQ from '../components/home/FAQ';

function Properties() { 


  return (
    <>
        <Intro/>
        <PropertiesCards/>
        <ClientFeedback/>
        <FAQ/>
    </>
   
  );
}

export default Properties;