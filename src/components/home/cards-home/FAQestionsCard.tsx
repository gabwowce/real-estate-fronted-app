import React from 'react';
import ReadMoreToggle from '../../smaller-cpmnts/ReadMoreToggle';

const FAQestionsCard = (card: any, index: number, expandedIndex: number | null, handleReadMore: (index: number) => void) => {
    const isExpanded = expandedIndex === index;
    const maxLength = 150;

  return (
    <div key={index} className={`faq-card ${isExpanded ? 'expanded' : ''}`}>
         
      
      <h3>{card.question}</h3>
      <ReadMoreToggle 
        text={card.answer} 
        isExpanded={isExpanded} 
        onToggle={() => handleReadMore(index)} 
        maxLength={maxLength} 
      />
      <button>
        Read More
      </button>
      
    </div>
  );
};


export default FAQestionsCard;
