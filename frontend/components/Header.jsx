import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MegaMenu from './MegaMenu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const scrollToSection = (sectionId) => {
    if (router.pathname !== "/") {
      router.push(`/#${sectionId}`);
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ 
        top: offsetTop, 
        behavior: "smooth" 
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 8.5V5c0-1.1-.9-2-2-2H8C6.9 3 6 3.9 6 5v3.5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2zM3 12v8c0 1.1.9 2 2 2h14c0-1.1-.9-2-2-2V12H3z" />
                </svg>
              </div>
              <span className="text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                Transportation Service
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("hero")} 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Home
            </button>
            
            {/* Services with Mega Menu */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Services
                <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <MegaMenu />
            </div>
            
            <button 
              onClick={() => scrollToSection("features")} 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
            <Link 
              href="/submissions" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Admin
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <button 
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors p-2"
            >
              <svg className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`w-6 h-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-6 space-y-2 bg-white border-t border-gray-100">
            <button 
              onClick={() => scrollToSection("hero")} 
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-lg font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")} 
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-lg font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("features")} 
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-lg font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-lg font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-lg font-medium"
            >
              Contact
            </button>
            <Link 
              href="/submissions" 
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-lg font-medium"
            >
              Admin Panel
            </Link>
            <div className="px-4 pt-2">
              <button 
                onClick={() => scrollToSection("contact")}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 font-semibold"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}