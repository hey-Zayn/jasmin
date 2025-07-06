'use client'
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function About() {
  const aboutRef = useRef();
  const imageRef = useRef();
  const headingRef = useRef();
  const textRef = useRef();
  const aboutbtnRef = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Set initial state
    gsap.set([imageRef.current, headingRef.current, textRef.current, aboutbtnRef.current], {
      opacity: 0,
      y: 30
    });
    gsap.set(imageRef.current, { x: -100 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none none",
        markers: false,
        scrub: 1
      }
    });

    tl.to(imageRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    })
    .to([headingRef.current, textRef.current, aboutbtnRef.current], {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.15,
      ease: "back.out(1.7)"
    }, "-=0.4");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-[#F9FAFB] flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div ref={imageRef} className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="./images/jasmin.jpg"
            alt="Portrait of Jasmin"
            className="rounded-2xl shadow-2xl w-full max-w-lg object-cover aspect-square transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="md:w-1/2 space-y-6">
          <h2 ref={headingRef} className="text-4xl md:text-5xl font-light text-[#000430]">
            Über uns
          </h2>
          <p ref={textRef} className="text-xl md:text-2xl leading-relaxed text-gray-700">
            Unsere Mission ist es, visionäre Unternehmer auf ihrem Weg zu
            außergewöhnlichem Erfolg und nachhaltigem Wachstum zu begleiten.
          </p>
          <button 
            ref={aboutbtnRef} 
            className="bg-[#000430] text-white px-6 py-3 rounded-lg text-lg hover:bg-opacity-90 transition-all hover:shadow-lg"
          >
            Unser Team kennenlernen
          </button>
        </div>
      </div>
    </section>
  );
}
