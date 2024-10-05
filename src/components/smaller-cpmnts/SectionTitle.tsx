import React from 'react';
import ViewAllBtn from '../buttons/ViewAllBtn';
const separatorIcon = require('../../assets/separator.png');

interface SectionTitleProps {
    title: string;
    value: string;
    btnValue: string;
    custom?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, value, btnValue, custom }) => {
    return (
        <section className={custom ? 'section-title-container custom' : 'section-title-container'}>
            <img src={separatorIcon} alt='separator' />
            <div className='title-container'>
                <h1>{title}</h1>
                <p>{value}</p>
            </div>
            {btnValue &&(
                <ViewAllBtn btnValue={btnValue}/>
            )}
        </section>
    );
};

export default SectionTitle;
