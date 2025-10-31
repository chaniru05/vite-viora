import React, { useState, useEffect } from 'react';
import { 
  Bell, Mail, Users, CheckSquare, MapPin, Sparkles, Calendar, Camera, 
  Heart, Edit2, Send, MessageCircle, Home, LayoutDashboard, Settings, 
  LogOut, Menu, X, FileText, DollarSign, Gift, Music, Image, ChevronRight, 
  Globe, Layout, Palette, Rocket, Check, ChevronLeft, ExternalLink
} from 'lucide-react';

// ============================================
// SIDEBAR COMPONENT
// ============================================
const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { icon: Home, label: 'View Web Page', active: false },
    { icon: LayoutDashboard, label: 'Overview', active: true },
    { icon: Calendar, label: 'Web Settings', active: false },
    { icon: Users, label: 'Budget Plan', active: false },
    { icon: Mail, label: 'Digitalize', active: false },
    { icon: DollarSign, label: 'AI & AR Assist', active: false },
    { icon: Gift, label: 'Tasks Manager', active: false },
    { icon: Music, label: 'Wedding Plan', active: false },
    { icon: Image, label: 'Eco Mode', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];
 
  return (
    <>
      {/* Sidebar Container */}
      <div
        className={`mt-20 fixed left-0 top-0 h-full bg-white shadow-2xl transition-all duration-300 ease-in-out z-50 border-r border-amber-100 ${
          isOpen ? 'w-64' : 'w-20'
        }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between p-4 border-b border-amber-100">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-amber-500 to-amber-700 p-2 rounded-lg shadow-md">
              <Heart className="w-6 h-6 text-white" />
            </div>
            {isOpen && (
              <span className="font-bold text-xl bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent" style={{ fontFamily: "'IM Fell English SC', serif" }}>
                Kavi & Minu
              </span>
            )}
          </div>
        </div>

        {/* Menu Items */}
        <nav className="mt-6 px-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl mb-2 transition-all duration-300 ${
                item.active
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg hover:shadow-xl'
                  : 'text-amber-800 hover:bg-amber-50 hover:shadow-md'
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {isOpen && (
                <span className="font-medium text-sm">{item.label}</span>
              )}
              {isOpen && item.active && (
                <ChevronRight className="w-4 h-4 ml-auto" />
              )}
            </button>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-4 left-0 right-0 px-2">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-700 hover:bg-red-50 transition-all duration-300 border border-red-200 hover:border-red-300">
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {isOpen && <span className="font-medium text-sm">Logout</span>}
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

// ============================================
// WEBSITE CREATION COMPONENT
// ============================================
const WebsiteCreationDashboard = ({ onLaunch }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [launching, setLaunching] = useState(false);
  const [formData, setFormData] = useState({
    projectName: '',
    websiteType: '',
    template: '',
    colorScheme: '',
    pages: [],
    features: [],
    domain: ''
  });

  const steps = [
    { id: 0, title: 'Project Details', icon: FileText, description: 'Basic information about your website' },
    { id: 1, title: 'Website Type', icon: Globe, description: 'Choose the type of website you want to create' },
    { id: 2, title: 'Template Selection', icon: Layout, description: 'Pick a template that fits your needs' },
    { id: 3, title: 'Design & Colors', icon: Palette, description: 'Customize your website appearance' },
    { id: 4, title: 'Features & Pages', icon: Settings, description: 'Select features and pages to include' },
    { id: 5, title: 'Launch', icon: Rocket, description: 'Review and launch your website' }
  ];

  const websiteTypes = [
    { id: 'business', name: 'Business', desc: 'Corporate or company website' },
    { id: 'portfolio', name: 'Portfolio', desc: 'Showcase your work' },
    { id: 'blog', name: 'Blog', desc: 'Share your thoughts and stories' },
    { id: 'ecommerce', name: 'E-commerce', desc: 'Online store' }
  ];

  const templates = [
    { id: 'modern', name: 'Modern', preview: 'Clean and minimalist' },
    { id: 'creative', name: 'Creative', preview: 'Bold and artistic' },
    { id: 'classic', name: 'Classic', preview: 'Traditional and elegant' },
    { id: 'minimal', name: 'Minimal', preview: 'Simple and focused' }
  ];

  const colorSchemes = [
    { id: 'blue', name: 'Ocean Blue', colors: ['#1e3a8a', '#3b82f6', '#93c5fd'] },
    { id: 'purple', name: 'Royal Purple', colors: ['#581c87', '#a855f7', '#d8b4fe'] },
    { id: 'green', name: 'Forest Green', colors: ['#14532d', '#22c55e', '#86efac'] },
    { id: 'orange', name: 'Sunset Orange', colors: ['#9a3412', '#f97316', '#fdba74'] }
  ];

  const features = [
    'Contact Form', 'Image Gallery', 'Blog Section', 'Team Members',
    'Testimonials', 'Newsletter Signup', 'Social Media Links', 'Search Functionality'
  ];

  const pages = [
    'Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact', 'FAQ', 'Pricing'
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const toggleArrayItem = (field, item) => {
    const array = formData[field];
    if (array.includes(item)) {
      handleInputChange(field, array.filter(i => i !== item));
    } else {
      handleInputChange(field, [...array, item]);
    }
  };

  const handleLaunch = () => {
    onLaunch(formData);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Name</label>
              <input
                type="text"
                value={formData.projectName}
                onChange={(e) => handleInputChange('projectName', e.target.value)}
                placeholder="My Awesome Website"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Domain Name (Optional)</label>
              <input
                type="text"
                value={formData.domain}
                onChange={(e) => handleInputChange('domain', e.target.value)}
                placeholder="mywebsite"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">Will be: kaviandminu.com/{formData.domain || 'yoursite'}</p>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {websiteTypes.map(type => (
              <div
                key={type.id}
                onClick={() => handleInputChange('websiteType', type.id)}
                className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                  formData.websiteType === type.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.name}</h3>
                <p className="text-sm text-gray-600">{type.desc}</p>
              </div>
            ))}
          </div>
        );

      case 2:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {templates.map(template => (
              <div
                key={template.id}
                onClick={() => handleInputChange('template', template.id)}
                className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                  formData.template === template.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="bg-gray-100 h-32 rounded mb-4 flex items-center justify-center">
                  <Layout className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{template.name}</h3>
                <p className="text-sm text-gray-600">{template.preview}</p>
              </div>
            ))}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Choose Color Scheme</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {colorSchemes.map(scheme => (
                  <div
                    key={scheme.id}
                    onClick={() => handleInputChange('colorScheme', scheme.id)}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.colorScheme === scheme.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {scheme.colors.map((color, idx) => (
                        <div key={idx} className="w-12 h-12 rounded" style={{ backgroundColor: color }} />
                      ))}
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900">{scheme.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Select Pages</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {pages.map(page => (
                  <button
                    key={page}
                    onClick={() => toggleArrayItem('pages', page)}
                    className={`px-4 py-3 rounded-lg border-2 transition-all ${
                      formData.pages.includes(page) ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Select Features</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map(feature => (
                  <button
                    key={feature}
                    onClick={() => toggleArrayItem('features', feature)}
                    className={`px-4 py-3 rounded-lg border-2 text-left transition-all ${
                      formData.features.includes(feature) ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    {feature}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Ready to Launch!</h3>
              </div>
              <p className="text-gray-700">Review your selections and launch your website.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Project Name</p>
                  <p className="font-semibold">{formData.projectName || 'Not set'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Website Type</p>
                  <p className="font-semibold capitalize">{formData.websiteType || 'Not set'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Template</p>
                  <p className="font-semibold capitalize">{formData.template || 'Not set'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Color Scheme</p>
                  <p className="font-semibold capitalize">{formData.colorScheme || 'Not set'}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Pages ({formData.pages.length})</p>
                <div className="flex flex-wrap gap-2">
                  {formData.pages.map(page => (
                    <span key={page} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{page}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Features ({formData.features.length})</p>
                <div className="flex flex-wrap gap-2">
                  {formData.features.map(feature => (
                    <span key={feature} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">{feature}</span>
                  ))}
                </div>
              </div>
            </div>

            <button 
              onClick={handleLaunch}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Launch Website
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  const StepIcon = steps[currentStep].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Create Your Website</h1>
          <p className="text-gray-600">Follow the steps below to build your perfect website</p>
        </div>

        <div className="mb-8 overflow-x-auto">
          <div className="flex items-center justify-between min-w-max md:min-w-0 px-4">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${
                      index < currentStep ? 'bg-green-500 text-white' : index === currentStep ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    {index < currentStep ? <Check className="w-6 h-6" /> : <step.icon className="w-6 h-6" />}
                  </div>
                  <p className={`text-xs font-medium ${index <= currentStep ? 'text-gray-900' : 'text-gray-400'}`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-2 rounded transition-all ${index < currentStep ? 'bg-green-500' : 'bg-gray-200'}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <StepIcon className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{steps[currentStep].title}</h2>
                <p className="text-gray-600">{steps[currentStep].description}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">{renderStepContent()}</div>

          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                currentStep === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>
            <div className="text-sm text-gray-500">Step {currentStep + 1} of {steps.length}</div>
            <button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                currentStep === steps.length - 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// WEBSITE VIEWER COMPONENT
// ============================================
const WebsiteViewer = ({ websiteData }) => {
  if (!websiteData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
        <div className="text-center">
          <Globe className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No Website Created Yet</h2>
          <p className="text-gray-600">Go to Overview to create your website</p>
        </div>
      </div>
    );
  }

  const getColorScheme = () => {
    const schemes = {
      blue: { primary: '#3b82f6', secondary: '#1e3a8a', accent: '#93c5fd' },
      purple: { primary: '#a855f7', secondary: '#581c87', accent: '#d8b4fe' },
      green: { primary: '#22c55e', secondary: '#14532d', accent: '#86efac' },
      orange: { primary: '#f97316', secondary: '#9a3412', accent: '#fdba74' }
    };
    return schemes[websiteData.colorScheme] || schemes.blue;
  };

  const colors = getColorScheme();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="shadow-md" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white">{websiteData.projectName}</h1>
            <nav className="flex gap-6">
              {websiteData.pages.map(page => (
                <a key={page} href={`#${page.toLowerCase()}`} className="text-white hover:opacity-80 transition-opacity">
                  {page}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Welcome to {websiteData.projectName}</h2>
          <p className="text-xl text-white opacity-90 mb-8">
            {websiteData.websiteType === 'business' && 'Your trusted partner for business solutions'}
            {websiteData.websiteType === 'portfolio' && 'Showcasing creativity and excellence'}
            {websiteData.websiteType === 'blog' && 'Sharing stories and insights'}
            {websiteData.websiteType === 'ecommerce' && 'Your online shopping destination'}
          </p>
          <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:shadow-lg transition-all">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      {websiteData.features.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {websiteData.features.map((feature, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: colors.accent }}>
                    <Check className="w-6 h-6" style={{ color: colors.secondary }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content Sections */}
      {websiteData.pages.includes('About') && (
        <section id="about" className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              We are dedicated to providing exceptional service and quality. Our team works tirelessly to ensure your satisfaction.
            </p>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 text-white" style={{ backgroundColor: colors.secondary }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-4">© 2025 {websiteData.projectName}. All rights reserved.</p>
          <p className="text-sm opacity-75">Domain: kaviandminu.com/{websiteData.domain || 'site'}</p>
        </div>
      </footer>
    </div>
  );
};

// ============================================
// MAIN APP COMPONENT
// ============================================
const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('overview');
  const [launchedWebsite, setLaunchedWebsite] = useState(null);

  const handleLaunch = (websiteData) => {
    setLaunchedWebsite(websiteData);
    alert('🎉 Website launched successfully! Click "View Web Page" to see it.');
    setCurrentPage('overview');
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} onNavigate={handleNavigate} currentPage={currentPage} />
      
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <main className="p-6">
          <div className="mt-15 max-w-7xl mx-auto">
            {currentPage === 'overview' && <WebsiteCreationDashboard onLaunch={handleLaunch} />}
            {currentPage === 'view' && <WebsiteViewer websiteData={launchedWebsite} />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;