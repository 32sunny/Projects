import './Navbar.css';
import React, { useState, useEffect } from 'react';

export const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="navbar">
                <p>PortFolio</p>

                <div className={`navMenu ${menuOpen ? 'show' : ''}`}>
                    <li>
                        <a href="#Home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About Us</a>
                    </li>
                    <li>
                        <a href="#Skills">Skills</a>
                    </li>
                    <li>
                        <a href="#Projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">contact</a>
                    </li>
                </div>

                <div className="burger" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                {isVisible && (
                    <button className="scrollup" onClick={scrollToTop} id="scroll-up">
                        ↑
                    </button>
                )}
            </div>
        </>
    );
};
