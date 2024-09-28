import React from 'react';
import ReadMoreToggle from '../smaller-cpmnts/ReadMoreToggle';

const ClientFeedbackCard = (card: any, index: number, expandedIndex: number | null, handleReadMore: (index: number) => void) => {
    const isExpanded = expandedIndex === index;
    const maxLength = 150;

  return (
    <div key={index} className={`feedback-card ${isExpanded ? 'expanded' : ''}`}>
         
      <div className="stars-container">
        {[...Array(card.stars)].map((_, i) => (
          <img key={i} src='assets/star.png' alt="star icon" />
        ))}
      </div>
      <h3>{card.title}</h3>
      <ReadMoreToggle 
        text={card.value} 
        isExpanded={isExpanded} 
        onToggle={() => handleReadMore(index)} 
        maxLength={maxLength} 
        
      />
      <div className='client-info-container'>
        <img src={card.profilePic}/>
        <div className='client-info'>
            <h4 className='name'>{card.clientName}</h4>
            <h4 className='location'>{card.clientLocation}</h4>
        </div>
      </div>
    </div>
  );
};


export default ClientFeedbackCard;
