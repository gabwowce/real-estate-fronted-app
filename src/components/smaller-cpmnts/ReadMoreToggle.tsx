import React from 'react';

interface ReadMoreToggleProps {
  text: string;
  isExpanded: boolean;
  onToggle: () => void;
  maxLength: number;
}

const ReadMoreToggle: React.FC<ReadMoreToggleProps> = ({ text, isExpanded, onToggle, maxLength }) => {
  if (text.length <= maxLength) {
    return (
        <p className={isExpanded ? 'expanded' : ''}>
            <span>
                {text}
            </span>
        
        </p>
    ); 
  }

  return (
    <p className={isExpanded ? 'expanded' : ''}>
      <span>
        {isExpanded ? text : `${text.slice(0, maxLength)}...`}
      </span>
      <button className="read-more" onClick={onToggle}>
        {isExpanded ? 'Read less' : 'Read more'}
      </button>
    </p>
  );
};

export default ReadMoreToggle;
