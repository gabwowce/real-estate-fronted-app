import React from 'react';
import SectionTitle from '../smaller-cpmnts/SectionTitle';
import DataAboutUs from '../../data/data-AboutUs.json';
import IntroStatistics from '../smaller-cpmnts/IntroStatistics';
import ValueCardsContainer from "../about-us/smaller-cpmnts/ValueCardsContainer";


function Values() { 


  return (
    <div className='values-about-us'>
        <section className='title-section'>
            <SectionTitle 
                title={DataAboutUs.ourValues.title}
                value={DataAboutUs.ourValues.value}
                custom="custom"
            />
        </section>
        <section className='value-cards'>
            <ValueCardsContainer/>
        </section>
        
    </div>
   
  );
}

export default Values;