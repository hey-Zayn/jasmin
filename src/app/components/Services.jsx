'use client';
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Services = () => {
  const sectionRef = useRef();
  const headingRef = useRef();
  const serviceCardsRef = useRef([]);
  const containerRef = useRef();
  serviceCardsRef.current = [];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial state
    gsap.set([headingRef.current], { 
      y: 20,
      opacity: 0
    });
    
    gsap.set(serviceCardsRef.current, { 
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
    .to(serviceCardsRef.current, {
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

  const addToRefs = (el) => {
    if (el && !serviceCardsRef.current.includes(el)) {
      serviceCardsRef.current.push(el);
    }
  };

  const services = [
    {
      title: "Exklusive Beratung",
      description: "Individuelle Strategien für nachhaltigen Erfolg und Wachstum."
    },
    {
      title: "Maßgeschneiderte Lösungen",
      description: "Personalisierte Ansätze für Ihre einzigartigen Herausforderungen."
    },
    {
      title: "Innovative Konzepte",
      description: "Kreative und zukunftsweisende Strategien für Ihr Business."
    }
  ];

  return (
    <div 
      id="services" 
      ref={sectionRef}
      className="min-h-screen bg-[#f9f5f0] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div 
        ref={containerRef}
        className="w-full max-w-7xl mx-auto text-center relative"
      >
        <h2 
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl font-light text-[#000430] mb-8 md:mb-16 tracking-tight"
        >
          Unsere Dienstleistungen
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={addToRefs}
              className="bg-white p-8 border-2 border-[#000430]/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-3 will-change-transform"
            >
              <h3 className="text-2xl font-medium text-[#000430] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed flex-grow">
                {service.description}
              </p>
              <a href="https://calendly.com/contact-hinediunlimited/30min">
              <button
                className="bg-[#000430] text-white text-lg px-6 py-3 rounded-full transition-all duration-300 ease-in-out hover:bg-[#1a1d6c] hover:shadow-[0_10px_25px_-5px_rgba(0,4,48,0.4)] hover:-translate-y-1 active:translate-y-0 active:shadow-[0_5px_15px_-3px_rgba(0,4,48,0.3)] transform hover:scale-105 active:scale-100 mt-6"
              >
                Exklusive Beratung buchen
              </button>
              </a>
            </div>
          ))}
        </div>

        {/* Decorative background elements */}
        {/* <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#d4af37] opacity-5 mix-blend-multiply blur-3xl"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#000430] opacity-5 mix-blend-multiply blur-3xl"></div> */}
      </div>
    </div>
  );
};

export default Services;