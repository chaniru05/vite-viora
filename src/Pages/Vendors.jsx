const callouts = [
  {
    name: 'Ceremonial Arrangements',
    description: 'Turn your dream ceremony into a masterpiece of love',
    imageSrc: 'https://i.pinimg.com/736x/41/21/9e/41219ebb4d82f08d22147174e4b5442c.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Venues',
    description: 'A venue as unforgettable as your love story',
    imageSrc: 'https://i.pinimg.com/1200x/66/45/6d/66456d2cdd8a8155bc6f6b3b8232407d.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Beauty',
    description: 'Be the glow everyone remembers',
    imageSrc: 'https://i.pinimg.com/736x/74/2c/f6/742cf697b05090af3f4a8b98a9b231b4.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
   {
    name: 'Accessories',
    description: 'Music that moves hearts, moments that stay forever',
    imageSrc: 'https://i.pinimg.com/736x/6e/47/57/6e4757abde35e5ac59e49050455bd70c.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Decorations',
    description: 'Design all moments that dazzle',
    imageSrc: 'https://i.pinimg.com/1200x/cb/0c/ff/cb0cff9b0cc98d514500c2562f5efefd.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Music/Entertainment',
    description: 'Music that moves hearts, moments that stay forever',
    imageSrc: 'https://i.pinimg.com/736x/6e/47/57/6e4757abde35e5ac59e49050455bd70c.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Event Matrerials',
    description: 'From invites to memories we craft it all',
    imageSrc: 'https://i.pinimg.com/1200x/10/48/75/104875a63c63ed3047d31c9beaa54b23.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

export default function Example() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Categories</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <img
                  alt={callout.imageAlt}
                  src={callout.imageSrc}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
