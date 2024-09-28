import React from 'react';
import DataJson from "../data/data.json";
import SectionTitle from './smaller-cpmnts/SectionTitle';
import PaginatedList from './smaller-cpmnts/PaginatedList';
import FAQestions from '../types/FAQestions';
import FAQestionsCard from './cards/FAQestionsCard';

const FAQ: React.FC = () => {
    return (
        <section id="faq">
            <div className='faq-container'>

                <SectionTitle
                    title={DataJson.FAQ.title}
                    value={DataJson.FAQ.value}
                    btnValue={DataJson.FAQ.viewBtn}
                />

                <div className='faq-list'>
                    <PaginatedList
                        items={FAQestions} 
                        renderItem={FAQestionsCard} 
                    />
                
                </div>
            </div>
        </section>
    );
};

export default FAQ;
