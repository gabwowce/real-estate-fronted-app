import React from 'react';
import realEstateCards from '../../types/realEstateCards';

const PropertiesList: React.FC = () => {
    return (
        <div className="cards-list-contain">
           <div className='card-container'>
            {realEstateCards.map((card, index) => (
                <div key={index} className="card">
                    <img className='prop-img' src={card.pic} alt={card.title} />
                    <div className='property-desc-container'>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                        <p>Price: {card.price}</p>
                        <p>Bedrooms: {card.bedrooms}</p>
                        <p>Bathrooms: {card.bathrooms}</p>
                    </div>
                </div>
            ))}
           </div>
        </div>
    );
};

export default PropertiesList;
