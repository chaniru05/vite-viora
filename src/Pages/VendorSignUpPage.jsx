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

const VendorInfo = () => {
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
                  <a href="#terms" className="text-blue-700 underline">
                    Terms and Conditions
                  </a>  and Vendor Policy.
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


// Terms and Conditions Component


function TermsAndConditions() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      <section id="terms" className="max-w-3xl mx-auto px-6 py-12">
                    <h1 className="text-4xl font-bold text-center mb-2">Terms and Conditions</h1>
                    {/* rest of your terms content */}
                  </section>
      <p className="text-center text-gray-500 mb-8">
        Effective Date: 29.10.2025 — Last Updated: 29.10.2025
      </p>

      <p>
        Welcome to <strong>VIORA</strong>, an online wedding planning platform
        designed to help couples organize, manage, and enjoy their special day.
        These Terms and Conditions (“Terms”) govern your access to and use of
        our website, mobile application, and related services (collectively, the
        “Platform”).
      </p>

      <p className="mb-6">
        By using our Platform, you agree to be bound by these Terms. If you do
        not agree, please discontinue use immediately.
      </p>

      {/* Section */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">1. Eligibility</h2>
      <p className="mb-4">
        You must be at least 18 years old to use our services. By registering an
        account, you confirm that you meet this age requirement and that all
        information you provide is accurate and complete.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. Services Provided</h2>
      <p>Our Platform allows users to:</p>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>Plan and manage wedding-related events and tasks</li>
        <li>Browse and book vendors (e.g., venues, photographers, decorators, caterers)</li>
        <li>Communicate with vendors and guests</li>
        <li>Access planning tools such as budgeting, guest lists, and timelines</li>
      </ul>
      <p>We may update, modify, or discontinue features at any time without prior notice.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3. User Accounts</h2>
      <p>To access certain features, you must create an account. You are responsible for:</p>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>Maintaining the confidentiality of your login credentials</li>
        <li>Ensuring all account activity complies with these Terms</li>
        <li>Promptly notifying us of any unauthorized use or security breach</li>
      </ul>
      <p>We reserve the right to suspend or terminate accounts for misuse or violations of these Terms.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Vendor Listings and Bookings</h2>
      <p>
        Our Platform may display profiles of third-party wedding vendors. While
        we strive to verify vendor information, VIORA does not endorse or
        guarantee the quality, reliability, or legality of any vendor service.
      </p>
      <p className="mb-4">
        All transactions between users and vendors are independent agreements,
        and we are not a party to such contracts.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Payments</h2>
      <p>If you make payments through our Platform:</p>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>You authorize us (and our payment partners) to process the transaction.</li>
        <li>You agree to provide accurate billing information.</li>
        <li>
          We are not responsible for any additional fees, disputes, or refunds
          related to third-party vendors.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">6. User Content</h2>
      <p>
        You may upload photos, event details, messages, or reviews (“User
        Content”). By submitting content, you grant VIORA a worldwide,
        royalty-free license to use, display, and distribute such content for
        service operation or marketing purposes.
      </p>
      <p className="mb-4">You are solely responsible for your content and agree not to post:</p>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>Offensive, misleading, or illegal material</li>
        <li>Content that infringes on copyrights or trademarks</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">7. Intellectual Property</h2>
      <p>
        All materials on the Platform—including text, graphics, software, and
        logos—are the intellectual property of VIORA or its licensors. You may
        not copy, modify, distribute, or create derivative works without our
        written consent.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">8. Limitation of Liability</h2>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>Any indirect, incidental, or consequential damages</li>
        <li>Any errors, service interruptions, or unauthorized access</li>
        <li>Vendor-related issues or disputes</li>
      </ul>
      <p>Your use of the Platform is at your own risk.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">9. Privacy</h2>
      <p>
        Your personal data is collected and processed in accordance with our
        Privacy Policy. By using our Platform, you consent to such data
        processing practices.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">10. Termination</h2>
      <p>We may suspend or terminate your account at any time for:</p>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>Violation of these Terms</li>
        <li>Fraudulent or abusive activity</li>
        <li>Legal or operational reasons</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">11. Modifications to Terms</h2>
      <p>
        We may update these Terms periodically. The latest version will always
        be posted on our Platform. Continued use after updates means you accept
        the revised Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">12. Governing Law</h2>
      <p>
        These Terms shall be governed by and interpreted according to the laws
        of [Insert Country/State], without regard to its conflict of law
        provisions.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">13. Contact Us</h2>
      <ul className="list-none space-y-1 mb-8">
        <li>✉️ chosmidek.vioraa@gmail.com</li>
        <li>📞 +94 712623216</li>
        <li>🌐 https://www.vioraa.lk</li>
      </ul>

      <p className="text-sm text-gray-500 mt-6">
        Effective Date and Last Updated dates may be revised when we change
        these Terms. Please check this page periodically for updates.
      </p>
    </section>
  );
}

// Main Home Component
export default function VendorSignUpPage() {
  return (
    <div>
      <VendorInfo />
      <TermsAndConditions />
    </div>
  );
}