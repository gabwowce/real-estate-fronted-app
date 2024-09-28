import React, { useState, useEffect, useRef  } from 'react';
import realEstateCards from '../../types/realEstateCards';
import { ReactComponent as PrevIcon } from '../../assets/prev.svg';
import { ReactComponent as NextIcon } from '../../assets/next.svg';
import { realEstate1, realEstate2,realEstate3, badroom, bathroom, propType } from '../../assets/images';

// const badroom = require('../../assets/badroom.png');
// const bathroom = require('../../assets/bathroom.png');
// const propType = require('../../assets/propType.png');

type IconKeys = 'realEstate1' | 'realEstate2' | 'realEstate3' ;

const PropertiesList: React.FC = () => {
    const icons = {
        realEstate1,
        realEstate2,
        realEstate3
    };
    const [currentPage, setCurrentPage] = useState(1);
    const [propertiesPerPage, setPropertiesPerPage] = useState(3);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = realEstateCards.slice(indexOfFirstProperty, indexOfLastProperty);

    const totalPages = Math.ceil(realEstateCards.length / propertiesPerPage);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleReadMore = (index: number) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 918) {
                setPropertiesPerPage(1); 
            } else if (window.innerWidth < 1394) {
                setPropertiesPerPage(2); 
            } else {
                setPropertiesPerPage(3); 
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='cards-list-container'>
            {/* <div className="cards-list-contain">
                {currentProperties.map((card, index) => {
                    const isExpanded = expandedIndex === index;
                    return (
                        <div key={index} className={`card ${isExpanded ? 'expanded' : ''}`}>
                             <img className="prop-img" src={icons[card.pic as IconKeys]} alt="property pic" />
                            <div className="property-desc-container">
                                <h3>{card.title}</h3>
                                <p className={isExpanded ? 'expanded' : ''}>
                                    <span>
                                        {isExpanded ? card.description : `${card.description.slice(0, 60)}...`}
                                    </span>
                                    <button className="read-more" onClick={() => handleReadMore(index)}>
                                        {isExpanded ? 'Read less' : 'Read more'}
                                    </button>
                                </p>
                            </div>
                            <div className="prop-details">
                                <div className="detail">
                                    <img src={badroom} alt="bed icon" /> 
                                    <p>{`${card.bedrooms}-Bedroom${card.bedrooms > 1 ? 's' : ''}`}</p>
                                </div>
                                <div className="detail">
                                    <img src={bathroom} alt="bath icon" /> 
                                    <p>{`${card.bathrooms}-Bathroom${card.bathrooms > 1 ? 's' : ''}`}</p>
                                </div>
                                <div className="detail">
                                    <img src={propType} alt="type icon" /> 
                                    <p>Villa</p>
                                </div> 
                            </div>
                            <div className='price-container'>
                                <p>Price</p>
                                <h3>${new Intl.NumberFormat('en-US').format(card.price)}</h3>
                            </div>
                            
                            <button className='view-btn-container'>View Property Details</button>
                        </div>
                    );
                })}
            </div>

            <div className="pagination">

                <span className='total-pages'>
                    <span className='current-page'>{String(currentPage).padStart(2, '0')} </span>
                    {`of ${String(totalPages).padStart(2, '0')}`}
                </span>
                <div className='pagination-btn-container'>
                    <button className='prev' onClick={handlePrev} disabled={currentPage === 1}>
                        <PrevIcon />
                    </button>
                
                    <button className='next' onClick={handleNext} disabled={currentPage === totalPages}>
                        <NextIcon />
                    </button>
                </div>
                
            </div> */}
        </div>
    );
};

export default PropertiesList;
