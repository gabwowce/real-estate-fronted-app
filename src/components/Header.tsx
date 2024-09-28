import React, { useEffect, useState } from 'react';
import menuItems from '../types/menuItems'; 
const logo = require('../assets/Logo_.png');


const Header: React.FC = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);

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
                        <li key={item.label} className="menu-item">
                            <a href={item.link}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
