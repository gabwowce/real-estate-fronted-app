import React, { useEffect, useState } from 'react';
import menuItems from '../types/menuItems'; 
import { Link } from 'react-router-dom';
const logo = require('../assets/Logo_.png');


const Header: React.FC = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('');

    console.log(`activeItem: ${activeItem}`);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        menuItems.forEach(item => {
            const section = document.querySelector<HTMLElement>(item.link); 
            if (section) {
                const sectionOffsetTop = section.getBoundingClientRect().top + currentScrollY;
                
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    
    return (
        <header>
            <nav>
                <ul className='header-logo'>
                    <img src={logo} alt="Logo" />
                </ul>

                <div className='hamburger' onClick={toggleMenu}>
                    <div className={menuOpen ? 'line open' : 'line'}></div>
                    <div className={menuOpen ? 'line open' : 'line'}></div>
                    <div className={menuOpen ? 'line open' : 'line'}></div>
                </div>

                <ul className={menuOpen ? 'menu-items open' : 'menu-items'}>
                    {menuItems.map((item) => (
                        <li key={item.label} className={`menu-item ${activeItem === `${item.link}` ? 'menu-item-active' : ''}`}>
                            <Link 
                                to={item.link} // Use Link instead of a
                                onClick={() => setActiveItem(item.link)} // Set active item
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
