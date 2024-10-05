import React from 'react';
import DataJson from "../../data/data.json";
import SectionTitle from '../smaller-cpmnts/SectionTitle';
import PaginatedList from '../smaller-cpmnts/PaginatedList';
import clientCmments from '../../types/home/clientCmments';
import ClientFeedbackCard from '../home/cards-home/ClientFeedbackCard';

const ClientFeedback: React.FC = () => {
    return (
        <section id="client-feedback">
            <div className='feedback-container'>
            
                <SectionTitle
                    title={DataJson.clientFeedback.title}
                    value={DataJson.clientFeedback.value}
                    btnValue={DataJson.clientFeedback.viewBtn}
                />

                <div className='feedback-list'>
                    <PaginatedList
                        items={clientCmments} 
                        renderItem={ClientFeedbackCard} 
                    />
                  
                </div>
            </div>
        </section>
    );
};

export default ClientFeedback;
