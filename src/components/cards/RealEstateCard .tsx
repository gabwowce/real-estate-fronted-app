import React from 'react';
import ReadMoreToggle from '../smaller-cpmnts/ReadMoreToggle';

const RealEstateCard = (card: any, index: number, expandedIndex: number | null, handleReadMore: (index: number) => void) => {
  const isExpanded = expandedIndex === index;
  const maxLength = 60;

  return (
    <div key={index} className={`card ${isExpanded ? 'expanded' : ''}`}>
      <img className="prop-img" src={card.pic} alt="property pic" />
      <div className="property-desc-container">
        <h3>{card.title}</h3>
        <ReadMoreToggle 
            text={card.description} 
            isExpanded={isExpanded} 
            onToggle={() => handleReadMore(index)} 
            maxLength={maxLength} 
        />
      </div>
      <div className="prop-details">
        <div className="detail">
          <img src="assets/badroom.png" alt="bed icon" />
          <p>{`${card.bedrooms}-Bedroom${card.bedrooms > 1 ? 's' : ''}`}</p>
        </div>
        <div className="detail">
          <img src="assets/bathroom.png" alt="bath icon" />
          <p>{`${card.bathrooms}-Bathroom${card.bathrooms > 1 ? 's' : ''}`}</p>
        </div>
        <div className="detail">
          <img src="assets/propType.png" alt="type icon" />
          <p>Villa</p>
        </div>
      </div>
      <div className="price-container">
        <p>Price</p>
        <h3>${new Intl.NumberFormat('en-US').format(card.price)}</h3>
      </div>
      <button className="view-btn-container">View Property Details</button>
    </div>
  );
};


export default RealEstateCard;
