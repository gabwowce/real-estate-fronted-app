import React from 'react';
import SectionTitle from '../smaller-cpmnts/SectionTitle';
import DataAboutUs from '../../data/data-AboutUs.json';
import IntroStatistics from '../smaller-cpmnts/IntroStatistics';
const homePic = require('../../assets/intro-home.png');

function IntroAboutUs() { 


  return (
    <div className='intro-about-us'>
        <section className='title-section'>
            <SectionTitle 
                title={DataAboutUs.ourJourney.title}
                value={DataAboutUs.ourJourney.value}
                custom="custom"
            />
            <div className='statistics-container'>
                        <IntroStatistics/>
            </div>
        </section>
        <img className='house-pic' src={homePic} alt='hause picture'/>
        
    </div>
   
  );
}

export default IntroAboutUs;