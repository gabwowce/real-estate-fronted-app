import React from 'react';

const fbIcon = require('../assets/fb.png');
const inIcon = require('../assets/in.png');
const twIcon = require('../assets/tw.png');
const ytIcon = require('../assets/yt.png');

const SocialFooter: React.FC = () => {
    return (
        <div className='social-footer-container container'>
            <p className='rights'>
                @2023 Estatein. All Rights Reserved.
            </p>
            <p className='terms'>
                Terms & Conditions
            </p>
            <div className='social-media'>
                <img src={fbIcon} alt='facebook icon'/>
                <img src={inIcon} alt='linkedin icon'/>
                <img src={twIcon} alt='twitter icon'/>
                <img src={ytIcon} alt='youtube icon'/>
            </div>
        </div>
    );
};

export default SocialFooter;
