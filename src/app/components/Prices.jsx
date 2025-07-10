'use client';
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Prices = () => {
  const sectionRef = useRef();
  const headingRef = useRef();
  const subheadingRef = useRef();
  const cardRefs = useRef([]);
  cardRefs.current = [];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial state
    gsap.set([headingRef.current, subheadingRef.current], { 
      y: 20,
      opacity: 0
    });
    
    gsap.set(cardRefs.current, { 
      y: 30,
      opacity: 0,
      scale: 0.95
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none none",
        markers: false
      }
    });

    tl.to(headingRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    })
    .to(subheadingRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.4")
    .to(cardRefs.current, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.7,
      stagger: 0.15,
      ease: "back.out(1.4)"
    }, "-=0.3");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tl.kill();
    };
  }, []);

  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="pricing" 
      className="bg-[#f9f5f0] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-16">
          <h2 
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-[#000430] mb-4 tracking-tight"
          >
            Unsere Pakete
          </h2>
          <p 
            ref={subheadingRef}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Bereit für mehr Reichweite & Kunden?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        
          {/* Starter Package */}
          <div 
            ref={addToCardRefs}
            className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 border-2 border-[#000430]/20 flex flex-col h-full transform hover:-translate-y-2 relative group overflow-hidden hover:shadow-[0_10px_30px_-10px_rgba(0,4,48,0.3)]"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-semibold text-[#000430] mb-2">Starter</h3>
              <p className="text-3xl font-bold text-[#000430] mb-6">
                399€ <span className="text-lg font-normal text-gray-500">/Monat</span>
              </p>
              <ul className="text-gray-700 space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-[#000430] rounded-full mr-3 flex items-center justify-center text-white text-xs">✓</span>
                  8 Beiträge
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-[#000430] rounded-full mr-3 flex items-center justify-center text-white text-xs">✓</span>
                  4 Reels
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-[#000430] rounded-full mr-3 flex items-center justify-center text-white text-xs">✓</span>
                  Texte & Hashtags
                </li>
                <li className="flex items-center opacity-0">
                  <span className="w-5 h-5 rounded-full mr-3"></span>
                  Empty item for spacing
                </li>
                <li className="flex items-center opacity-0">
                  <span className="w-5 h-5 rounded-full mr-3"></span>
                  Empty item for spacing
                </li>
                <li className="flex items-center opacity-0">
                  <span className="w-5 h-5 rounded-full mr-3"></span>
                  Empty item for spacing
                </li>
              </ul>
            </div>
            <a href="https://calendly.com/contact-hinediunlimited/30min">
            <button className="bg-gradient-to-r from-[#000430] to-[#1a1d6c] hover:from-[#1a1d6c] hover:to-[#000430] text-white px-6 py-3 rounded-full text-lg transition-all w-full hover:scale-[1.02] shadow-[0_4px_14px_-4px_rgba(0,4,48,0.3)] hover:shadow-[0_8px_18px_-6px_rgba(0,4,48,0.4)]">
              Jetzt starten
            </button>
            </a>
          </div>

          
        
          
          
          {/* Pro Package */}
          <div 
            ref={addToCardRefs}
            className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 border-2 border-[#000430]/20 flex flex-col h-full transform hover:-translate-y-2 relative group overflow-hidden hover:shadow-[0_10px_30px_-10px_rgba(0,4,48,0.3)]"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-semibold text-[#000430] mb-2">Pro</h3>
              <p className="text-3xl font-bold text-[#000430] mb-6">
                699€ <span className="text-lg font-normal text-gray-500">/Monat</span>
              </p>
              <ul className="text-gray-700 space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-[#000430] rounded-full mr-3 flex items-center justify-center text-white text-xs">✓</span>
                  12 Beiträge
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-[#000430] rounded-full mr-3 flex items-center justify-center text-white text-xs">✓</span>
                  6 Reels
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-[#000430] rounded-full mr-3 flex items-center justify-center text-white text-xs">✓</span>
                  Texte & Hashtags
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-[#000430] rounded-full mr-3 flex items-center justify-center text-white text-xs">✓</span>
                  2 Werbetexte
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-[#000430] rounded-full mr-3 flex items-center justify-center text-white text-xs">✓</span>
                  KI-Optimierung
                </li>
                <li className="flex items-center opacity-0">
                  <span className="w-5 h-5 rounded-full mr-3"></span>
                  Empty item for spacing
                </li>
              </ul>
            </div>
            <a href="https://calendly.com/contact-hinediunlimited/30min">
            <button className="bg-gradient-to-r from-[#000430] to-[#1a1d6c] hover:from-[#1a1d6c] hover:to-[#000430] text-white px-6 py-3 rounded-full text-lg transition-all w-full hover:scale-[1.02] shadow-[0_4px_14px_-4px_rgba(0,4,48,0.3)] hover:shadow-[0_8px_18px_-6px_rgba(0,4,48,0.4)]">
              Jetzt starten
            </button>
            </a>
          </div>

            {/* Premium Package - Highlighted */}
            <div 
            ref={addToCardRefs}
            className="bg-[#000430] p-8 rounded-2xl shadow-2xl transition-all duration-300 border-2 border-white flex flex-col h-full transform hover:-translate-y-2 relative group overflow-hidden hover:shadow-[0_15px_40px_-10px_rgba(255,255,255,0.2)] scale-105 -mt-2"
          >
            
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-semibold text-white mb-2">Premium</h3>
              <p className="text-3xl font-bold text-white mb-6">
                999€ <span className="text-lg font-normal text-blue-100">/Monat</span>
              </p>
              <ul className="text-blue-100 space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-white rounded-full mr-3 flex items-center justify-center text-blue-600 text-xs">✓</span>
                  20 Beiträge
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-white rounded-full mr-3 flex items-center justify-center text-blue-600 text-xs">✓</span>
                  10 Reels
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-white rounded-full mr-3 flex items-center justify-center text-blue-600 text-xs">✓</span>
                  Texte & Hashtags
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-white rounded-full mr-3 flex items-center justify-center text-blue-600 text-xs">✓</span>
                  4 Werbetexte
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-white rounded-full mr-3 flex items-center justify-center text-blue-600 text-xs">✓</span>
                  KI-Optimierung
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-white rounded-full mr-3 flex items-center justify-center text-blue-600 text-xs">✓</span>
                  2 Coaching-Sitzungen
                </li>
              </ul>
            </div>
            <a href="https://calendly.com/contact-hinediunlimited/30min">
            <button className="bg-gradient-to-r from-white to-blue-100 hover:from-blue-100 hover:to-white text-[#000430] px-6 py-3 rounded-full text-lg transition-all w-full hover:scale-[1.02] shadow-[0_4px_14px_-4px_rgba(255,255,255,0.3)] hover:shadow-[0_8px_18px_-6px_rgba(255,255,255,0.4)]">
              Jetzt starten
            </button>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Prices;