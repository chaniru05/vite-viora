import React from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';

// Hero Section Component
function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
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
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="heading-1 animate-fade-in-up">
            Your Dream<br />
            Wedding
          </h1>
          <p className="mt-6 text-large animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Perfectly Planned
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="btn-primary hover-lift animate-fade-in-up relative overflow-hidden group" style={{animationDelay: '0.4s'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-amber-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-amber-300 rounded-full animate-float-slow opacity-60"></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-amber-400 rounded-full animate-float-slow-reverse opacity-40" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/2 -right-1 w-2 h-2 bg-amber-200 rounded-full animate-float-slow opacity-50" style={{animationDelay: '1s'}}></div>
              <div className="relative flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Start your journey with us
              </div>
            </button>
            <button className="btn-secondary hover-lift animate-fade-in-up relative overflow-hidden group" style={{animationDelay: '0.6s'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-amber-200 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-amber-300 rounded-full animate-float-slow opacity-50" style={{animationDelay: '0.3s'}}></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-amber-400 rounded-full animate-float-slow-reverse opacity-60" style={{animationDelay: '0.8s'}}></div>
              <div className="relative flex items-center">
                <PlayIcon className="w-5 h-5 mr-2" />
                Watch Demo Video
              </div>
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
      desc:
        'Couples juggle multiple platforms – venue walkthroughs, dress try‑ons, cake designers – with no integration between them.'
    },
    {
      emoji: '😬',
      title: 'Planning Anxiety',
      desc:
        'Inability to visualize how all elements work together creates stress and leads to costly mistakes.'
    }
  ];

   return (
     <div className="bg-amber-50 py-20">
       <div className="max-w-7xl mx-auto px-6 lg:px-8">
         <div className="text-center mb-10">
           <span className="inline-block text-xs font-semibold bg-amber-200 text-amber-900 px-3 py-1 rounded-full">Challenge</span>
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
          <h2 className="heading-2 mb-4 animate-fade-in-up">
            Our Success in Numbers
          </h2>
          <p className="text-lg text-amber-600 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            These numbers represent our dedication, hard work, and the trust our clients place in us.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in-up relative overflow-hidden group" style={{animationDelay: `${0.4 + index * 0.1}s`}}>
              {/* Moving rectangles */}
              <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-amber-300 rounded-full animate-float-slow opacity-50" style={{animationDelay: `${index * 0.3}s`}}></div>
              <div className="absolute top-3 right-2 w-1 h-1 bg-amber-400 rounded-full animate-float-slow-reverse opacity-40" style={{animationDelay: `${0.2 + index * 0.3}s`}}></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 bg-amber-200 rounded-full animate-float-slow opacity-30" style={{animationDelay: `${0.4 + index * 0.3}s`}}></div>
              <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-amber-300 rounded-full animate-float-slow-reverse opacity-60" style={{animationDelay: `${0.6 + index * 0.3}s`}}></div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg"></div>
              
              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold text-amber-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-amber-600 font-medium">
                  {stat.label}
                </div>
              </div>
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
    <div className="bg-amber-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block mb-6 text-xs font-semibold bg-amber-200 text-amber-900 px-3 py-1 rounded-full animate-fade-in-up" style={{animationDelay: '0.1s'}}>Solution</span>
          <h2 className="heading-2 animate-fade-in-up">
            Our Features
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-8 text-center hover-lift animate-fade-in-up relative overflow-hidden group" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
              {/* Moving rectangles */}
              <div className="absolute top-2 left-2 w-2 h-2 bg-amber-300 rounded-full animate-float-slow opacity-40" style={{animationDelay: `${index * 0.2}s`}}></div>
              <div className="absolute top-4 right-3 w-1.5 h-1.5 bg-amber-400 rounded-full animate-float-slow-reverse opacity-50" style={{animationDelay: `${0.3 + index * 0.2}s`}}></div>
              <div className="absolute bottom-3 left-3 w-1 h-1 bg-amber-200 rounded-full animate-float-slow opacity-60" style={{animationDelay: `${0.6 + index * 0.2}s`}}></div>
              <div className="absolute bottom-2 right-2 w-2.5 h-2.5 bg-amber-300 rounded-full animate-float-slow-reverse opacity-30" style={{animationDelay: `${0.9 + index * 0.2}s`}}></div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="text-amber-600 mb-4 flex justify-center animate-float">
                  {feature.icon}
                </div>
                <h3 className="heading-3">
                  {feature.name}
                </h3>
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