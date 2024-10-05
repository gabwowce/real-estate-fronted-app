import React from 'react';
import ValueCard from '../cards/ValueCard';
import valueCard from "../../../types/aboutUs/valueCards";
import { slogan11, slogan22, slogan33, slogan44 } from '../../../assets/images';

type IconKeys = 'slogan11' | 'slogan22' | 'slogan33' | 'slogan44';

const ValueCardsContainer: React.FC =() =>{
    const icons = {
        slogan11,
        slogan22,
        slogan33,
        slogan44,
    };
    return(
        <div className='value-cards-container'>
        {
            valueCard.map((card) => (
                <ValueCard
                   
                    pic={icons[card.icon as IconKeys]}
                    title={card.title}
                    value={card.value}
                />
            ))
        }
    </div>
    );
}



export default ValueCardsContainer;