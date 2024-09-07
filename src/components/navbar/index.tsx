import React, { useState } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="container-responsive">
      <div className="flex flex-col md:flex-row justify-between items-center py-4">
        <div className="flex justify-between items-center w-full md:w-auto">
          <div className="flex items-center">
            <div className="relative" style={{ width: 40, height: 40 }}>
              <Image 
                src="/images/logo.png" 
                alt="SellyAI Logo" 
                layout="fill" 
                objectFit="contain" 
                style={{ transform: 'scale(3)', transformOrigin: 'left center' }} 
              />
            </div>
            <span className="text-2xl font-bold text-black ml-12">SellyAI</span>
          </div>
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FiMenu />
          </button>
        </div>

        <ul className={`flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-10 mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden md:flex'}`}>
          <li><Link href="/" className="text-gray-600 hover:text-black transition-colors text-md font-semibold tracking-wide">Home</Link></li>
          <li><Link href="/features" className="text-gray-600 hover:text-black transition-colors text-md font-semibold tracking-wide">Features</Link></li>
          <li><Link href="/pricing" className="text-gray-600 hover:text-black transition-colors text-md font-semibold tracking-wide">Pricing</Link></li>
          <li><Link href="/faqs" className="text-gray-600 hover:text-black transition-colors text-md font-semibold tracking-wide">FAQs</Link></li>
          <li><Link href="/contact" className="text-gray-600 hover:text-black transition-colors text-md font-semibold tracking-wide">Contact</Link></li>
          <li><Link href="/blog" className="text-gray-600 hover:text-black transition-colors text-md font-semibold tracking-wide">Blog</Link></li>
        </ul>

        <div className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden md:flex'}`}>
          <Button className="border border-gray-800 text-gray-800 hover:bg-gray-300 hover:text-black text-sm px-6 py-1 rounded-full">
            <Link href="/login">Login</Link>
          </Button>
          <Button className="bg-black text-white hover:bg-gray-800 text-sm px-6 py-1 rounded-full">
            <Link href="/register">Kostenlos Testen</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;