'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
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

    return (
      <header className="py-4 px-4 sm:px-6 lg:px-8 fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="h-12 w-20 relative cursor-pointer">
            <Image 
              src="/images/jasmin-logo.png" 
              alt="Jasmin Logo"
              fill
              className="object-contain"
              priority
            />
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => scrollToSection(item.id)} 
                    className="hover:text-gray-600 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#000430] hover:bg-[#1a1a4a] text-white px-4 py-2 rounded-lg transition-colors hover:scale-[1.02]"
            >
              Demo buchen
            </button>
          </nav>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
            
            {isOpen && (
              <div className="absolute top-20 left-0 right-0 bg-white shadow-lg py-4 px-6">
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button 
                        onClick={() => scrollToSection(item.id)}
                        className="w-full text-left py-2 hover:text-gray-600 transition-colors"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="mt-4 w-full bg-[#000430] hover:bg-[#1a1a4a] text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Demo buchen
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    )
  }