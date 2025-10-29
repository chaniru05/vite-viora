'use client'

import { useState, useEffect, useCallback } from 'react'
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

// Helper function to simulate a smooth scroll to a section
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function WeddingNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('Home')


  const navItems = ['Home', 'Vendors', 'Dashboard', 'About Us']

  
  // Custom Hook/Logic for Scroll-Based Active Tab (Scroll Spy)
  const handleScroll = useCallback(() => {
    // 1. Navbar Scroll State
    setScrolled(window.scrollY > 50);

    // 2. Active Tab Detection (Scroll Spy)
    let currentActive = 'Home'; // Default to Home
    
    // Find all potential sections on the page
    for (const item of navItems) {
      // Assuming section IDs match the nav item names (e.g., 'Vendors' -> id='Vendors')
      const element = document.getElementById(item); 
      if (element) {
        // Get the position of the section relative to the viewport
        const rect = element.getBoundingClientRect(); 

        // If the top of the section is less than half the viewport height, 
        // consider it the current section, with a small buffer
        if (rect.top <= window.innerHeight * 0.45) { 
          currentActive = item;
        }
      }
    }
    setActiveTab(currentActive);
  }, [navItems]);

  useEffect(() => {
    // Initial call and set up listener
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]); // Dependency on handleScroll to satisfy useCallback

  const handleNavClick = (item) => {
    setActiveTab(item);
    setMobileMenuOpen(false); // Close mobile menu on selection
    scrollToSection(item); // Smooth scroll to the section
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? 'bg-white/95 shadow-xl backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-5 lg:px-8 transition-all duration-500 ease-in-out"
      >
        {/* Logo - Enhanced Wiggle/Scale on Hover */}
        <div className="flex lg:flex-1 items-center gap-2">
          <a
            href="#"
            onClick={() => handleNavClick('Home')}
            className="flex items-center gap-2 transform transition-all duration-500 hover:scale-105 hover:rotate-1 focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <img
              alt="Wedding Logo"

              src="/assets/VioraLogo.png"

              className="h-10 w-10 transition-transform duration-500 group-hover:rotate-12"
            />
            <span
              className={`font-dancing text-2xl font-semibold transition-colors duration-500 ${
                scrolled ? 'text-gold-900' : 'text-gold-900 drop-shadow-lg'
              } hover:text-gold`}
            >
              VIORAA

            </span>
          </a>
        </div>

        {/* Mobile menu button - Animated press state */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`rounded-full p-2.5 transition-all duration-300 transform active:scale-90 ${
              scrolled
                ? 'text-gray-700 hover:bg-gold/20 hover:text-gold'
                : 'text-gray-700 hover:bg-gold/20 hover:text-gold'
            }`}
          >
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Menu - Staggered Fade-In on Load */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-4">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item}`} 
              onClick={(e) => {
                e.preventDefault(); 
                handleNavClick(item);
              }}
              // Removed all 'before:' utility classes for the underline effect
              className={`
                relative px-3 py-2 rounded-lg font-medium transition-all duration-500 ease-out 
                transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold 
                // Color based on scroll
                ${scrolled ? 'text-gray-800' : 'text-gray-800 drop-shadow-md'}
                // Hover Effects: Color and background
                hover:bg-gold/20 hover:text-black
                // Active State: Enhanced visual feedback
                ${activeTab === item ? 'bg-gold/40 text-black shadow-inner' : ''}
                // Initial Load Animation 
                opacity-0 animate-fade-in
              `}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {item}
            </a>
          ))}
        </PopoverGroup>

        {/* Login button - Animated glow on hover */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className={`
              rounded-full px-5 py-2.5 text-sm font-bold shadow-md transition-all duration-300 transform hover:scale-105
              // Glow effect on hover
              hover:shadow-[0_0_25px_rgba(255,215,0,0.8)] focus:outline-none focus:ring-4 focus:ring-gold/50
              ${scrolled
                ? 'bg-black text-white hover:bg-gray-800'
                : 'bg-black text-white hover:bg-gold hover:text-white border-2 border-gold/50'
              }
            `}
          >
            Log in →
          </a>
        </div>
      </nav>

      {/* Mobile Drawer - Enhanced visual appeal */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity" />
        <DialogPanel 
          className="fixed inset-y-0 right-0 z-50 w-3/4 sm:max-w-sm bg-white p-6 shadow-2xl rounded-l-3xl transform transition-transform duration-500 ease-out"
        >
          <div className="flex items-center justify-between border-b pb-4 border-gold/30">
            <a href="#" className="flex items-center gap-2 transform transition-transform duration-300 hover:scale-105">
              <img
                alt="Logo"
                src="/assets/VioraLogo.png"
                className="h-8 w-8"
              />
              <span className="font-dancing text-xl text-gold font-bold">VIORAA</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-full p-2 text-gray-700 hover:bg-gold/20 hover:text-gold transition transform active:scale-90"
            >
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 space-y-3">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                }}
                className={`
                  block rounded-xl px-4 py-3 text-lg font-semibold text-gray-800 transition-all duration-300 transform 
                  // Hover and Active Styles
                  hover:scale-[1.02] hover:bg-gold/30 hover:shadow-md
                  ${activeTab === item ? 'bg-gold/50 text-black shadow-lg' : ''}
                  // Mobile Staggered Effect
                  opacity-0 animate-slide-in-right
                `}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="block mt-6 rounded-full bg-black text-center px-4 py-3 text-sm font-bold text-white shadow-lg hover:bg-gray-800 hover:scale-105 transition-transform duration-300"
            >
              Log in →
            </a>
          </div>
        </DialogPanel>
      </Dialog>

      {/* Tailwind CSS keyframes for custom animations (requires setup in tailwind.config.js) */}
      <style jsx global>{`
        /* Note: For full effect, you'd need to configure these in your tailwind.config.js */
        /* For this example, we assume you have generic 'fade-in' and 'slide-in-right' utilities */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
        }

        @keyframes slideInRight {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-right {
            animation: slideInRight 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        /* Set gold color for a wedding theme (if not defined in your tailwind config) */
        .text-gold { color: #FFD700; }
        .bg-gold\\/20 { background-color: rgba(255, 215, 0, 0.2); }
        .bg-gold\\/40 { background-color: rgba(255, 215, 0, 0.4); }
        .bg-gold\\/50 { background-color: rgba(255, 215, 0, 0.5); }
        .hover\\:text-gold:hover { color: #FFD700; }
        .text-gold-900 { color: #B8860B; } /* Darker gold when scrolled */

        /* Add your 'font-dancing' definition here or in your global CSS */
      `}</style>
    </header>
  )
}