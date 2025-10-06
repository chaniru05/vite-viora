const callouts = [
  {
    name: 'Ceremonial Arrangements',
    imageSrc: 'https://i.pinimg.com/736x/41/21/9e/41219ebb4d82f08d22147174e4b5442c.jpg',
    href: '#',
  },
  {
    name: 'Venues',
    imageSrc: 'https://i.pinimg.com/1200x/66/45/6d/66456d2cdd8a8155bc6f6b3b8232407d.jpg',
    href: '#',
  },
  {
    name: 'Beauty',
    imageSrc: 'https://i.pinimg.com/736x/74/2c/f6/742cf697b05090af3f4a8b98a9b231b4.jpg',
    href: '#',
  },
  {
    name: 'Accessories',
    imageSrc: 'https://i.pinimg.com/1200x/e6/7b/38/e67b3893f6446b55ff53962b4e0caef7.jpg',
    href: '#',
  },
  {
    name: 'Decorations',
    imageSrc: 'https://i.pinimg.com/1200x/cb/0c/ff/cb0cff9b0cc98d514500c2562f5efefd.jpg',
    href: '#',
  },
  {
    name: 'Music/Entertainment',
    imageSrc: 'https://i.pinimg.com/736x/6e/47/57/6e4757abde35e5ac59e49050455bd70c.jpg',
    href: '#',
  },
  {
    name: 'Event Materials',
    imageSrc: 'https://i.pinimg.com/1200x/b2/59/58/b25958abcb720aa27f6806a28d86616e.jpg',
    href: '#',
  },
  {
    name: 'Photography/Videography',
    imageSrc: 'https://i.pinimg.com/736x/21/be/56/21be568c8cd14b7a58f5f3f4bc1d96e6.jpg',
    href: '#',
  },
  {
    name: 'Cake & Bites',
    imageSrc: 'https://i.pinimg.com/1200x/fe/a6/84/fea684292356f85c89c07886b24307f8.jpg',
    href: '#',
  },
];

export default function Example() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-40 lg:max-w-none lg:py-48 text-center">
          
          <h2 className="text-7xl font-bold text-gray-900">Categories</h2>

          <div className="mt-30 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-8">
            {callouts.map((callout) => (
              <a
                key={callout.name}
                href={callout.href}
                className="mt-1 group relative block transform transition-transform duration-300 ease-in-out hover:scale-103"
              >
                <div className="mt-13 relative rounded-2xl overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(255,192,203,0.6)]">
                  <img
                    alt={callout.name}
                    src={callout.imageSrc}
                    className="w-full rounded-2xl object-cover max-sm:h-80 sm:aspect-2/1 lg:aspect-square transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-90 rounded-2xl"></div>

                  
                  <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-lg font-semibold text-white drop-shadow-md tracking-wide">
                    {callout.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
