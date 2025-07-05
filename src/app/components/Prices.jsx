import React from "react";

const Prices = () => {
  return (
    <section id="pricing" className="bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#000430] mb-4">
            Unsere Pakete
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Bereit für mehr Reichweite & Kunden?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Package */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col h-full transform hover:-translate-y-2">
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
            </ul>
            <button className="mt-auto bg-[#000430] hover:bg-[#1a1a4a] text-white px-6 py-3 rounded-lg text-lg transition-all w-full">
              Jetzt starten
            </button>
          </div>

          {/* Pro Package */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-300 border-2 border-[#000430] flex flex-col h-full transform hover:-translate-y-2 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#000430] text-white text-sm font-medium px-4 py-1 rounded-full">
              Beliebteste Wahl
            </div>
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
            </ul>
            <button className="mt-auto bg-[#000430] hover:bg-[#1a1a4a] text-white px-6 py-3 rounded-lg text-lg transition-all w-full">
              Jetzt starten
            </button>
          </div>

          {/* Premium Package */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col h-full transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-[#000430] mb-2">Premium</h3>
            <p className="text-3xl font-bold text-[#000430] mb-6">
              999€ <span className="text-lg font-normal text-gray-500">/Monat</span>
            </p>
            <ul className="text-gray-700 space-y-3 mb-8 flex-grow">
              <li className="flex items-center">
                <span className="w-5 h-5 bg-[#000430] rounded-full mr-3 flex items-center justify-center text-white text-xs">✓</span>
                20 Beiträge
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-[#000430] rounded-full mr-3 flex items-center justify-center text-white text-xs">✓</span>
                10 Reels
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-[#000430] rounded-full mr-3 flex items-center justify-center text-white text-xs">✓</span>
                Texte & Hashtags
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-[#000430] rounded-full mr-3 flex items-center justify-center text-white text-xs">✓</span>
                4 Werbetexte
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-[#000430] rounded-full mr-3 flex items-center justify-center text-white text-xs">✓</span>
                KI-Optimierung
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-[#000430] rounded-full mr-3 flex items-center justify-center text-white text-xs">✓</span>
                2 Coaching-Sitzungen
              </li>
            </ul>
            <button className="mt-auto bg-[#000430] hover:bg-[#1a1a4a] text-white px-6 py-3 rounded-lg text-lg transition-all w-full">
              Jetzt starten
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
