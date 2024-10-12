import React from 'react';

interface ValueCardProps {
    pic: string;
    title: String;
    value: String;
}

const ValueCard: React.FC<ValueCardProps> = ({pic,title,value}) => {

  return (
    <div className={`value-card`}>
         
         <div className='title-container'>
           <img className='value-card-img' src={pic} alt="value icon"/>
           <h3 className='value-card-title'>{title}</h3>
         </div>
         <h5 className='value-card-value'>
           {value}
         </h5>
         
       </div>
   
  );
};


export default ValueCard;
