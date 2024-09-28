import React from 'react';
import DataJson from "../data/data.json";
import PaginatedList from './smaller-cpmnts/PaginatedList';
import RealEstateCard from './cards/RealEstateCard '; 
import SectionTitle from './smaller-cpmnts/SectionTitle';
import realEstateCards from '../types/realEstateCards'; 


const Properties: React.FC = () => {
    return (
        <section id="properties">
            <div className='properties-container'>
               
                <SectionTitle
                    title={DataJson.realEstate.title}
                    value={DataJson.realEstate.value}
                    btnValue={DataJson.realEstate.viewBtn}
                />

                <div className='properties-list'>
                <PaginatedList
                    items={realEstateCards} 
                    renderItem={RealEstateCard} 
                    />
                </div>
            </div>
        </section>
    );
};

export default Properties;
