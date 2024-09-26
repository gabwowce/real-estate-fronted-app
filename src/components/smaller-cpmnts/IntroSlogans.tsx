import React from 'react';
import introSlogans from '../../types/introSlogans';


const IntroSlogans: React.FC = () => {
    return (
        <div className="intro-slogans">
            {introSlogans.map((slogan, index) => (
                <div key={index} className="intro-slogan">
                    <img className="slogan-icon" src={slogan.icon} alt="slogan icon" />
                    

                    <svg
                        className="link-icon"
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.375 27.625L27.625 6.375M27.625 6.375L11.6875 6.375M27.625 6.375V22.3125"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <h3>{slogan.title}</h3>
                </div>
            ))}
        </div>
    );
};


export default IntroSlogans;