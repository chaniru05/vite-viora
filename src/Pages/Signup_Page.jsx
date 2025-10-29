import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

const Signup_Page = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="min-h-screen flex bg-white px-8">
      {/* Left section - form */}
      <div className="w-full md:w-1/2 flex items-center justify-start">
        <div className="max-w-md w-full space-y-8 text-left">
          <div>
            <h1 className="text-4xl font-serif mb-2 text-gray-900"><br></br><br></br><br></br>
              Ready to plan your wedding, your way?
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Sign up to our website and simplify every step of your wedding journey!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-lg text-[#D4AF37]">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="mt-1 w-full border-b-2 border-gray-300 px-3 py-2 bg-transparent focus:border-[#D4AF37] focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg text-[#D4AF37]">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 w-full border-b-2 border-gray-300 px-3 py-2 bg-transparent focus:border-[#D4AF37] focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-lg text-[#D4AF37]">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                className="mt-1 w-full border-b-2 border-gray-300 px-3 py-2 bg-transparent focus:border-[#D4AF37] focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-lg text-[#D4AF37]">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="mt-1 w-full border-b-2 border-gray-300 px-3 py-2 bg-transparent focus:border-[#D4AF37] focus:outline-none"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="agreeToTerms"
                id="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="h-4 w-4 border-gray-300 rounded accent-[#D4AF37]"
                required
              />
              <label htmlFor="agreeToTerms" className="ml-2 text-gray-700">
                I agree to the{' '}
                <a href="#" className="text-[#4A90E2] hover:underline">
                  Terms & Conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-[#569CF8] to-[#325C92] text-white rounded-full hover:bg-[#357ABD] transition-colors duration-200 text-lg font-medium"
            >
              Sign Up
            </button>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-[#FDF6F0] text-gray-500">OR</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-full shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-blue-200 mb-3"
            >
              <FcGoogle className="h-5 w-5 mr-2" />
              Sign up with Google
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-full shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-blue-200"
            >
              <FaApple className="h-5 w-5 mr-2" />
              Sign up with Apple
            </button>
          </form>
        </div>
      </div>

      {/* Right section - image */}
      <div className="hidden md:flex w-full items-center justify-center">
        <img
          src="public/signuppage_assests/couplekiss.png"
          alt="Couple kissing"
          className="w-full h-full object-cover rounded-l-5xl"
        />
      </div>
    </div>
  );
};

export default Signup_Page;

