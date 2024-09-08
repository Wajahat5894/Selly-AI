'use client'
import useSideBar from '@/context/use-sidebar'
import { cn } from '@/lib/utils'
import React from 'react'
import MaxMenu from './maximized-menu'
import { MinMenu } from './minimized-menu'
import { Menu } from 'lucide-react'; // Stelle sicher, dass dies korrekt importiert wird
import Image from 'next/image'

type Props = {
  domains:
    | {
        id: string
        name: string
        icon: string
      }[]
    | null
    | undefined
}

const SideBar = ({ domains }: Props) => {
  const { expand, onExpand, page, onSignOut } = useSideBar()

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div
        className={cn(
          'bg-cream dark:bg-neutral-950 h-full fixed top-0 left-0 transition-all duration-300',
          expand ? 'w-64' : 'w-[60px]' // Sidebar Breitenübergang
        )}
      >
        <div className="py-3 px-4 flex flex-col h-full">
          {/* Logo */}
          <div className="flex justify-between items-center">
            <Image
              src="/images/logo.png" // Verwende den Pfad zu deinem Logo
              alt="LOGO"
              className={cn(
                'transition-all duration-300', 
                expand ? 'w-32' : 'w-10' // Ändert die Größe des Logos abhängig vom Sidebar-Zustand
              )}
              width={expand ? 128 : 40} // Dynamische Breite
              height={expand ? 128 : 40} // Dynamische Höhe
            />
            <Menu
              className="cursor-pointer animate-fade-in opacity-0 delay-300 fill-mode-forwards"
              onClick={onExpand}
            />
          </div>

          {/* Rest des Menüs */}
          <div className="animate-fade-in opacity-0 delay-300 fill-mode-forwards flex flex-col justify-between h-full pt-10">
            {expand ? (
              <MaxMenu
                domains={domains}
                current={page!}
                onExpand={onExpand}
                onSignOut={onSignOut}
              />
            ) : (
              <MinMenu
                domains={domains}
                onShrink={onExpand}
                current={page!}
                onSignOut={onSignOut}
              />
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={cn(
          'transition-all duration-300 p-4', // Sanfter Übergang des Inhalts
          expand ? 'ml-64' : 'ml-16' // Verschiebeinhalt basierend auf Sidebar-Status
        )}
      >
        {/* Hier kommt dein bestehender Dashboard-Inhalt */}
        {/** Dashboard Inhalt */}
      </div>
    </div>
  )
}

export default SideBar
