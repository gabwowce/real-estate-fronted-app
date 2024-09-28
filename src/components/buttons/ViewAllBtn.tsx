import React from 'react';

interface ViewAllBtnProps {
    btnValue: string;
}

const ViewAllBtn: React.FC<ViewAllBtnProps> = ({btnValue }) => {
    return (
        <button className='view-btn'>
                {btnValue}
        </button>
    );
};

export default ViewAllBtn;
