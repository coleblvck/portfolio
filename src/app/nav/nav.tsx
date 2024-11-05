"use client";
import { socials } from "../config/about"
import "./nav-globals.css";
import { useRef, useEffect } from "react";
import { info } from "../config/about";

export default function Nav() {

    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                if (window.scrollY > 20) {
                    navRef.current.className = "scrolled-nav";
                } else {
                    navRef.current.className = "unscrolled-nav";
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
        <div ref={ navRef } className="unscrolled-nav">
            <h1 id="title">&lt;{info.name}/&gt;</h1>
            <div>
                <span id="top-nav-link-span">
                    {socials.map((social) => (
                        <a key={social.social} href={social.data.href} target="_blank">
                            <i className={social.data.iconClassName}></i>
                        </a>
                    ))}
                </span>
            </div>
        </div>      
    )
}