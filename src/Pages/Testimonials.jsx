import React from "react";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-yellow-50">
      

      <div className="py-16 px-4 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-5xl font-serif font-bold text-gray-900">
            Testimonials & Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real couples sharing their magical wedding journeys with EternalBliss
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          {/* Testimonial 1 - Viora & Aaron */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                <div className="w-8 h-8 bg-amber-200 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Viora & Aaron</h3>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Galle, Srilanka
                </div>
              </div>
            </div>
            <blockquote className="text-gray-700 mb-6 italic">
              "EternalBliss made our dream wedding come true! From budget planning to the perfect vendor matches, every detail was handled with such elegance and care. Our Sinhala-Christian fusion ceremony was absolutely magical."
            </blockquote>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">Customized Decor</span>
              <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">Budget-Friendly</span>
              <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">Vendor Management</span>
            </div>
          </div>

          {/* Testimonial 2 - Priya & David */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                <div className="w-8 h-8 bg-amber-200 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Priya & David</h3>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Colombo, Srilanka
                </div>
              </div>
            </div>
            <blockquote className="text-gray-700 mb-6 italic">
              "The AI assistant was incredible! It suggested vendors we never would have found ourselves, and the AR preview helped us visualize our beach setup perfectly. The digital RSVPs made guest management so easy."
            </blockquote>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">Seamless Planning</span>
              <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">Cultural Themes</span>
              <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">Modern Fusion</span>
            </div>
          </div>

          {/* Testimonial 3 - Yamara & James */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                <div className="w-8 h-8 bg-amber-200 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Yamara & James</h3>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Trincomalee, Srilanka
                </div>
              </div>
            </div>
            <blockquote className="text-gray-700 mb-6 italic">
              "As a Tamil-Christian couple, we were worried about blending our traditions. EternalBliss provided the perfect cultural templates and helped us create a ceremony that honored both our families beautifully."
            </blockquote>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">Customized Decor</span>
              <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">Budget-Friendly</span>
              <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">Vendor Management</span>
            </div>
          </div>

          {/* Testimonial 4 - Lisa & Rajesh */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                <div className="w-8 h-8 bg-amber-200 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Lisa & Rajesh</h3>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Negombo, Srilanka
                </div>
              </div>
            </div>
            <blockquote className="text-gray-700 mb-6 italic">
              "We wanted a sustainable wedding that didn't compromise on elegance. The eco-friendly mode helped us find certified green vendors and plan a carbon-neutral celebration. It was perfect!"
            </blockquote>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">Seamless Planning</span>
              <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">Cultural Themes</span>
              <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">Modern Fusion</span>
            </div>
          </div>
        </div>

        {/* Watch Our Success Stories Section */}
{/*         <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Watch Our Success Stories
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center relative overflow-hidden">
              <video 
                className="w-full h-full object-cover rounded-2xl"
                controls
                poster="/videos/video-poster.jpg"
              >
                <source src="/videos/success-story-video.mp4" type="video/mp4" />
                <source src="/videos/success-story-video.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="text-center mt-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Sarah & Michael's Journey</h4>
              <p className="text-gray-600">From our first consultation to the magical day itself</p>
            </div>
          </div>
        </div> */}

        {/* Linasha & Udeesha YouTube Story */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Linasha & Udeesha: Our Latest Engagement Story
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 rounded-2xl h-80 relative overflow-hidden">
              {/* YouTube Video Embed */}
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/rrSRDpJoQ90"
                title="LINASHA & UDEESHA ENGAGEMENT MOMENT | Sri Lanka Engagement | Wedding Video Sri Lanka | 2024"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-center mt-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">LINASHA & UDEESHA ENGAGEMENT MOMENT | Sri Lanka Engagement | Wedding Video Sri Lanka | 2024</h4>
{/*               <p className="text-gray-600">A beautiful Sri Lankan engagement moment by Studio VisualFX</p> */}
            </div>
          </div>
        </div>


        {/* Ready to Create Your Success Story Section */}
        <div className="bg-amber-100 rounded-3xl p-12 text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of couples who have trusted EternalBliss to make their wedding dreams come true.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-amber-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-900 transition-colors">
              Start Planning Your Wedding
            </button>
            <a href="#" className="text-amber-800 hover:text-amber-900 font-semibold">
              Read More Stories &gt;
            </a>
          </div>
        </div>
      </div>

      

    </div>
  );
};

export default Testimonials;