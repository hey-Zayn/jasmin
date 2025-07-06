import React from 'react'

const page = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8">Allgemeine Geschäftsbedingungen</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">AGB – B2B (Unternehmen)</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-2">1. Geltungsbereich</h3>
            <p className="text-gray-700">
              Diese AGB gelten für alle Verträge zwischen HINEDI UNLIMITED (Inhaberin: Jasmin Hinedi)
              und Unternehmer:innen im Sinne des UGB (z. B. Einzelunternehmen, GmbH), die Social-Media-Dienstleistungen
              in Anspruch nehmen.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">2. Vertragsabschluss</h3>
            <p className="text-gray-700">
              Der Vertrag kommt zustande durch schriftliche oder mündliche Annahme eines Angebots.
              Bei monatlicher Zusammenarbeit verlängert sich der Vertrag automatisch um einen weiteren Monat,
              wenn keine Kündigung bis 7 Tage vor Monatsende erfolgt.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">3. Leistungen</h3>
            <p className="text-gray-700">
              Die Leistungen werden gemäß dem gebuchten Paket (Starter, Pro, Premium) erbracht.
              Zusatzleistungen sind gesondert zu vereinbaren.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">4. Preise & Zahlung</h3>
            <p className="text-gray-700">
              Die Preise verstehen sich netto zzgl. gesetzlicher USt. (falls verrechnet). Zahlbar im Voraus per Überweisung.
              Bei Zahlungsverzug werden Leistungen pausiert.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">5. Haftung & Gewährleistung</h3>
            <p className="text-gray-700">
              HINEDI UNLIMITED übernimmt keine Gewähr für Reichweiten, Leads oder Umsätze.
              Eine Haftung für leichte Fahrlässigkeit ist ausgeschlossen.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">6. Urheberrecht & Nutzungsrechte</h3>
            <p className="text-gray-700">
              Alle Inhalte bleiben geistiges Eigentum von HINEDI UNLIMITED.
              Die Nutzung ist auf die im Vertrag vereinbarten Zwecke beschränkt.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">7. Gerichtsstand & Recht</h3>
            <p className="text-gray-700">
              Es gilt ausschließlich österreichisches Recht. Gerichtsstand ist Linz,
              sofern kein zwingender anderer Gerichtsstand vorgeschrieben ist.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">AGB – B2C (Privatpersonen)</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-2">1. Geltungsbereich</h3>
            <p className="text-gray-700">
              Diese AGB gelten für alle Verträge zwischen HINEDI UNLIMITED (Inhaberin: Jasmin Hinedi)
              und Verbraucher:innen gemäß § 1 KSchG über Dienstleistungen im Bereich Social-Media-Marketing,
              Content-Erstellung, KI-basierte Optimierung und Coaching-Leistungen.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">2. Vertragsabschluss</h3>
            <p className="text-gray-700">
              Ein Vertrag kommt zustande, sobald der/die Kund:in das Angebot von HINEDI UNLIMITED mündlich
              oder schriftlich (z. B. per E-Mail, WhatsApp oder Online-Formular) annimmt.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">3. Leistungen</h3>
            <p className="text-gray-700">
              Die Leistungen richten sich nach dem gebuchten Paket (Starter, Pro, Premium). Die Lieferung erfolgt
              digital und laufend im Rahmen des vereinbarten Zeitraums.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">4. Preise & Zahlung</h3>
            <p className="text-gray-700">
              Die angegebenen Preise sind Endpreise (inkl. USt., sofern erhoben). Zahlungen erfolgen monatlich im Voraus.
              Es gelten die zum Zeitpunkt des Vertrags gültigen Preise.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">5. Widerrufsrecht (gemäß FAGG)</h3>
            <p className="text-gray-700">
              Privatkunden haben ein 14-tägiges Widerrufsrecht. Wird mit ausdrücklicher Zustimmung bereits vor
              Ablauf der Frist mit der Leistung begonnen, erlischt das Widerrufsrecht nach vollständiger Erbringung
              der Dienstleistung.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">6. Haftung</h3>
            <p className="text-gray-700">
              Es wird keine Haftung für erzielte Reichweiten, Umsätze oder Followerzahlen übernommen. HINEDI UNLIMITED
              haftet nur bei grober Fahrlässigkeit oder Vorsatz.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">7. Datenschutz</h3>
            <p className="text-gray-700">
              Personenbezogene Daten werden vertraulich behandelt und ausschließlich zur Abwicklung der Dienstleistung genutzt.
              Es gilt die Datenschutzerklärung auf der Website.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page