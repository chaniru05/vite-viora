import React, { useEffect, useState } from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';

// Hero Section Component
function Hero() {
  const weddingPhotos = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2070&q=80'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Preload images to avoid flashes
  useEffect(() => {
    weddingPhotos.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Auto-advance every 4000ms
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % weddingPhotos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [weddingPhotos.length]);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {weddingPhotos.map((src, index) => (
            <div
              key={index}
              className={"absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ease-linear"}
              style={{
                backgroundImage: `url('${src}')`,
                opacity: index === currentSlide ? 0.7 : 0
              }}
            />
          ))}
        </div>
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
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="w-full flex items-center gap-8">
          {/* Left: hero content (half width) */}
          <div className="basis-1/2 shrink-0 grow-0 text-left">
            <h1 className="hero-heading leading-[0.85] animate-fade-in-up relative" style={{ fontSize: 'clamp(48px, 14vw, 180px)' }}>
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.6)]">
                Your<br /> Dream<br />
                Wedding
              </span>
            </h1>
            <div className="mt-4 relative inline-block animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <span className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-white to-yellow-700 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.55)] contrast-125">Perfectly Planned</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-white/30 via-yellow-300/40 to-yellow-500/30 blur-md -z-10 rounded"></div>
              <div className="absolute -inset-1 bg-black/10 blur-[2px] -z-20 rounded"></div>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-start">
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:from-yellow-600 hover:to-yellow-700 hover:shadow-lg hover-lift animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Start your journey with us
              </button>
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:from-yellow-600 hover:to-yellow-700 hover:shadow-lg hover-lift animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <PlayIcon className="w-5 h-5 mr-2" />
                Watch Demo Video
              </button>
            </div>
          </div>

          {/* Right: decorative (half width) */}
          <div className="hidden md:block basis-1/2 shrink-0 grow-0">
            <div className="relative h-[60vh]">
              <div className="absolute -top-6 -left-4 w-52 h-52 rounded-full bg-gradient-to-br from-amber-200/50 to-transparent blur-2xl"></div>
              <div className="absolute top-24 left-16 w-32 h-32 rounded-full bg-gradient-to-tr from-amber-300/40 to-transparent blur-xl"></div>
              <div className="absolute bottom-6 left-0 opacity-70">
                <svg width="220" height="80" viewBox="0 0 220 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 60 C 40 10, 110 10, 150 50 S 210 90, 215 35" stroke="#d4af37" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
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
    <div className="bg-gradient-to-b from-transparent via-amber-50/80 to-amber-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold bg-amber-200 text-amber-900 px-3 py-1 rounded-full">Challenge</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#c9a227] drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)]">
            The Wedding Planning Challenge
          </h2>
          <p className="mt-4 text-amber-600 max-w-3xl mx-auto">
            Current solutions fall short of providing a truly integrated experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((p, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md border border-amber-100 p-8">
              <div className="text-2xl mb-3">{p.emoji}</div>
              <h3 className="text-2xl font-semibold text-amber-500 mb-3">{p.title}</h3>
              <p className="text-amber-600 leading-relaxed">{p.desc}</p>
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
    <div className="bg-gradient-to-b from-amber-50 via-amber-50 to-amber-100/60 py-24 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#c9a227] drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)]">
            Our Features
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-8 text-center hover-lift animate-fade-in-up" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
              <div className="text-amber-400 mb-4 flex justify-center animate-float">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-amber-500">
                {feature.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Pricing Plans Section
function PricingPlans() {
  const basicFeatures = [
    { label: 'Smart Budget Planning', enabled: true },
    { label: 'Curate Vendor Market Place', enabled: true },
    { label: 'AI Personalization', enabled: true },
    { label: 'Task Assignments & Checklist Feature', enabled: false },
    { label: 'Digital Invites, RSVP with Tracking, Guest Reminder, E‑Albums & Post‑Event Photo Album', enabled: false },
    { label: 'Eco‑Friendly Mode', enabled: false },
    { label: 'Cultural & Religious Templates', enabled: false },
    { label: 'Thank You, Cards & QR Code Guest Check‑in & Custom Wedding Day Timeline', enabled: false }
  ];

  const premiumFeatures = [
    { label: 'Smart Budget Planning', enabled: true },
    { label: 'Curate Vendor Market Place', enabled: true },
    { label: 'AI Personalization', enabled: true },
    { label: 'Task Assignments & Checklist Feature', enabled: true },
    { label: 'Digital Invites, RSVP with Tracking, Guest Reminder, E‑Albums & Post‑Event Photo Album', enabled: true },
    { label: 'Eco‑Friendly Mode', enabled: true },
    { label: 'Cultural & Religious Templates', enabled: true },
    { label: 'Thank You, Cards & QR Code Guest Check‑in & Custom Wedding Day Timeline', enabled: true }
  ];

  const FeatureItem = ({ text, enabled }) => (
    <li className={`flex items-start gap-2 ${enabled ? 'text-gray-800' : 'text-gray-400'}`}>
      <span className={`mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full ${enabled ? 'bg-green-300' : 'bg-gray-300'}`}>
        <svg viewBox="0 0 20 20" fill="white" className="h-3 w-3"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
      </span>
      <span className="leading-relaxed text-sm">{text}</span>
    </li>
  );

  return (
    <div className="bg-gradient-to-b from-amber-100/60 via-amber-200/40 to-amber-300/30 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 text-[#c9a227] drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)]">Choose Your Plan</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-8">
            <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">Basic Plan</h3>
            <ul className="space-y-4">
              {basicFeatures.map((f, i) => (
                <FeatureItem key={i} text={f.label} enabled={f.enabled} />
              ))}
            </ul>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-8">
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="text-2xl font-semibold text-gray-800">Premium Plan</h3>
              <span className="text-gray-800 font-bold">LKR 5000.00</span>
            </div>
            <ul className="space-y-4">
              {premiumFeatures.map((f, i) => (
                <FeatureItem key={i} text={f.label} enabled={f.enabled} />
              ))}
            </ul>
          </div>
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
    <div className="bg-gradient-to-b from-amber-300/30 via-amber-200/40 to-amber-300/30 py-24 -mt-px">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up text-[#c9a227] drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)]">
            Our Success in Numbers
          </h2>
          <p className="text-m text-amber-600 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            These numbers represent our <br /> dedication, hard work, and the trust our clients place in us.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in-up hover-lift" style={{animationDelay: `${0.4 + index * 0.1}s`}}>
              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2 drop-shadow-sm">
                  {stat.value}
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-200/20 to-amber-300/20 rounded-lg blur-sm -z-10"></div>
              </div>
              <div className="text-amber-700 font-semibold bg-white/30 px-3 py-1 rounded-full">
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
      <PricingPlans />
      <SuccessNumbers />
    </div>
  );
}

