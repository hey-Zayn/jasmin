'use client'
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Hero() {
  const heroRef = useRef();
  const headingRef = useRef();
  const textRef = useRef();
  const herobuttonRef = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none none",
        markers: false
      }
    });

    tl.from([headingRef.current, textRef.current, herobuttonRef.current], {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen max-sm:h-[80vh] flex items-center justify-center bg-[#F9FAFB] px-4 sm:px-8 lg:px-10 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 ref={headingRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 max-w-4xl">
            Für die Visionäre <br className="hidden sm:block" /> von Morgen
          </h2>
          <p ref={textRef} className="text-lg sm:text-xl max-w-3xl leading-relaxed text-[#020430]">
            Luxuriöse Beratung und kreative Strategien für<br className="hidden sm:block" /> visionäre Unternehmer und Marken.
          </p>
          <div ref={herobuttonRef} className="flex space-x-6 pt-6">
            <button className="bg-[#000430] hover:bg-opacity-90 text-white text-base sm:text-lg md:text-xl px-8 sm:px-10 py-3 sm:py-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              Mehr erfahren
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}