'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Footer = () => {
  const COOKIE_CONSENT_KEY = 'cookieConsent';
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    // Check for cookie consent only on client side
    if (typeof window !== 'undefined') {
      const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!hasConsent) {
        setShowCookieBanner(true);
      }
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    setShowCookieBanner(false);
  };

  const footerLinks = [
    { href: '/Impressum', label: 'Impressum' },
    { href: '/datenschutz', label: 'Datenschutzerklärung' },
    { href: '/agb', label: 'AGB' },
    { href: '/kontakt', label: 'Kontakt' }
  ];

  return (
    <footer className="bg-[#f9f5f0] py-8 px-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {footerLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-indigo-600 transition-all duration-300 font-medium text-sm uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <p className="text-center text-gray-400 text-xs mb-2">
          © {new Date().getFullYear()} HINEDI UNLIMITED. All rights reserved.
        </p>

        {showCookieBanner && (
          <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-xl backdrop-blur-sm bg-opacity-90">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm md:text-base text-gray-200">
                Wir verwenden Cookies, um Ihnen das beste Erlebnis auf unserer Website zu bieten. 
                Durch die Nutzung unserer Website stimmen Sie unserer <Link href="/datenschutz" className="underline hover:text-indigo-300 transition-colors">Datenschutzerklärung</Link> zu.
              </p>
              <div className="flex gap-3">
                <button 
                  onClick={handleAcceptCookies}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow hover:shadow-md"
                  aria-label="Cookies akzeptieren"
                >
                  Akzeptieren
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;