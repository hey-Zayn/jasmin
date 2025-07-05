'use client'
export default function Navbar() {
    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <header className="py-6 px-4 sm:px-6 lg:px-8 fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-light">HINEDI UNLIMITED</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <button onClick={() => scrollToSection('hero')} className="hover:text-gray-600">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-gray-600">
                  Über uns
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-gray-600">
                  Dienstleistungen
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-gray-600">
                  Kontakt
                </button>
              </li>
            </ul>
          </nav>
          <button className="md:hidden">Menu</button>
        </div>
      </header>
    )
  }