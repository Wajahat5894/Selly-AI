'use client'

import NavBar from '@/components/navbar';  // Adjust the path as necessary
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import clsx from 'clsx'
import { Check, ArrowRight, Plus, Minus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'; // Importiere useState

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <NavBar />
      <main>
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center mt-[100px] px-4 sm:px-6 lg:px-8">
          <div className="w-full text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-wide tracking-tight">
              Verwandeln Sie Ihre Webseite in einen 24 / 7 Verkaufsprofi – mit SellyAI.
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl mt-6 tracking-wide leading-relaxed">
              Erstellen Sie innerhalb von Minuten einen leistungsstarken AI-Chatbot, der Kundenanfragen automatisch beantwortet und qualifizierte Leads
              für Ihr Unternehmen generiert.
            </h2>
          </div>

          {/* Call to Action Buttons */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center mt-8 gap-4">
            <Button className="w-full sm:w-auto bg-black text-white px-6 py-2 rounded-full">
              Kostenlose Testversion starten
            </Button>
            <Button className="w-full sm:w-auto bg-transparent border border-black text-black px-6 py-2 rounded-full hover:bg-gray-200 flex items-center justify-center gap-2 group">
              Demo ansehen
              <ArrowRight size={16} className="transition-transform duration-300 transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Dashboard Image */}
          <div className="mt-20 flex justify-center">
            <Image
              src="/images/app-ui.png"
              width={1440}
              height={720}
              alt="Dashboard"
              className="max-w-full h-auto"
            />
          </div>
        </section>

        {/* Warum SellyAI Section */}
        <section className="mt-32 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center tracking-wide mb-6">Warum SellyAI?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "↑",
                bgColor: "#e6f7e6",
                iconColor: "#22c55e",
                title: "Automatisierte Kundenkommunikation",
                description: "Beantwortet Kundenanfragen rund um die Uhr, ohne dass menschliches Eingreifen erforderlich ist."
              },
              {
                icon: "▶",
                bgColor: "#e6f1ff",
                iconColor: "#3b82f6",
                title: "Vertrieb auf Autopilot",
                description: "Generiert und qualifiziert Leads automatisch, sodass Ihr Vertriebsteam sich auf den Abschluss konzentrieren kann."
              },
              {
                icon: "⚙",
                bgColor: "#f3e6ff",
                iconColor: "#a855f7",
                title: "Einfache Integration",
                description: "Mit nur wenigen Klicks in Ihre Webseite eingebettet, ohne technisches Vorwissen."
              },
              {
                icon: "👤",
                bgColor: "#f0f0f0",
                iconColor: "#4b5563",
                title: "Personalisierte Interaktion",
                description: "Trainieren Sie den Bot nach den speziellen Anforderungen Ihres Unternehmens und bieten Sie eine personalisierte Kundeninteraktion."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1"
              >
                <div
                  style={{
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '1rem',
                    backgroundColor: item.bgColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}
                >
                  <span style={{ fontSize: '1.5rem', color: item.iconColor }}>{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 flex-grow">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Funktionsübersicht & Demo/Video Section */}
        <section className="mt-32 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 flex justify-center">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/your-video-id"
              title="SellyAI Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide mb-6">Wie funktioniert SellyAI?</h2>
            <p className="text-lg mb-8">
              SellyAI ist mehr als nur ein Chatbot. Es ist ein intelligentes Verkaufswerkzeug, das Ihnen hilft, Ihren Kundenservice und Ihre Vertriebsprozesse zu revolutionieren.
            </p>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Anmelden",
                  description: "Registrieren Sie sich in wenigen Sekunden und erhalten Sie sofortigen Zugriff auf die Plattform."
                },
                {
                  step: "2",
                  title: "Einrichten",
                  description: "Passen Sie den Chatbot an Ihr Unternehmen an, indem Sie spezifische Fragen und Antworten definieren."
                },
                {
                  step: "3",
                  title: "Integrieren",
                  description: "Kopieren Sie einfach den generierten Code und fügen Sie ihn in Ihre Webseite ein, um den Bot zu aktivieren."
                },
                {
                  step: "4",
                  title: "Analysieren",
                  description: "Verfolgen Sie die Performance des Bots, analysieren Sie Interaktionen und optimieren Sie kontinuierlich für bessere Ergebnisse."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-8">
                  <div
                    className="flex items-center justify-center bg-black text-white text-2xl font-bold rounded-full flex-shrink-0"
                    style={{
                      width: '56px',
                      height: '56px',
                      lineHeight: '56px',
                    }}
                  >
                    {item.step}
                  </div>
                  <div className="bg-gray-50 bg-opacity-50 rounded-lg shadow-md p-6 flex flex-col items-start text-left h-full max-w-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="flex justify-center items-center flex-col gap-4 py-16 px-4 md:px-8 lg:px-16">
          <h2 className="text-2xl md:text-4xl text-center tracking-wide leading-tight text-black">Unsere Preisgestaltung</h2>
          <p className="text-gray-600 text-center max-w-lg">
            Erhalten Sie Zugang zu allen Funktionen für nur <strong>19,95€</strong> pro Monat. Keine versteckten Gebühren, alles inklusive.
          </p>
        </section>

        <div className="flex justify-center items-center px-4 md:px-8 lg:px-16">
          <Card className="w-full max-w-4xl flex flex-col md:flex-row justify-between bg-white border border-gray-300 rounded-lg shadow-md p-6">
            <div className="md:w-2/3">
              <CardHeader>
                <CardTitle className="text-black text-3xl">All-Inclusive Plan</CardTitle>
                <CardDescription className="text-gray-500 mt-2">
                  Alles, was Sie benötigen, in einem einfachen Plan.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-left mt-4">
                <ul className="list-disc list-inside text-gray-700">
                  <li>Unbegrenzte AI-Chatbot-Interaktionen</li>
                  <li>Lead-Generierung & Qualifizierung</li>
                  <li>24/7 Kundenunterstützung</li>
                  <li>Einfache Website-Integration</li>
                  <li>Leistungsanalysen</li>
                </ul>
              </CardContent>
            </div>
            <div className="md:w-1/3 flex flex-col items-center justify-center mt-6 md:mt-0">
              <div className="text-center mb-6">
                <span className="text-5xl font-bold text-black">19,95€</span>
                <span className="text-gray-500">/ Monat</span>
              </div>
              <Link
                href="/dashboard?plan=all-inclusive"
                className="bg-black text-white py-3 px-8 w-full text-center font-bold rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                Jetzt für 19,95€ starten
              </Link>
            </div>
          </Card>
        </div>

        {/* Q & A Section */}
        <section className="mt-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center tracking-wide mb-6">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-lg mx-auto mb-8">
            Hier finden Sie Antworten auf einige der häufigsten Fragen zu SellyAI.
          </p>

          {/* FAQ Questions and Answers */}
          <div className="space-y-8">
            {[
              {
                question: "Wie integriere ich den Chatbot in meine Webseite?",
                answer: "Ganz einfach! Kopieren Sie den generierten Code aus Ihrem SellyAI Dashboard und fügen Sie ihn in den Quellcode Ihrer Webseite ein."
              },
              {
                question: "Kann ich den Chatbot an die Bedürfnisse meines Unternehmens anpassen?",
                answer: "Ja, Sie können den Bot vollständig anpassen, einschließlich der Fragen, Antworten und des Erscheinungsbildes."
              },
              {
                question: "Wie sicher sind meine Daten?",
                answer: "Ihre Daten sind bei uns sicher. Wir verwenden modernste Verschlüsselungstechnologien, um Ihre Informationen zu schützen."
              },
              {
                question: "Gibt es eine kostenlose Testversion?",
                answer: "Ja, Sie können SellyAI 14 Tage lang kostenlos testen, ohne Zahlungsinformationen angeben zu müssen."
              }
            ].map((item, index) => {
              const [isOpen, setIsOpen] = useState(false); // Zustand für die Sichtbarkeit

              return (
                <div key={index} className="border-b">
                  <h3 
                    className="text-xl font-semibold text-black mb-2 cursor-pointer flex items-center" 
                    onClick={() => setIsOpen(!isOpen)} // Toggle-Funktion
                  >
                    {isOpen ? <Minus size={20} className="mr-2" /> : <Plus size={20} className="mr-2" />} {/* Symbol anzeigen */}
                    {item.question}
                  </h3>
                  {isOpen && <p className="text-gray-600">{item.answer}</p>} {/* Antwort anzeigen, wenn isOpen true ist */}
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-white text-black py-8 mt-16 w-full"> {/* Vollständige Breite */}
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="mb-6 md:mb-0">
                <h4 className="font-bold text-lg mb-2">Links:</h4>
                <ul className="space-y-1">
                  <li><Link href="/kontakt" className="hover:underline">Kontakt</Link></li>
                  <li><Link href="/agb" className="hover:underline">AGB</Link></li>
                  <li><Link href="/datenschutz" className="hover:underline">Datenschutz</Link></li>
                  <li><Link href="/impressum" className="hover:underline">Impressum</Link></li>
                </ul>
              </div>
              <div className="mb-6 md:mb-0">
                <h4 className="font-bold text-lg mb-2">Social Media:</h4>
                <ul className="space-y-1">
                  <li><Link href="https://facebook.com" className="hover:underline">Facebook</Link></li>
                  <li><Link href="https://twitter.com" className="hover:underline">Twitter</Link></li>
                  <li><Link href="https://instagram.com" className="hover:underline">Instagram</Link></li>
                  <li><Link href="https://linkedin.com" className="hover:underline">LinkedIn</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Abonnieren:</h4>
                <p className="mb-4">Bleiben Sie auf dem Laufenden! Melden Sie sich für unseren Newsletter an<br/> und erhalten Sie exklusive Updates und Angebote.“</p>
                <div className="flex flex-col md:flex-row">
                  <input type="email" placeholder="Ihre E-Mail-Adresse" className="p-2 rounded border border-gray-300 mb-2 md:mb-0 md:mr-2" />
                  <button className="bg-blue-600 text-white py-2 px-4 rounded">Abonnieren</button>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-sm">© {new Date().getFullYear()} SellyAI. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

