import React, { useEffect, useState } from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';
import { CheckIcon } from '@heroicons/react/20/solid';




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
                opacity: index === currentSlide ? 0.3 : 0
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
            <h1 className="hero-heading leading-[0.85] animate-fade-in-up relative bg-gradient-to-r from-[#A5782B] via-[#C99738] to-[#F4D362] bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.55)] contrast-100" style={{ fontSize: 'clamp(48px, 14vw, 180px)' }}>
                Your Dream Wedding
            </h1>
            <div className="mt-4 text-5xl relative inline-block animate-fade-in-up bg-gradient-to-r from-[#A5782B] via-[#C99738] to-[#F4D362] bg-clip-text text-transparent -shadow-[0_2px_2px_rgba(0,0,0,0.55)] contrdropast-100" style={{animationDelay: '0.2s'}}>
                Perfectly Planned
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-start">
              <button className="bg-gradient-to-r from-yellow-800 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:from-yellow-600 hover:to-yellow-700 hover:shadow-lg hover-lift animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Start your journey with us
              </button>
              <button className="bg-gradient-to-r from-yellow-800 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:from-yellow-600 hover:to-yellow-700 hover:shadow-lg hover-lift animate-fade-in-up" style={{animationDelay: '0.6s'}}>
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
                  <path d="M5 60 C 40 10, 110 10, 150 50 S 210 90, 215 35"  strokeWidth="2" fill="none" />
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
      desc: 'Couples juggle multiple platforms – venue walkthroughs, dress try‑ons, cake designers – with no integration between them.',
      img: '../home-assest/FragmentedTools.png'
    },
    {
      emoji: '😬',
      title: 'Planning Anxiety',
      desc: 'Inability to visualize how all elements work together creates stress and leads to costly mistakes.',
      img: '../home-assest/anxiety.jpeg'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-amber-50 via-amber-100 to-amber-150 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold bg-amber-200 text-amber-900 px-3 py-1 rounded-full">Challenge</span>
          <h2 className=" mt-6 text-5xl md:text-5xl font-extrabold bg-gradient-to-r from-[#A5782B] via-[#C99738] to-[#F4D362] bg-clip-text text-transparent pb-10">
            The Wedding Planning Challenge
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((p, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md border border-amber-100 p-8 flex flex-col items-center">
              <div className="w-full h-36 mb-4 rounded-xl overflow-hidden flex items-center justify-center bg-amber-50">
                <img src={p.img} alt={p.title} className="object-cover w-full h-full" />
              </div>
              <div className="text-2xl mb-3">{p.emoji}</div>
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#A5782B] via-[#C99738] to-[#F4D362] bg-clip-text text-transparent mb-3">{p.title}</h3>
              <p className="leading-relaxed bg-gradient-to-r from-[#A5782B] via-[#C99738] to-[#F4D362] bg-clip-text text-transparent">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Features Section — descriptive cards with images
function Features() {
  const cards = [
    {
      tag: 'Guest Management',
      title: 'Your invitations',
      desc: 'Choose from hundreds of customizable designs in your style and budget. Make RSVPs easier with QR codes and a free matching website.',
      img: '../home-assest/couple.jpg'
    },
    {
      tag: 'SMART BUDGETING',
      title: 'Your budget and vision',
      desc: "Make the next steps easier! We'll help you gather inspo, find your wedding style, set up a budget",
      img: '../home-assest/budget.jpg'
    },
    {
      tag: 'PERSONALIZED RECOMMENDATIONS',
      title: 'AI & AR Assist',
      desc: 'Blending AI insight with AR visuals for instant, hands-on guidance.',
      img: '../home-assest/Ai&Ar.png'
    },
    {
      tag: 'STAY ON TRACK',
      title: 'Task Management',
      desc: 'Keep everything on track with our smart checklist and task assignments. Never miss a deadline again!',
      img: '../home-assest/track.png'
    },
    {
      tag: 'VENDOR MARKETPLACE',
      title: 'Verified vendor marketplace',
      desc: ' A trusted platform connecting you with pre-verified, reliable service providers.',
      img: '../home-assest/Verified_Vendor.png'
    },
    {
      tag: 'DIGITALIZATION',
      title: 'Seamless Smart Planning',
      desc: 'Transforming traditional celebrations with smart, tech-driven planning, virtual experiences, and seamless online coordination.',
      img: '../home-assest/ECO.png'
    }
  ];

  return (
    <div className=" bg-gradient-to-b from-amber-150 via-amber-100 to-amber-150 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl bg-amber-50 font-extrabold text-center bg-gradient-to-r from-[#A5782B] via-[#C99738] to-[#F4D362] bg-clip-text text-transparent contrast-120 pb-10 mb-12">We'll walk you through every part of planning</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <article key={i} className="bg-amber-100 rounded-2xl shadow-md overflow-hidden">
              <div className="h-52 w-full overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-full object-tile" />
              </div>
              <div className="p-6 text-center">
                <div className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-2">{c.tag}</div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">{c.title}</h3>
                <p className="text-gray-600 mb-6">{c.desc}</p>
                <button className="inline-block bg-transparent border border-amber-600 text-amber-600 rounded-full px-6 py-2 font-semibold hover:bg-amber-50 transition">Get started</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

// Pricing Plans Section Data
const tiers = [
  {
    name: '',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: 'Free',
    description: "The perfect plan if you're just getting started with our product.",
    features: ['AI Personalization', 'Curate Vendor Market Place', 'Smart Budget Planning', 'Task Assignments & Checklist Feature'],
    featured: false,
  },
  {
    name: '',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: 'Rs 1500',
    description: 'Craft your dream wedding with smart, stylish, and seamless planning tools.',
    features: [
      'AI Personalization',
      'Curate Vendor Market Place',
      'Smart Budget Planning',
      'Task Assignments & Checklist Feature',
      'Digital Invites, RSVP with Tracking, Guest Reminder, E‑Albums & Post‑Event Photo Album',
      'Eco‑Friendly Mode',
      'Cultural & Religious Templates',
      'Thank You, Cards & QR Code Guest Check‑in & Custom Wedding Day Timeline',
    ],
    featured: true,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// Pricing Plans Section

function PricingPlans() {
  return (
    <div className="relative isolate bg-gradient-to-b from-amber-150 via-amber-200 to-amber-100 px-6 py-24 sm:py-32 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-1155/678 w-288.75  opacity-30"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-block mb-6 text-xs font-semibold bg-amber-200 text-amber-900 px-3 py-1 rounded-full">pricing</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#A5782B] via-[#C99738] to-[#F4D362] bg-clip-text text-transparent contrast-100">
            Perfect plan for you
          </h2>
      </div>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              'relative bg-gradient-to-br from-[#A5782B] via-[#C99738] to-[#F4D362] shadow-2xl',
              tierIdx === 0
                ? 'rounded-t-3xl sm:rounded-b-3xl lg:rounded-tr-3xl lg:rounded-bl-3xl'
                : 'sm:rounded-t-3xl lg:rounded-tr-3xl lg:rounded-bl-3xl',
              'rounded-3xl p-8 ring-2 ring-[#C99738]/40 sm:p-10',
              'transition-all duration-300 hover:scale-[1.025] hover:shadow-gold',
              'overflow-hidden',
            )}
            style={{
              boxShadow: '0 8px 32px 0 rgba(165,120,43,0.18), 0 1.5px 8px 0 rgba(249,213,98,0.12)',
            }}
          >
            <h3
              id={tier.id}
              className="text-base/7 font-extrabold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]"
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-extrabold text-amber-50 drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]">
                {tier.priceMonthly}
              </span>
              {tierIdx === 1 && (
                <span className="text-base text-amber-50/80 font-semibold">/month</span>
              )}
            </p>
            <p className="mt-6 text-base/7 text-white font-medium drop-shadow-[0_1px_1px_rgba(200,151,56,0.10)]">
              {tier.description}
            </p>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm/6 sm:mt-10 text-white font-medium"
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-amber-50 drop-shadow-[0_1px_1px_rgba(200,151,56,0.15)]"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              type="button"
              aria-describedby={tier.id}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:from-yellow-600 hover:to-yellow-700 hover:shadow-lg hover-lift animate-fade-in-up mt-8 block w-full text-center text-base sm:mt-10"
              style={{ animationDelay: '0.4s' }}
            >
              Get started today
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
// Main Home Component
export default function Home() {
  return (
    <div>
      <Hero />
      <Challenge />
      <Features />
      <PricingPlans />
    </div>
  );
}