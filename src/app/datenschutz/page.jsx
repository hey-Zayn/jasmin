import React from 'react'

const page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="  p-8 md:p-12">
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#000430] mb-4">Datenschutzerklärung</h1>
          <p className="text-lg text-gray-600">gemäß Art. 13 und 14 DSGVO</p>
        </header>

        <div className="space-y-10">
          <section className="border-b border-gray-100 pb-8">
            <h2 className="text-2xl font-semibold text-[#000430] mb-6">Verantwortlich:</h2>
            <address className="text-gray-700 not-italic">
              <p className="mb-2">HINEDI UNLIMITED</p>
              <p className="mb-2">Inhaberin: Jasmin Hinedi</p>
              <p className="mb-2">Coulinstraße 24</p>
              <p className="mb-2">4020 Linz, Österreich</p>
              <p>E-Mail: contact@hinediunlimited.com</p>
            </address>
          </section>

          {[
            {
              title: "1. Allgemeines",
              content: "Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst. Die Verarbeitung Ihrer Daten erfolgt auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003)."
            },
            {
              title: "2. Erhobene Daten",
              content: (
                <>
                  Wir verarbeiten folgende Daten:<br />
                  – Name, E-Mail-Adresse, ggf. Telefonnummer<br />
                  – Inhaltsangaben bei Terminbuchungen (z. B. via Calendly)<br />
                  – IP-Adresse und Nutzungsdaten (z. B. durch Cookies)<br />
                  – Analyse-Daten durch Google Analytics und/oder Meta Pixel
                </>
              )
            },
            {
              title: "3. Zweck der Datenverarbeitung",
              content: (
                <>
                  – Zur Erfüllung vertraglicher oder vorvertraglicher Verpflichtungen<br />
                  – Zur Kommunikation und Angebotslegung<br />
                  – Zur Optimierung und Analyse der Website
                </>
              )
            },
            {
              title: "4. Rechtsgrundlagen",
              content: (
                <>
                  Die Datenverarbeitung erfolgt auf Grundlage:<br />
                  – Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)<br />
                  – Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)<br />
                  – Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
                </>
              )
            },
            {
              title: "5. Drittanbieter & Auftragsverarbeiter",
              content: (
                <>
                  Wir nutzen folgende Dienste:<br />
                  – Calendly (für Terminbuchungen)<br />
                  – Google Analytics (Websiteanalyse, USA)<br />
                  – Meta Pixel / Facebook (Remarketing, USA)<br /><br />
                  Diese Anbieter können Daten in Drittstaaten (z. B. USA) übertragen. Die Verarbeitung erfolgt auf Basis von Standardvertragsklauseln gem. Art. 46 DSGVO.
                </>
              )
            },
            {
              title: "6. Cookies & Analyse",
              content: "Unsere Website verwendet Cookies. Beim ersten Besuch wird ein Cookie-Banner angezeigt, in dem Sie Ihre Auswahl treffen können."
            },
            {
              title: "7. Speicherdauer",
              content: "Personenbezogene Daten werden so lange gespeichert, wie es für die genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen."
            },
            {
              title: "8. Ihre Rechte",
              content: (
                <>
                  Sie haben jederzeit das Recht auf:<br />
                  – Auskunft<br />
                  – Berichtigung<br />
                  – Löschung<br />
                  – Einschränkung der Verarbeitung<br />
                  – Datenübertragbarkeit<br />
                  – Widerruf einer Einwilligung<br />
                  – Widerspruch gegen die Verarbeitung
                </>
              )
            },
            {
              title: "9. Beschwerderecht",
              content: (
                <>
                  Wenn Sie der Meinung sind, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, haben Sie das Recht, sich bei der österreichischen Datenschutzbehörde zu beschweren:<br /><br />
                  <strong>Österreichische Datenschutzbehörde</strong><br />
                  Barichgasse 40–42<br />
                  1030 Wien<br />
                  dsb@dsb.gv.at<br />
                  www.dsb.gv.at
                </>
              )
            },
            {
              title: "10. Kontakt",
              content: (
                <>
                  Bei Fragen wenden Sie sich bitte an:<br />
                  <span className="inline-flex items-center gap-2">📩 contact@hinediunlimited.com</span>
                </>
              )
            }
          ].map((section, index) => (
            <section key={index} className="border-b border-gray-100 pb-8 last:border-0">
              <h2 className="text-2xl font-semibold text-[#000430] mb-6">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page