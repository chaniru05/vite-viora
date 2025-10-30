// Example.jsx or Example.js

const links = [
  { name: 'Explore Features', href: '#' },
  { name: 'Find Vendors', href: '#' },
  { name: 'Testimonials', href: '#' },
  { name: 'Contact Us', href: '#' },
]


export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32 text-center">
      {/* Background Image (Commented out in original) */}
      {/* <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=screen"
        className="absolute inset-0 -z-10 size-full object-cover object-right opacity-10 md:object-center"
      /> */}

      {/* Decorative Blob 1 */}
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-15"
        />
      </div>

      {/* Decorative Blob 2 */}
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-15"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Content */}
        <div className="mx-auto max-w-2xl lg:mx-0 text-center">
          <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">About Us</h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8">
            Creating magical weddings with elegant planning tools, cultural heritage celebration, and AI-powered assistance. Your perfect day starts here.
          </p>
        </div>

        {/* Links */}
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none text-center">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-gray-900 sm:grid-cols-2 md:flex lg:gap-x-10 justify-center">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}