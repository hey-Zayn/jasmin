'use client'
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const logoRef = useRef();
    const titleRef = useRef();
    const navItemsRef = useRef([]);
    const mobileMenuRef = useRef();
    const navbarRef = useRef();

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Set initial state to visible
        gsap.set([logoRef.current, titleRef.current, navItemsRef.current], {
            opacity: 1,
            y: 0
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: navbarRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
                markers: false
            }
        });

        // Logo animation
        tl.from(logoRef.current, {
            y: -50,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        });

        // Title animation
        tl.from(titleRef.current, {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "elastic.out(1, 0.5)"
        }, "-=0.8");

        // Nav items animation
        tl.from(navItemsRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)"
        }, "-=0.6");

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            tl.kill();
        };
    }, []);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
            setIsOpen(false);
        }
    };

    const navItems = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'Über uns' },
        { id: 'services', label: 'Dienstleistungen' },
        { id: 'pricing', label: 'Preise' },
        { id: 'contact', label: 'Kontakt' }
    ];

    const toggleMenu = () => {
        if (isOpen) {
            gsap.to(mobileMenuRef.current, {
                y: -20,
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => setIsOpen(false)
            });
        } else {
            setIsOpen(true);
            gsap.fromTo(mobileMenuRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
            );
        }
    };

    return (
        <header ref={navbarRef} className={`relative w-full py-4 px-4 sm:px-6 lg:px-8 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#f9f5f0]/95 backdrop-blur-md shadow-sm' : 'bg-[#f9f5f0]/95 backdrop-blur-md shadow-sm'} border-b border-gray-100`}>
            <div className="max-w-7xl mx-auto">
                {/* Desktop Layout */}
                <div className="hidden md:flex flex-col items-center">
                    <div className="flex flex-col items-center">
                        <a href="/" ref={logoRef} className="h-20 w-76 relative cursor-pointer mb-2">
                            <Image 
                                src="/images/logo-main.png" 
                                alt=" Logo"
                                fill
                                className="object-contain hover:scale-105 transition-transform duration-300"
                                priority
                                quality={100}
                            />
                        </a>
                        <h1 ref={titleRef} className="text-6xl font-light text-gray-900 mb-6 tracking-wider">HINEDI UNLIMITED</h1>
                    </div>
                    <div className="w-full max-w-4xl border-t border-gray-200 my-1"></div>
                    <nav className="w-full">
                        <ul className="flex justify-between w-full max-w-4xl mx-auto">
                            {navItems.map((item, index) => (
                                <li key={item.id} className="flex-1 font-bold text-center">
                                    <button 
                                        ref={el => navItemsRef.current[index] = el}
                                        onClick={() => scrollToSection(item.id)} 
                                        className="text-gray-800 hover:text-[#000430] transition-colors duration-300 font-normal text-base uppercase tracking-widest py-4 px-2 w-full relative group"
                                    >
                                        {item.label}
                                        <span className="absolute bottom-3 left-1/2 w-0 h-px bg-[#000430] transform -translate-x-1/2 group-hover:w-3/4 transition-all duration-300"></span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                
                {/* Mobile Layout */}
                <div className="md:hidden flex justify-between items-center">
                    <Link href="/" className="h-12 w-20 relative cursor-pointer">
                        <Image 
                            src="/images/jasmin-logo.png" 
                            alt="Jasmin Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>
                    
                    <button 
                        onClick={toggleMenu}
                        className="p-2 focus:outline-none"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className="fixed inset-0 z-40">
                        {/* Background Overlay */}
                        <div 
                            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                            onClick={toggleMenu}
                        />
                        
                        {/* Menu Panel */}
                        <div ref={mobileMenuRef} className="absolute top-20 right-4 left-4 bg-white rounded-lg shadow-xl overflow-hidden z-50">
                            <ul className="divide-y divide-gray-100">
                                {navItems.map((item) => (
                                    <li key={item.id}>
                                        <button 
                                            onClick={() => scrollToSection(item.id)}
                                            className="w-full text-left py-4 px-6 hover:bg-gray-50 transition-colors text-lg font-medium"
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="p-4 border-t border-gray-100">
                                <button 
                                    onClick={() => scrollToSection('contact')}
                                    className="w-full bg-[#000430] hover:bg-[#1a1a4a] text-white px-4 py-3 rounded-lg transition-colors font-medium"
                                >
                                    Demo buchen
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}