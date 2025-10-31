'use client'

import { useState, useEffect, useCallback } from 'react'
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'  // ✅ Added

export default function WeddingNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('Home')

  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Vendors', path: '/vendors' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Web setup', path: '/webset' },
    { name: 'About Us', path: '/about' },
  ]

  // Detect scroll for shadow/background change
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Update active tab based on URL path
  useEffect(() => {
    const current = navItems.find(item => location.pathname === item.path)
    if (current) setActiveTab(current.name)
  }, [location])

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
        {/* Logo */}
        <div className="flex lg:flex-1 items-center gap-2">
          <Link
            to="/"
            onClick={() => setActiveTab('Home')}
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
          </Link>
        </div>

        {/* Mobile Menu Button */}
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

        {/* Desktop Menu */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-4">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setActiveTab(item.name)}
              className={`
                relative px-3 py-2 rounded-lg font-medium transition-all duration-500 ease-out
                transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold
                ${scrolled ? 'text-gray-800' : 'text-gray-800 drop-shadow-md'}
                hover:bg-gold/20 hover:text-black
                ${activeTab === item.name ? 'bg-gold/40 text-black shadow-inner' : ''}
                opacity-0 animate-fade-in
              `}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {item.name}
            </Link>
          ))}
        </PopoverGroup>

        {/* Login Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/login"
            className={`
              rounded-full px-5 py-2.5 text-sm font-bold shadow-md transition-all duration-300 transform hover:scale-105
              hover:shadow-[0_0_25px_rgba(255,215,0,0.8)] focus:outline-none focus:ring-4 focus:ring-gold/50
              ${scrolled
                ? 'bg-black text-white hover:bg-gray-800'
                : 'bg-black text-white hover:bg-gold hover:text-white border-2 border-gold/50'}
            `}
          >
            Log in →
          </Link>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-3/4 sm:max-w-sm bg-white p-6 shadow-2xl rounded-l-3xl transform transition-transform duration-500 ease-out">
          <div className="flex items-center justify-between border-b pb-4 border-gold/30">
            <Link to="/" className="flex items-center gap-2 transform transition-transform duration-300 hover:scale-105">
              <img alt="Logo" src="/assets/VioraLogo.png" className="h-8 w-8" />
              <span className="font-dancing text-xl text-gold font-bold">VIORAA</span>
            </Link>
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
              <Link
                key={item.name}
                to={item.path}
                onClick={() => {
                  setActiveTab(item.name)
                  setMobileMenuOpen(false)
                }}
                className={`
                  block rounded-xl px-4 py-3 text-lg font-semibold text-gray-800 transition-all duration-300 transform
                  hover:scale-[1.02] hover:bg-gold/30 hover:shadow-md
                  ${activeTab === item.name ? 'bg-gold/50 text-black shadow-lg' : ''}
                  opacity-0 animate-slide-in-right
                `}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="block mt-6 rounded-full bg-black text-center px-4 py-3 text-sm font-bold text-white shadow-lg hover:bg-gray-800 hover:scale-105 transition-transform duration-300"
            >
              Log in →
            </Link>
          </div>
        </DialogPanel>
      </Dialog>

      {/* Keep your CSS animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-right { animation: slideInRight 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }

        .text-gold { color: #FFD700; }
        .bg-gold\\/20 { background-color: rgba(255, 215, 0, 0.2); }
        .bg-gold\\/40 { background-color: rgba(255, 215, 0, 0.4); }
        .bg-gold\\/50 { background-color: rgba(255, 215, 0, 0.5); }
        .hover\\:text-gold:hover { color: #FFD700; }
        .text-gold-900 { color: #B8860B; }
      `}</style>
    </header>
  )
}