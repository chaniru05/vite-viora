import React, { useState } from 'react'

const SigninPage = () => {
  const [form, setForm] = useState({ username: '', password: '', remember: false })

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((s) => ({ ...s, [name]: type === 'checkbox' ? checked : value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // submit logic
  }

  return (
    <div className="min-h-screen bg-white flex items-start">
      <div className="max-w-lg w-full px-8 py-16">
        <h1 className="text-5xl font-serif text-gray-900 mb-12"><br></br><br></br>Sign in</h1>

        <form onSubmit={onSubmit} className="space-y-8">
          <div>
            <label className="block text-[#D4AF37] text-lg mb-6">Username</label>
            <input
              name="username"
              value={form.username}
              onChange={onChange}
              className="w-full border-b border-gray-600 py-1 bg-transparent focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[#D4AF37] text-lg mb-6">Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={onChange}
              className="w-full border-b border-gray-600 py-1 bg-transparent focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-gray-800">
              <input type="checkbox" name="remember" checked={form.remember} onChange={onChange} className="h-4 w-4" />
              <span className="ml-1">Remember me</span>
            </label>
            <a href="#" className="text-[#4A90E2] hover:underline">forgot password?</a>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-6">Don't have an account? <a href="#" className="text-[#4A90E2] hover:underline">Sign up</a></p>

            <button type="submit" className="mx-auto inline-block px-10 py-3 rounded-full bg-gradient-to-r from-[#6fb3ff] to-[#2b62a8] text-white text-lg font-medium">
              sign in
            </button>
          </div>
        </form>
      </div>

      {/* Right section - image */}
      <div className="hidden md:flex w-full items-center justify-center">
        <img
          src="src/assets/couple.png"
          alt="Couple kissing"
          className="w-full h-full object-cover rounded-l-5xl"
        />
      </div>
    </div>
  )
}

export default SigninPage
