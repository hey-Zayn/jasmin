import React from 'react'

const page = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Impressum</h1>
      
      <div className="space-y-6 text-gray-700">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">HINEDI UNLIMITED</h2>
          <p className="mb-1">Inhaberin: Jasmin Hinedi</p>
          <p className="mb-1">Adresse: Coulinstraße 24, 4020 Linz, Österreich</p>
          <p className="mb-1">E-Mail: <a href="mailto:contact@hinediunlimited.com" className="text-blue-600 hover:underline">contact@hinediunlimited.com</a></p>
        </div>

        <div>
          <p className="mb-1">Mitglied der Wirtschaftskammer Österreich (WKO)</p>
          <p className="mb-1">Firmengericht: Landesgericht Linz</p>
          <p className="mb-1">Gerichtsstand: Linz, Österreich</p>
        </div>

        <div>
          <p>Unternehmensgegenstand: Strategische Unternehmensberatung mit Fokus auf Content-, Social-Media- & Markenstrategie für visionäre Unternehmer:innen und Unternehmen.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Online-Streitbeilegung</h3>
          <p className="mb-2">gemäß Art. 14 Abs. 1 ODR-VO:</p>
          <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>
          <a 
            href="https://ec.europa.eu/consumers/odr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline block mt-2"
          >
            https://ec.europa.eu/consumers/odr
          </a>
        </div>
      </div>
    </div>
  )
}

export default page