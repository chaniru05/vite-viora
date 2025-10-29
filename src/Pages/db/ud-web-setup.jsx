import React, { useState, useEffect } from 'react';
import { 
  Bell, Mail, Users, CheckSquare, MapPin, Sparkles, Calendar, Camera, 
  Heart, Edit2, Send, MessageCircle, Home, LayoutDashboard, Settings, 
  LogOut, Menu, X, FileText, DollarSign, Gift, Music, Image, ChevronRight, 
  Globe, Layout, Palette, Rocket, Check, ChevronLeft, Save, Loader
} from 'lucide-react';

// ============================================
// API SERVICE
// ============================================
const API_URL = process.env.VITE_REACT_APP_API_URL || 'https://vite-viora-backend.onrender.com';

const websiteAPI = {
  create: async (data) => {
    const response = await fetch(`${API_URL}/websites`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  },

  getAll: async () => {
    const response = await fetch(`${API_URL}/websites`);
    return response.json();
  },

  getOne: async (id) => {
    const response = await fetch(`${API_URL}/websites/${id}`);
    return response.json();
  },

  update: async (id, data) => {
    const response = await fetch(`${API_URL}/websites/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_URL}/websites/${id}`, {
      method: 'DELETE'
    });
    return response.json();
  },

  launch: async (id) => {
    const response = await fetch(`${API_URL}/websites/${id}/launch`, {
      method: 'PATCH'
    });
    return response.json();
  }
};

// ============================================
// SIDEBAR COMPONENT
// ============================================
const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { icon: Home, label: 'View Web Page', active: false },
    { icon: LayoutDashboard, label: 'Overview', active: false },
    { icon: Calendar, label: 'Web Settings', active: true },
    { icon: Users, label: 'Budget Plan', active: false },
    { icon: Mail, label: 'Digitalize', active: false },
    { icon: DollarSign, label: 'AI & AR Assist', active: false },
    { icon: Gift, label: 'Tasks Manager', active: false },
    { icon: Music, label: 'Wedding PLan', active: false },
    { icon: Image, label: 'Eco Mode', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <>
      <div
        className={`mt-20 fixed left-0 top-0 h-full bg-white shadow-2xl transition-all duration-300 ease-in-out z-50 ${
          isOpen ? 'w-64' : 'w-20'
        }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            {isOpen && (
              <span className="font-bold text-xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Kavi & Minu
              </span>
            )}
          </div>
        </div>

        <nav className="mt-6 px-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl mb-2 transition-all duration-200 ${
                item.active
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
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

        <div className="absolute bottom-4 left-0 right-0 px-2">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all duration-200">
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {isOpen && <span className="font-medium text-sm">Logout</span>}
          </button>
        </div>
      </div>

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
// WEBSITE CREATION DASHBOARD
// ============================================
const WebsiteCreationDashboard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [savedWebsiteId, setSavedWebsiteId] = useState(null);
  const [message, setMessage] = useState({ type: '', text: '' });
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
    {
      id: 0,
      title: 'Project Details',
      icon: FileText,
      description: 'Basic information about your website'
    },
    {
      id: 1,
      title: 'Website Type',
      icon: Globe,
      description: 'Choose the type of website you want to create'
    },
    {
      id: 2,
      title: 'Template Selection',
      icon: Layout,
      description: 'Pick a template that fits your needs'
    },
    {
      id: 3,
      title: 'Design & Colors',
      icon: Palette,
      description: 'Customize your website appearance'
    },
    {
      id: 4,
      title: 'Features & Pages',
      icon: Settings,
      description: 'Select features and pages to include'
    },
    {
      id: 5,
      title: 'Launch',
      icon: Rocket,
      description: 'Review and launch your website'
    }
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

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 3000);
  };

  const handleSaveDraft = async () => {
    setLoading(true);
    try {
      if (savedWebsiteId) {
        const result = await websiteAPI.update(savedWebsiteId, formData);
        if (result.success) {
          showMessage('success', '✅ Draft saved successfully!');
        } else {
          showMessage('error', '❌ Error saving draft');
        }
      } else {
        const result = await websiteAPI.create(formData);
        if (result.success) {
          setSavedWebsiteId(result.data._id);
          showMessage('success', '✅ Draft saved successfully!');
        } else {
          showMessage('error', '❌ Error saving draft');
        }
      }
    } catch (error) {
      showMessage('error', '❌ Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLaunchWebsite = async () => {
    if (!formData.projectName || !formData.websiteType || !formData.template) {
      showMessage('error', '❌ Please complete all required fields');
      return;
    }

    setLoading(true);
    try {
      let websiteId = savedWebsiteId;
      
      if (!websiteId) {
        const result = await websiteAPI.create(formData);
        if (result.success) {
          websiteId = result.data._id;
          setSavedWebsiteId(websiteId);
        } else {
          throw new Error('Failed to create website');
        }
      }

      const launchResult = await websiteAPI.launch(websiteId);
      if (launchResult.success) {
        showMessage('success', '🎉 Website launched successfully!');
        setTimeout(() => {
          setFormData({
            projectName: '',
            websiteType: '',
            template: '',
            colorScheme: '',
            pages: [],
            features: [],
            domain: ''
          });
          setSavedWebsiteId(null);
          setCurrentStep(0);
        }, 2000);
      } else {
        showMessage('error', '❌ Error launching website');
      }
    } catch (error) {
      showMessage('error', '❌ Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleNext = async () => {
    if (currentStep < steps.length - 1) {
      if (formData.projectName || savedWebsiteId) {
        await handleSaveDraft();
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
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

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Name *
              </label>
              <input
                type="text"
                value={formData.projectName}
                onChange={(e) => handleInputChange('projectName', e.target.value)}
                placeholder="My Awesome Website"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Domain Name (Optional)
              </label>
              <input
                type="text"
                value={formData.domain}
                onChange={(e) => handleInputChange('domain', e.target.value)}
                placeholder="mywebsite.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
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
                  formData.websiteType === type.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
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
                  formData.template === template.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
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
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Choose Color Scheme
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {colorSchemes.map(scheme => (
                  <div
                    key={scheme.id}
                    onClick={() => handleInputChange('colorScheme', scheme.id)}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.colorScheme === scheme.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {scheme.colors.map((color, idx) => (
                        <div
                          key={idx}
                          className="w-12 h-12 rounded"
                          style={{ backgroundColor: color }}
                        />
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
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Pages
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {pages.map(page => (
                  <button
                    key={page}
                    onClick={() => toggleArrayItem('pages', page)}
                    className={`px-4 py-3 rounded-lg border-2 transition-all ${
                      formData.pages.includes(page)
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Features
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map(feature => (
                  <button
                    key={feature}
                    onClick={() => toggleArrayItem('features', feature)}
                    className={`px-4 py-3 rounded-lg border-2 text-left transition-all ${
                      formData.features.includes(feature)
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-blue-300'
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
              <p className="text-gray-700">
                Review your selections and launch your website.
              </p>
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
                  {formData.pages.length > 0 ? formData.pages.map(page => (
                    <span key={page} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {page}
                    </span>
                  )) : <span className="text-gray-400 text-sm">No pages selected</span>}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Features ({formData.features.length})</p>
                <div className="flex flex-wrap gap-2">
                  {formData.features.length > 0 ? formData.features.map(feature => (
                    <span key={feature} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      {feature}
                    </span>
                  )) : <span className="text-gray-400 text-sm">No features selected</span>}
                </div>
              </div>
            </div>

            <button 
              onClick={handleLaunchWebsite}
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Launching...
                </>
              ) : (
                <>
                  <Rocket className="w-5 h-5" />
                  Launch Website
                </>
              )}
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
        {/* Message Alert */}
        {message.text && (
          <div className={`mb-4 p-4 rounded-lg ${
            message.type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'
          }`}>
            {message.text}
          </div>
        )}

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
                      index < currentStep
                        ? 'bg-green-500 text-white'
                        : index === currentStep
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    {index < currentStep ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <step.icon className="w-6 h-6" />
                    )}
                  </div>
                  <p className={`text-xs font-medium ${index <= currentStep ? 'text-gray-900' : 'text-gray-400'}`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 rounded transition-all ${
                      index < currentStep ? 'bg-green-500' : 'bg-gray-200'
                    }`}
                  />
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
                currentStep === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>
            
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-500">
                Step {currentStep + 1} of {steps.length}
              </div>
              
              {currentStep < steps.length - 1 && (
                <button
                  onClick={handleSaveDraft}
                  disabled={loading}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-all disabled:opacity-50"
                >
                  {loading ? <Loader className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                  Save Draft
                </button>
              )}
            </div>

            <button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                currentStep === steps.length - 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
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
// MAIN APP COMPONENT
// ============================================
const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <main className="p-6">
          <div className="mt-15 max-w-7xl mx-auto">
            <WebsiteCreationDashboard/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;