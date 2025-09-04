'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: true },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Design', href: '/design' },
    { name: 'Range', href: '/range' },
    { name: 'RAL Colors', href: '/ral-chart' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-primary-200/50' 
        : 'bg-transparent border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={`text-2xl font-bold font-heading transition-colors duration-300 ${
              isScrolled ? 'text-primary-900' : 'text-white drop-shadow-lg'
            }`}>
              Modernis
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium uppercase tracking-wide transition-all duration-300 flex items-center ${
                  isScrolled 
                    ? 'text-primary-700 hover:text-primary-900' 
                    : 'text-white/90 hover:text-white drop-shadow-md'
                }`}
              >
                {item.icon ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ) : (
                  item.name
                )}
              </Link>
            ))}
          </nav>

          {/* Contact Phone & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+441234567890"
              className={`font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-primary-700 hover:text-primary-900' 
                  : 'text-white/90 hover:text-white drop-shadow-md'
              }`}
            >
              +44 123 456 7890
            </a>
            <Button 
              size="sm"
              className={`transition-all duration-300 ${
                isScrolled
                  ? 'bg-primary-900 text-white hover:bg-primary-800'
                  : 'bg-white/20 text-white border-2 border-white/30 hover:bg-white hover:text-primary-900 backdrop-blur-sm'
              }`}
            >
              Get a Price
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-primary-900' : 'text-white drop-shadow-md'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t transition-all duration-300 ${
              isScrolled 
                ? 'bg-white/95 backdrop-blur-md border-primary-200/80' 
                : 'bg-black/20 backdrop-blur-md border-white/30'
            }`}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-sm font-medium uppercase tracking-wide flex items-center transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-primary-700 hover:text-primary-900' 
                      : 'text-white/90 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  ) : (
                    item.name
                  )}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                <a
                  href="tel:+441234567890"
                  className={`block font-medium transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-primary-700 hover:text-primary-900' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  +44 123 456 7890
                </a>
                <Button 
                  size="sm" 
                  className={`w-full transition-all duration-300 ${
                    isScrolled
                      ? 'bg-primary-900 text-white hover:bg-primary-800'
                      : 'bg-white/20 text-white border-2 border-white/30 hover:bg-white hover:text-primary-900 backdrop-blur-sm'
                  }`}
                >
                  Get a Price
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;