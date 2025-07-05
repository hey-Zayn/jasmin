export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 h-screen bg-[#F9FAFB]"
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <img
            src="./images/jasmin.jpg"
            alt="Portrait of Jasmin"
            className="rounded-2xl shadow-2xl w-full max-w-lg object-cover aspect-square transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-light text-[#000430]">
            Über uns
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
            Unsere Mission ist es, visionäre Unternehmer auf ihrem Weg zu
            außergewöhnlichem Erfolg und nachhaltigem Wachstum zu begleiten.
          </p>
          {/* <p className="text-xl md:text-xl leading-relaxed text-gray-700">
            {" "}
            • Exklusive Beratung <br />
            • Maßgeschneiderte Lösungen <br />
            • Innovative Konzepte
          </p> */}
          <button className="bg-[#000430] text-white px-6 py-3 rounded-lg text-lg hover:bg-opacity-90 transition-all">
            Unser Team kennenlernen
          </button>
        </div>
      </div>
    </section>
  );
}
