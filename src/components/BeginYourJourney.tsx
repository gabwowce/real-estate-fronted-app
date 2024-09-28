import React from 'react';
import DataJson from "../data/data.json";
const abstractRight = require('../assets/abstract-right.png');
const abstractRLeft = require('../assets/abstract-left.png');

const BeginYourJourney: React.FC = () => {
    return (
        <section className='begin-your-journey'>
            <div className='left-pic'>
                <img src={abstractRLeft} alt='abstract left'  />
            </div>
            
           
            <div className='text'>
                <h1>{DataJson.beginYourJourney.title}</h1>
                <p>{DataJson.beginYourJourney.value}</p>
            </div>
            <button className='explore-btn'>Explore Properties</button>
            <div className='right-pic'>
                <img src={abstractRight} alt='abstract right' />
            </div>
            
        </section>

    );
};


export default BeginYourJourney;
