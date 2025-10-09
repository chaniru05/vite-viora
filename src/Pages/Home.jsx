'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, BanknotesIcon, CpuChipIcon, ClipboardDocumentCheckIcon, UserGroupIcon, BuildingStorefrontIcon, CursorArrowRaysIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
const stats = [
  { id: 1, name: 'Successful weddings planned', value: '10,000+' },
  { id: 2, name: ' Verified partners nationwide', value: '500+' },
  { id: 3, name: 'Client recommendation score', value: '98%' },
  {id: 3, name: 'Traditional templates available', value: '25+' },
]
const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
]

/*this is main sectionwith bg image */
 function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-[url('src/assets/homebg.png')] bg-cover bg-center bg-no-repeat relative min-h-screen flex items-center">
       <div className="relative isolate px- pt-8 lg:px-6">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-left">
            <h1 className="hero-heading mt-4 text-10xl tracking-tight text-balance text-white sm:text-9xl">
              your <br></br> dream <br></br>wedding 
            </h1>
            <p className="mt-8 text-xl font-medium text-pretty text-white sm:text-4xl dark:[#C5A355]">
              perfectly planned
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#C5A355] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg- focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline- dark:bg- dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
              >
                Start your journey with us
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                watch our success stories <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  )
}
/*this is stats */
function Stats() {
  return (
    <div className="bg-[#F3EBE1] py-24 sm:py-32">
      <h1 className='success-font text-7xl text-center text-[#C5A355] font-bold'>our success in numbers</h1>
      <div className="flex justify-center">
  <p className="text-sm text-center text-[#C5A355] leading-loose font-normal max-w-md">
    These numbers represent real couples who trusted us with their most important day
  </p>
      </div>
       <br></br>
        <br></br>
      <div className="mx-auto max-w-7xl gap-y-8 px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
/*this is features section*/
function Features() {
  const iconClass = "h-24 w-24 text-[#1f2937]" // gray-800
  const featureCards = [
    {
      title: 'Smart Budget Planning',
      icon: <BanknotesIcon className={iconClass} />, 
    },
    {
      title: 'AI & AR Assist',
      icon: <CpuChipIcon className={iconClass} />, 
    },
    {
      title: 'Task Management',
      icon: <ClipboardDocumentCheckIcon className={iconClass} />, 
    },
    {
      title: 'Guest Management',
      icon: <UserGroupIcon className={iconClass} />, 
    },
    {
      title: 'Vendor Marketplace',
      icon: <BuildingStorefrontIcon className={iconClass} />, 
    },
    {
      title: 'Digitalization',
      icon: <CursorArrowRaysIcon className={iconClass} />, 
    },
  ]

  return (
    <div className="bg-[#F3EBE1] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl text-center text-gray-900 mb-10">Our Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureCards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl md:text-3xl text-gray-900 mb-6">{card.title}</h3>
              <div className="h-40 w-40 flex items-center justify-center">
                {card.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
/*here i merge all of them*/
export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Features />
    </div>
  )
}