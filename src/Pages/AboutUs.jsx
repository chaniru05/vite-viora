import React, { useRef, useState } from 'react'

const links = [
  { name: 'Explore Features', href: '#' },
  { name: 'Find Vendors', href: '#' },
  { name: 'Testimonials', href: '#' },
  { name: 'Contact Us', href: '#' },
]


function TiltCard({ href, children }) {
  const cardRef = useRef(null)
  const [transform, setTransform] = useState('')

  const handleMove = (e) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const px = x / rect.width - 0.5
    const py = y / rect.height - 0.5
    const rotateX = (-py) * 10
    const rotateY = (px) * 10
    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(14px)`)
  }

  const reset = () => setTransform('rotateX(0deg) rotateY(0deg) translateZ(0)')

  return (
    <a
      href={href}
      className="tilt-wrap"
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <div ref={cardRef} style={{ transform }} className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 hover:shadow-xl hover:border-amber-200 transition-all duration-300 group min-h-[140px] flex items-center justify-center tilt-card">
        {children}
      </div>
    </a>
  )
}

export default function Example() {
  return (
    <div className="bg-gradient-to-b from-amber-50 to-yellow-50">
      {/* Header */}
      {/* <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">VIORA</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-amber-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-amber-600">Vendors</a>
              <a href="#" className="text-gray-700 hover:text-amber-600">Dashboard</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="bg-amber-400 text-white px-6 py-2 rounded-full hover:bg-amber-500 transition-colors">
                About Us
              </button>
              <button className="text-gray-600 hover:text-gray-800">Change_&gt;</button>
            </div>
      </div>
      </div>
      </header> */}

      <div className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none text-center">
            <h2 className="text-5xl font-serif font-bold text-gray-900 sm:text-7xl">About Us</h2>
            <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto">
            Creating magical weddings with elegant planning tools, cultural heritage celebration, and AI-powered assistance. Your perfect day starts here.
          </p>
        </div>
          
          <div className="mt-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {links.map((link) => (
                <TiltCard key={link.name} href={link.href}>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-amber-600 transition-colors mb-3">
                      {link.name}
                    </h3>
                    <div className="text-amber-600 group-hover:text-amber-700 text-2xl">
                      <span aria-hidden="true">&rarr;</span>
                    </div>
                  </div>
                </TiltCard>
            ))}
          </div>
              </div>
        </div>
      </div>
    </div>
  )
}