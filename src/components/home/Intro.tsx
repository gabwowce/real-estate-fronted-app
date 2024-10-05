import React, { useState } from 'react';
import DataJson from "../../data/data.json";
import IntroStatistics from '../smaller-cpmnts/IntroStatistics';
import IntroSlogans from '../home/smaller-cpmnts-home/IntroSlogans';

const discoverIcon = require('../../assets/discover-frame.png');
const linkIcon = require('../../assets/link.png');
const buildingPic = require('../../assets/building.png');

const Intro: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div id='home'>
            <div className='main-home-container'>
                <main className='welcome-container'>
                    <h1>{DataJson.intro.title.split(' ').slice(0, 3).join(' ')}<br />{DataJson.intro.title.split(' ').slice(3).join(' ')}</h1>
                    
                    <p className='secondary-text'>{DataJson.intro.value}</p>
                    <div className='btn-container'>
                        <button className='learn-more-btn'>Learn More</button>
                        <button className='browse-properties-btn'>Browse Properties</button>
                    </div>
                    <div className='statistics-container'>
                        <IntroStatistics/>
                    </div>
                    <img 
                        className={`discover ${isHovered ? 'rotate' : ''}`} 
                        src={discoverIcon}
                        alt='discover'
                    />
                    <a 
                        className='link-btn' 
                        href="#properties"
                        onMouseEnter={() => setIsHovered(true)} 
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <img className='link-btn-pic' alt='link pic' src={linkIcon} />
                    </a>
                </main>
                <img className='building' src={buildingPic} alt='buiding pic'/>
            </div>
           
           
            <section className='slogans-container'>
                <IntroSlogans/>
            </section>

        </div>
    );
};

export default Intro;
