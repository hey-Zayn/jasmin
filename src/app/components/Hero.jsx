export default function Hero() {
    return (
      <section id="hero" className="relative h-screen flex items-center justify-center bg-[#F9FAFB] px-6 sm:px-8 lg:px-10 py-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light  text-gray-900 max-w-4xl">
              Für die Visionäre <br className="hidden md:block" /> von Morgen
            </h2>
            <p className="text-xl md:text-xl  max-w-3xl leading-relaxed text-[#020430]">
               Luxuriöse Beratung und kreative Strategien für<br className="hidden md:block" />  visionäre Unternehmer und Marken.
            </p>
            <div className="flex space-x-6 pt-6">
              <button className="bg-[#000430] hover:bg-opacity-90 text-white text-lg md:text-xl px-10 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                Mehr erfahren
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }