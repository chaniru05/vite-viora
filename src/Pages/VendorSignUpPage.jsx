import React, { useState } from 'react'

const StepCard = ({ title, children }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
    <h3 className="text-sm font-semibold text-gray-700 mb-4">{title}</h3>
    {children}
  </div>
)

const PillInput = ({ label, ...props }) => (
  <div className="mb-4">
    <label className="block text-xs text-gray-600 mb-2">{label}</label>
    <input {...props} className="w-full bg-[#efe8dd] rounded-full py-3 px-4 focus:outline-none" />
  </div>
)

const VendorSignUpPage = () => {
  const [step, setStep] = useState(0)

  return (
    <div className="min-h-screen bg-yellow-50 py-8">
      <div className="max-w-2xl mx-auto px-6">
        <div className="relative text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6"><br></br><br></br><br></br>Vendor Registration</h2>
        </div>

        <div className="pt-6">
          {step === 0 && (
            <StepCard title="Account Info">
              <PillInput label="Full Name (Contact Person)" placeholder="" />
              <PillInput label="Email Address" placeholder="" />
              <PillInput label="Phone No" placeholder="" />
              <PillInput label="Password" placeholder="" type="password" />
              <PillInput label="Confirm Password" placeholder="" type="password" />
              <div className="flex justify-end">
                <button onClick={() => setStep(1)} className="px-6 py-2 bg-white rounded-full border">Next</button>
              </div>
            </StepCard>
          )}

          {step === 1 && (
            <StepCard title="Business Info">
              <PillInput label="Business / Brand Name" placeholder="" />
              <div className="mb-4">
                <label className="block text-xs text-gray-600 mb-2">Business Type</label>
                <select className="w-full bg-[#efe8dd] rounded-full py-3 px-4 focus:outline-none appearance-none" defaultValue="">
                  <option value="" disabled>Select business type</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="videography/photography">Videography/Photography</option>
                  <option value="venue">Venue</option>
                  <option value="decorations">Decorations</option>
                  <option value="event material">Event Material</option>
                  <option value="cake">Cake</option>
                  <option value="ceramonial arrangements">Ceramonial Arrangements</option>
                  <option value="music/dj">Music/DJ</option>
                </select>
              </div>
              <PillInput label="Business Registration No" placeholder="" />
              <PillInput label="Description / About the Business" placeholder="" />
              <div className="flex justify-between">
                <button onClick={() => setStep(0)} className="px-6 py-2 bg-white rounded-full border">Back</button>
                <button onClick={() => setStep(2)} className="px-6 py-2 bg-white rounded-full border">Next</button>
              </div>
            </StepCard>
          )}

          {step === 2 && (
            <StepCard title="Location & Service Details">
              <PillInput label="Business Address" placeholder="" />
              <PillInput label="City, State, Country" placeholder="" />
              <PillInput label="Service Area" placeholder="" />
              <PillInput label="Alternative Phone / WhatsApp" placeholder="" />
              <PillInput label="Price Range" placeholder="" />
              <PillInput label="Availability (working hours)" placeholder="" />
              <div className="flex justify-between">
                <button onClick={() => setStep(1)} className="px-6 py-2 bg-white rounded-full border">Back</button>
                <button onClick={() => setStep(3)} className="px-6 py-2 bg-white rounded-full border">Next</button>
              </div>
            </StepCard>
          )}

          {step === 3 && (
            <StepCard title="Media & Branding">
              <div className="mb-4">
                <label className="block text-xs text-gray-600 mb-2">Logo / Profile Picture</label>
                <input type="file" multiple className="w-full bg-[#efe8dd] rounded-full py-3 px-4 focus:outline-none" />
              </div>
              <div className="mb-4">
                <label className="block text-xs text-gray-600 mb-2">Cover Photo / Portfolio Images</label>
                <input type="file" multiple className="w-full bg-[#efe8dd] rounded-full py-3 px-4 focus:outline-none" />
              </div>
              <PillInput label="Social Media Links (Facebook, Instagram, Website)" placeholder="" />
              <div className="flex justify-between">
                <button onClick={() => setStep(2)} className="px-6 py-2 bg-white rounded-full border">Back</button>
                <button onClick={() => setStep(4)} className="px-6 py-2 bg-white rounded-full border">Next</button>
              </div>
            </StepCard>
          )}

          {step === 4 && (
            <StepCard title="Verification & Payment Setup">
              <div className="mb-4">
                <label className="block text-xs text-gray-600 mb-2">Business License / Tax ID</label>
                <input type="file" multiple className="w-full bg-[#d6d0c1] rounded-full py-3 px-4 focus:outline-none" />
              </div>
              <div className="mb-4">
                <label className="block text-xs text-gray-600 mb-2">ID (contact person)</label>
                <input type="file" multiple className="w-full bg-[#d6d0c1] rounded-full py-3 px-4 focus:outline-none" />
              </div>
              <PillInput label="Bank Account Details / UPI / PayPal ID" placeholder="" />
              <PillInput label="Payment Terms" placeholder="" />

              <h4 className="text-center text-lg font-medium mt-6 mb-4">Agreement & Review</h4>
              <div className="flex items-start gap-3 mb-8">
                <input id="agree" type="checkbox" className="h-5 w-5 mt-1" />
                <label htmlFor="agree" className="text-sm text-gray-700">
                  I agree to the 
                  <a href="#Terms and Conditions" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Terms & Conditions</a>
                  and Vendor Policy.
                </label>
              </div>

              <div className="flex justify-between">
                <button onClick={() => setStep(3)} className="px-6 py-2 bg-white rounded-full border">Back</button>
                <button onClick={() => alert('Vendor registration submitted (demo)')} className="px-6 py-2 bg-white rounded-full border">Next</button>
              </div>
            </StepCard>
          )}
        </div>
      </div>
    </div>
  )
}

export default VendorSignUpPage
