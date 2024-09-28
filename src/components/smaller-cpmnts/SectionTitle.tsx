import React from 'react';
import ViewAllBtn from '../buttons/ViewAllBtn';

interface SectionTitleProps {
    title: string;
    value: string;
    btnValue: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, value, btnValue }) => {
    return (
        <section className='section-title-container'>
            <img src='/assets/separator.png' alt='separator' />
            <div className='title-container'>
                <h1>{title}</h1>
                <p>{value}</p>
            </div>
            <ViewAllBtn btnValue={btnValue}/>
        </section>
    );
};

export default SectionTitle;
