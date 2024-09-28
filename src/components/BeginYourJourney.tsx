import React from 'react';
import DataJson from "../data/data.json";

const BeginYourJourney: React.FC = () => {
    return (
        <section className='begin-your-journey'>
            <div className='left-pic'>
                <img src='../../assets/abstract-left.png' alt='abstract left'  />
            </div>
            
           
            <div className='text'>
                <h1>{DataJson.beginYourJourney.title}</h1>
                <p>{DataJson.beginYourJourney.value}</p>
            </div>
            <button className='explore-btn'>Explore Properties</button>
            <div className='right-pic'>
                <img src='../../assets/abstract-right.png' alt='abstract right' />
            </div>
            
        </section>

    );
};


export default BeginYourJourney;
