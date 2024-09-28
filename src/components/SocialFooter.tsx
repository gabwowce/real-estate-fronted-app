import React from 'react';

const SocialFooter: React.FC = () => {
    return (
        <div className='social-footer-container'>
            <p className='rights'>
                @2023 Estatein. All Rights Reserved.
            </p>
            <p className='terms'>
                Terms & Conditions
            </p>
            <div className='social-media'>
                <img src='assets/fb.png' alt='facebook icon'/>
                <img src='assets/in.png' alt='linkedin icon'/>
                <img src='assets/tw.png' alt='twitter icon'/>
                <img src='assets/yt.png' alt='youtube icon'/>
            </div>
        </div>
    );
};

export default SocialFooter;
