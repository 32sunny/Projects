import './Navbar.css';
import React, { useState, useEffect } from 'react';
import resume from '../assets/resume.pdf';

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
        <div className="navbar">
            <p>PortFolio</p>

            {/* Navbar Menu */}
            <div className={`navMenu ${menuOpen ? 'show' : ''}`}>
                <li>
                    <a href="#Home" onClick={() => setMenuOpen(false)}>Home</a>
                </li>
                <li>
                    <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
                </li>
                <li>
                    <a href="#Skills" onClick={() => setMenuOpen(false)}>Skills</a>
                </li>
                <li>
                    <a href="#Projects" onClick={() => setMenuOpen(false)}>Projects</a>
                </li>
                <li>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                </li>
                <li>
                <a href={resume} download="resume" > Resume </a>
                </li>

             
            </div>

            {/* Mobile Menu Toggle */}
            <div className="burger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Scroll-to-Top Button */}
            {isVisible && (
                <button className="scrollup show" onClick={scrollToTop} id="scroll-up">
                    ↑
                </button>
            )}
        </div>
    );
};