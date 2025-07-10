'use client'
import React, { useState, useLayoutEffect, useRef } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const sectionRef = useRef()
  const headingRef = useRef()
  const subheadingRef = useRef()
  const contactCardsRef = useRef([])
  contactCardsRef.current = []

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Set initial state
    gsap.set([headingRef.current, subheadingRef.current], {
      y: 20,
      opacity: 0
    })
    
    gsap.set(contactCardsRef.current, {
      y: 30,
      opacity: 0,
      scale: 0.95
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none none",
        markers: false
      }
    })

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
    .to(contactCardsRef.current, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.7,
      stagger: 0.15,
      ease: "back.out(1.4)"
    }, "-=0.3")

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      tl.kill()
    }
  }, [])

  const addToContactRefs = (el) => {
    if (el && !contactCardsRef.current.includes(el)) {
      contactCardsRef.current.push(el)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Reset submitted state when user starts typing again
    if (isSubmitted) {
      setIsSubmitted(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Nachricht erfolgreich gesendet!')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
        setIsSubmitted(true)
      } else {
        toast.error(data.error || 'Fehler beim Senden der Nachricht')
      }
    } catch (error) {
      console.error('Error:', error)
      toast.error('Fehler beim Senden der Nachricht')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-[#f9f5f0] py-20 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <ToastContainer position="top-right" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-light text-[#000430] mb-4">
            Kontaktieren Sie uns
          </h2>
          <p ref={subheadingRef} className="text-xl text-gray-600 max-w-2xl mx-auto">
            Wir freuen uns darauf, von Ihnen zu hören
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div ref={addToContactRefs} className="space-y-6 ">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#000430]/20">
              <h3 className="text-2xl font-semibold text-[#000430] mb-6">Kontaktinformation</h3>
              <div className="space-y-4">
                {/* <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#000430] rounded-full flex items-center justify-center text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Adresse</h4>
                    <p className="text-gray-600">Coulinstraße 24, 4020 Linz, Österreich</p>
                  </div>
                </div> */}

                {/* <div className="flex items-start ">
                  <div className="w-10 h-10 bg[#000430] rounded-full flex items-center justify-center text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Firmendaten</h4>
                    <p className="text-gray-600">HINEDI UNLIMITED, Inhaberin: Jasmin Hinedi</p>
                    <p className="text-gray-600">Mitglied der WKO, Firmengericht: LG Linz</p>
                  </div>
                </div> */}

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#000430] rounded-full flex items-center justify-center text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Email</h4>
                    <p className="text-gray-600">contact@hinediunlimited.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={addToContactRefs} className="bg-white p-6 rounded-2xl shadow-lg border border-[#000430]/20">
            <h3 className="text-xl font-medium text-[#000430] mb-4">Schreiben Sie uns</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#000430] focus:border-[#000430] transition-all"
                    placeholder="Ihr Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#000430] focus:border-[#000430] transition-all"
                    placeholder="Ihre Email"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-gray-600 mb-1">Betreff</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#000430] focus:border-[#000430] transition-all"
                  placeholder="Betreff"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-gray-600 mb-1">Nachricht</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#000430] focus:border-[#000430] transition-all"
                  placeholder="Ihre Nachricht"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#000430] text-white text-sm px-4 py-2 rounded-full transition-all duration-200 ease-in-out hover:bg-[#1a1d6c] hover:shadow-[0_5px_15px_-3px_rgba(0,4,48,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_2px_8px_-1px_rgba(0,4,48,0.2)] transform hover:scale-[1.02] active:scale-100 disabled:bg-gray-400 disabled:transform-none disabled:hover:shadow-none"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact