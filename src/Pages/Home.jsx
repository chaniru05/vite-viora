import React from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';

// Hero Section Component
function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
      </div>

      {/* Star Dust Animation */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="star-dust"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Couple Pre-shoot Animation */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-15 pointer-events-none">
        <div className="relative">
          {/* Couple Silhouette */}
          <div className="couple-animation couple-glow relative">
            <div className="w-32 h-40 bg-gradient-to-b from-amber-200 to-amber-300 rounded-full opacity-20 relative">
              {/* Bride silhouette */}
              <div className="absolute -top-2 -left-2 w-16 h-20 bg-gradient-to-b from-amber-100 to-amber-200 rounded-full"></div>
              {/* Groom silhouette */}
              <div className="absolute -top-2 -right-2 w-16 h-20 bg-gradient-to-b from-amber-200 to-amber-300 rounded-full"></div>
            </div>
          </div>
          
          {/* Floating Hearts */}
          <div className="absolute -top-4 -left-4">
            <div className="heart-float text-2xl">💕</div>
          </div>
          <div className="absolute -top-8 right-4">
            <div className="heart-float text-xl">💖</div>
          </div>
          <div className="absolute -bottom-4 left-8">
            <div className="heart-float text-lg">💝</div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="hero-heading text-5xl md:text-6xl lg:text-7xl text-amber-900 leading-tight animate-fade-in-up">
            Your Dream<br />
            Wedding
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-amber-700 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Perfectly Planned
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="btn-primary hover-lift animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Start your journey with us
            </button>
            <button className="btn-secondary hover-lift animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <PlayIcon className="w-5 h-5 mr-2" />
              Watch Demo Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Wedding Planning Challenge Section
function Challenge() {
  const problems = [
    {
      emoji: '😵',
      title: 'Fragmented Tools',
      desc: 'Couples juggle multiple platforms – venue walkthroughs, dress try‑ons, cake designers – with no integration between them.'
    },
    {
      emoji: '😬',
      title: 'Planning Anxiety',
      desc: 'Inability to visualize how all elements work together creates stress and leads to costly mistakes.'
    }
  ];

  return (
    <div className="bg-amber-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold bg-purple-600 text-white px-3 py-1 rounded-full">Challenge</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
            The Wedding Planning Challenge
          </h2>
          <p className="mt-4 text-amber-700 max-w-3xl mx-auto">
            Current solutions fall short of providing a truly integrated experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((p, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md border border-amber-100 p-8">
              <div className="text-2xl mb-3">{p.emoji}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{p.title}</h3>
              <p className="text-amber-700 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Features Section
function Features() {
  const features = [
    {
      name: 'Smart Budget Planning',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: 'AI & AR Assist',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      name: 'Task Management',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      name: 'Guest Management',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      name: 'Vendor Marketplace',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      name: 'Digitalization',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-amber-50 py-24 relative overflow-hidden">
      {/* Star Dust Animation for Features */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="star-dust"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${5 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block mb-6 text-xs font-semibold bg-amber-200 text-amber-900 px-3 py-1 rounded-full">Solution</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Features
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-8 text-center hover-lift animate-fade-in-up" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
              <div className="text-amber-600 mb-4 flex justify-center animate-float">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-amber-900">
                {feature.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Success in Numbers Section
function SuccessNumbers() {
  const stats = [
    { value: '20,000+', label: 'Happy Couples' },
    { value: '100+', label: 'Vendors' },
    { value: '500+', label: 'Successful Events' },
    { value: '10+', label: 'Years of Experience' }
  ];

  return (
    <div className="bg-amber-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Our Success in Numbers
          </h2>
          <p className="text-lg text-amber-600 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            These numbers represent our dedication, hard work, and the trust our clients place in us.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in-up" style={{animationDelay: `${0.4 + index * 0.1}s`}}>
              <div className="text-4xl md:text-5xl font-bold text-amber-800 mb-2">
                {stat.value}
              </div>
              <div className="text-amber-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Main Home Component
export default function Home() {
  return (
    <div>
      <Hero />
      <Challenge />
      <Features />
      <SuccessNumbers />
    </div>
  );
}
