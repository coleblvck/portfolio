// components/Header.tsx
"use client";
import { useEffect, useRef } from 'react';

const Header = () => {
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                if (window.scrollY > 50) {
                    headerRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                } else {
                    headerRef.current.style.backgroundColor = 'transparent';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header ref={headerRef} style={{ position: 'sticky', top: 0 }}>
            <h1>My Portfolio</h1>
        </header>
    );
};

export default Header;