import React from 'react';
import DataJson from "../data/data.json";
import PropertiesList from './smaller-cpmnts/PropertiesList';

const Properties: React.FC = () => {
    return (
        <section id="properties">
            <div className='properties-container'>
                <div className='properties-title-container'>
                    <h1>{DataJson.realEstate.title}</h1>
                    <p>{DataJson.realEstate.value}</p>
                </div>
                <div className='properties-list'>
                    <PropertiesList/>
                </div>
            </div>
        </section>
    );
};

export default Properties;
