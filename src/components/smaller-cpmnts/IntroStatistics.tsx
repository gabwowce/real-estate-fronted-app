import React from 'react';
import introStatistics from '../../types/introStatistics';

const IntroStatistics: React.FC = () => {
    return (
        <div className='intro-statistics'>
            {introStatistics.map((statistic, index) => (
                <div key={index} className='intro-statistic'>
                    <h3>{statistic.title}</h3>
                    <p>{statistic.value}</p>
                </div>
            ))}
        </div>
    );
};

export default IntroStatistics;