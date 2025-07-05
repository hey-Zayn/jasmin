import React from "react";

const Services = () => {
  return (
    <div id="services" className="h-full bg-[#F9FAFB] flex justify-center py-10">
     
      <div className="text-center ">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#000430] mb-8">
        Unsere Dienstleistungen
      </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
            <h4 className="text-2xl font-medium text-[#000430] mb-4">Exklusive Beratung</h4>
            <p className="text-gray-700 leading-relaxed flex-grow">
              Individuelle Strategien für nachhaltigen Erfolg und Wachstum.
            </p>
            <button className="mt-6 bg-[#000430] text-white px-6 py-2 rounded-lg text-lg hover:bg-opacity-90 transition-all">
              Demo buchen
            </button>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
            <h4 className="text-2xl font-medium text-[#000430] mb-4">Maßgeschneiderte Lösungen</h4>
            <p className="text-gray-700 leading-relaxed flex-grow">
              Personalisierte Ansätze für Ihre einzigartigen Herausforderungen.
            </p>
            <button className="mt-6 bg-[#000430] text-white px-6 py-2 rounded-lg text-lg hover:bg-opacity-90 transition-all">
              Demo buchen
            </button>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
            <h4 className="text-2xl font-medium text-[#000430] mb-4">Innovative Konzepte</h4>
            <p className="text-gray-700 leading-relaxed flex-grow">
              Kreative und zukunftsweisende Strategien für Ihr Business.
            </p>
            <button className="mt-6 bg-[#000430] text-white px-6 py-2 rounded-lg text-lg hover:bg-opacity-90 transition-all">
              Demo buchen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
