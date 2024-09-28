import React from 'react';
import footerColumns from '../types/footerColumns'; 
import { ReactComponent as SendIcon } from '../assets/send.svg';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className='logo-input-group'>
                <ul className='logo'>
                    <a href="#home"><img src="/assets/Logo_.png" alt="Logo" /></a>
                </ul>
                <div className="email-input-container">
                    <input className="email-input" placeholder='Enter Your Email' />
                    <span className="input-icon">
                        <img src="/assets/email.png" alt="Email Icon" />
                    </span>
                    <SendIcon className="submit-button"/>
                </div>
            </div>
            <div className="footer-columns">
                {footerColumns.map((column, index) => (
                    <div className="footer-column" key={index}>
                        <h3>{column.title}</h3>
                        <ul>
                            {column.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <a href="#">{link}</a> 
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
