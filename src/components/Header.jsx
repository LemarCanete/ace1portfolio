"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${
      isScrolled ? 'shadow-md' : ''
    }`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <Link href="/" className="text-2xl font-bold text-gray-800">
            My Portfolio
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/#home" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
            Home
          </Link>
          <Link href="/#workflows" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
            Workflows
          </Link>
          <Link href="/#about" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
            About
          </Link>
          <Link href="/#contact" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}