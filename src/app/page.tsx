'use client'

import NavBar from '@/components/navbar';  // Pfad anpassen, falls nötig
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { pricingCards } from '@/constants/landing-page'
import clsx from 'clsx'
import { Check, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <NavBar />
      <main>
        <section className="flex flex-col items-center justify-center mt-[100px] px-4 sm:px-6 lg:px-8">
          <div className="w-full text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-wide tracking-tight">
              Verwandeln Sie Ihre Webseite in einen 24 / 7 Verkaufsprofi – mit SellyAI.
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl mt-6 tracking-wide leading-relaxed">
              Erstellen Sie innerhalb von Minuten einen leistungsstarken AI-
              Chatbot, der Kundenanfragen automatisch beantwortet und qualifizierte Leads
              für Ihr Unternehmen generiert.
            </h2>
          </div>
          
          {/* Buttons */}
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

        {/* "Warum SellyAI?" Section */}
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
                bgColor: "#f0f0f0", // Geändert zu hellgrau
                iconColor: "#4b5563", // Dunkelgrau für das Icon
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
              width="560" 
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
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white text-2xl font-bold">
                    {item.step}
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start text-left h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center flex-col gap-4 mt-10 px-4 md:px-8 lg:px-16 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl text-center tracking-wide leading-tight">Choose what fits you right</h2>
          <p className="text-muted-foreground text-center max-w-lg">
            Our straightforward pricing plans are tailored to meet your needs. If
            {" you're"} not ready to commit you can get started for free.
          </p>
        </section>
        <div className="flex justify-center gap-4 flex-wrap mt-6 px-4 md:px-8 lg:px-16 max-w-3xl mx-auto">
          {pricingCards.map((card) => (
            <Card
              key={card.title}
              className={clsx('w-full sm:w-[300px] flex flex-col justify-between', {
                'border-2 border-primary': card.title === 'Unlimited',
              })}
            >
              <CardHeader>
                <CardTitle className="text-orange">{card.title}</CardTitle>
                <CardDescription>
                  {pricingCards.find((c) => c.title === card.title)?.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">{card.price}</span>
                <span className="text-muted-foreground">
                  <span>/ month</span>
                </span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div>
                  {card.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex gap-2"
                    >
                      <Check />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/dashbord?plan=${card.title}`}
                  className="bg-[#f3d299] border-orange border-2 p-2 w-full text-center font-bold rounded-md"
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      {/* Footer würde hier kommen */}
    </div>
  )
}
