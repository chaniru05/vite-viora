import React, { useState, useEffect, useRef } from 'react';
import { 
  DollarSign, TrendingUp, Users, PieChart, Bell, Plus, 
  Edit2, Trash2, Share2, Download, AlertCircle, Check,
  Calendar, Target, Lock, Unlock, ArrowUpRight, ArrowDownRight,
  X, Save, Layout
} from 'lucide-react';

  // ============================================
// SIDEBAR COMPONENT
// ============================================
const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { icon: Home, label: 'View Web Page', active: false },
    { icon: LayoutDashboard, label: 'Overview', active: false },
    { icon: Calendar, label: 'Web Settings', active: false },
    { icon: Users, label: 'Budget Plan', active: true },
    { icon: Mail, label: 'Digitalize', active: false },
    { icon: DollarSign, label: 'AI & AR Assist', active: false },
    { icon: Gift, label: 'Tasks Manager', active: false },
    { icon: Music, label: 'Wedding PLan', active: false },
    { icon: Image, label: 'Eco Mode', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <>
      {/* Sidebar Container */}
      <div
        className={`mt-20 fixed left-0 top-0 h-full bg-white shadow-2xl transition-all duration-300 ease-in-out z-50 ${
          isOpen ? 'w-64' : 'w-20'
        }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Logo Section */}
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

        {/* Menu Items */}
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

        {/* Logout Button */}
        <div className="absolute bottom-4 left-0 right-0 px-2">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all duration-200">
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


const BudgetPlan = () => {
  const [totalBudget, setTotalBudget] = useState(800000);
  const [budgetSet, setBudgetSet] = useState(true);
  const [sharingMode, setSharingMode] = useState(false);
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [isEditingBudget, setIsEditingBudget] = useState(false);
  const [tempBudget, setTempBudget] = useState(800000);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [showTemplates, setShowTemplates] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  
  const [categories, setCategories] = useState([
    { id: 1, name: 'Venue', budget: 200000, spent: 180000, color: 'bg-blue-500', contributors: [] },
    { id: 2, name: 'Catering', budget: 250000, spent: 150000, color: 'bg-green-500', contributors: [] },
    { id: 3, name: 'Photography', budget: 100000, spent: 95000, color: 'bg-purple-500', contributors: [] },
    { id: 4, name: 'Decoration', budget: 80000, spent: 45000, color: 'bg-pink-500', contributors: [] },
    { id: 5, name: 'Attire', budget: 70000, spent: 60000, color: 'bg-yellow-500', contributors: [] },
    { id: 6, name: 'Entertainment', budget: 50000, spent: 20000, color: 'bg-indigo-500', contributors: [] },
    { id: 7, name: 'Transport', budget: 30000, spent: 15000, color: 'bg-orange-500', contributors: [] },
    { id: 8, name: 'Miscellaneous', budget: 20000, spent: 12000, color: 'bg-teal-500', contributors: [] }
  ]);

  // Calculate totals automatically
  const totalSpent = categories.reduce((sum, cat) => sum + cat.spent, 0);
  const totalAllocated = categories.reduce((sum, cat) => sum + cat.budget, 0);
  const remaining = totalBudget - totalSpent;

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Budget templates
  const budgetTemplates = [
    {
      name: 'Luxury Wedding',
      total: 1500000,
      categories: [
        { name: 'Venue', percentage: 30, color: 'bg-blue-500' },
        { name: 'Catering', percentage: 25, color: 'bg-green-500' },
        { name: 'Photography', percentage: 12, color: 'bg-purple-500' },
        { name: 'Decoration', percentage: 10, color: 'bg-pink-500' },
        { name: 'Attire', percentage: 8, color: 'bg-yellow-500' },
        { name: 'Entertainment', percentage: 7, color: 'bg-indigo-500' },
        { name: 'Transport', percentage: 5, color: 'bg-orange-500' },
        { name: 'Miscellaneous', percentage: 3, color: 'bg-teal-500' }
      ]
    },
    {
      name: 'Standard Wedding',
      total: 800000,
      categories: [
        { name: 'Venue', percentage: 25, color: 'bg-blue-500' },
        { name: 'Catering', percentage: 30, color: 'bg-green-500' },
        { name: 'Photography', percentage: 12, color: 'bg-purple-500' },
        { name: 'Decoration', percentage: 10, color: 'bg-pink-500' },
        { name: 'Attire', percentage: 10, color: 'bg-yellow-500' },
        { name: 'Entertainment', percentage: 6, color: 'bg-indigo-500' },
        { name: 'Transport', percentage: 4, color: 'bg-orange-500' },
        { name: 'Miscellaneous', percentage: 3, color: 'bg-teal-500' }
      ]
    },
    {
      name: 'Budget-Friendly Wedding',
      total: 400000,
      categories: [
        { name: 'Venue', percentage: 20, color: 'bg-blue-500' },
        { name: 'Catering', percentage: 35, color: 'bg-green-500' },
        { name: 'Photography', percentage: 10, color: 'bg-purple-500' },
        { name: 'Decoration', percentage: 8, color: 'bg-pink-500' },
        { name: 'Attire', percentage: 12, color: 'bg-yellow-500' },
        { name: 'Entertainment', percentage: 5, color: 'bg-indigo-500' },
        { name: 'Transport', percentage: 5, color: 'bg-orange-500' },
        { name: 'Miscellaneous', percentage: 5, color: 'bg-teal-500' }
      ]
    }
  ];

  // Apply template
  const applyTemplate = (template) => {
    setTotalBudget(template.total);
    const newCategories = template.categories.map((cat, index) => ({
      id: Date.now() + index,
      name: cat.name,
      budget: Math.round((template.total * cat.percentage) / 100),
      spent: 0,
      color: cat.color,
      contributors: []
    }));
    setCategories(newCategories);
    setShowTemplates(false);
  };

  // Delete category with confirmation
  const deleteCategory = (id) => {
    setCategories(categories.filter(cat => cat.id !== id));
    setShowDeleteConfirm(null);
  };

  // Update category
  const updateCategory = (id, field, value) => {
    setCategories(categories.map(cat => 
      cat.id === id ? { ...cat, [field]: Number(value) } : cat
    ));
  };

  // Save budget edit
  const saveBudgetEdit = () => {
    setTotalBudget(tempBudget);
    setIsEditingBudget(false);
  };

  // Budget Setup Modal
  const BudgetSetup = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Set Your Wedding Budget</h2>
        <input
          type="number"
          value={totalBudget}
          onChange={(e) => setTotalBudget(Number(e.target.value))}
          className="w-full px-4 py-3 border-2 rounded-xl mb-4 text-lg"
          placeholder="Enter total budget"
        />
        <div className="flex gap-3">
          <button
            onClick={() => setBudgetSet(true)}
            className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow"
          >
            Set Budget
          </button>
          <button
            onClick={() => { setBudgetSet(true); setTotalBudget(0); }}
            className="flex-1 border-2 border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          >
            Explore Without
          </button>
        </div>
      </div>
    </div>
  );

  // Templates Modal
  const TemplatesModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Budget Templates</h2>
          <button onClick={() => setShowTemplates(false)} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {budgetTemplates.map((template, index) => (
            <div key={index} className="border-2 border-gray-200 rounded-xl p-6 hover:border-purple-500 transition-colors cursor-pointer">
              <h3 className="text-xl font-bold mb-2">{template.name}</h3>
              <div className="text-2xl font-bold text-purple-600 mb-4">
                LKR {template.total.toLocaleString()}
              </div>
              <div className="space-y-2 mb-4">
                {template.categories.map((cat, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className={`${cat.color} w-3 h-3 rounded-full`} />
                      <span>{cat.name}</span>
                    </div>
                    <span className="font-semibold">{cat.percentage}%</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => applyTemplate(template)}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Use Template
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Delete Confirmation Modal
  const DeleteConfirmModal = ({ category }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="w-8 h-8 text-red-500" />
          <h2 className="text-2xl font-bold">Are you sure?</h2>
        </div>
        <p className="text-gray-600 mb-6">
          Do you want to delete the <strong>{category.name}</strong> category? This action cannot be undone.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => deleteCategory(category.id)}
            className="flex-1 bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
          <button
            onClick={() => setShowDeleteConfirm(null)}
            className="flex-1 border-2 border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  // Floating Stats Bar
  const FloatingStatsBar = () => (
    <div className={`fixed top-0 left-0 right-0 bg-white shadow-lg z-40 transition-transform duration-300 ${
      isScrolled ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-500 p-2 rounded-lg">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs text-gray-500">Total Spent</div>
              <div className="text-lg font-bold">LKR {totalSpent.toLocaleString()}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-purple-500 p-2 rounded-lg">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs text-gray-500">Remaining</div>
              <div className="text-lg font-bold">LKR {remaining.toLocaleString()}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 p-2 rounded-lg">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs text-gray-500">Budget</div>
              <div className="text-lg font-bold">LKR {totalBudget.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Stats Cards
  const StatCard = ({ title, value, icon: Icon, color, trend, editable, onEdit }) => (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <div className={`${color} p-3 rounded-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex items-center gap-2">
          {trend && (
            <div className={`flex items-center ${trend > 0 ? 'text-red-500' : 'text-green-500'}`}>
              {trend > 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
              <span className="text-sm font-semibold ml-1">{Math.abs(trend)}%</span>
            </div>
          )}
          {editable && (
            <button onClick={onEdit} className="p-1 hover:bg-gray-100 rounded">
              <Edit2 className="w-4 h-4 text-gray-600" />
            </button>
          )}
        </div>
      </div>
      <div className="text-2xl font-bold text-gray-800">LKR {value.toLocaleString()}</div>
      <div className="text-sm text-gray-500 mt-1">{title}</div>
    </div>
  );

  // Category Card with editing
  const CategoryCard = ({ category }) => {
    const percentage = (category.spent / category.budget) * 100;
    const isOverBudget = category.spent > category.budget;
    const isEditing = editingCategory === category.id;

    return (
      <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={`${category.color} w-3 h-3 rounded-full`} />
            <h3 className="font-bold text-gray-800">{category.name}</h3>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setEditingCategory(isEditing ? null : category.id)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              {isEditing ? <Save className="w-4 h-4 text-green-600" /> : <Edit2 className="w-4 h-4 text-gray-600" />}
            </button>
            <button 
              onClick={() => setShowDeleteConfirm(category)}
              className="p-2 hover:bg-red-50 rounded-lg"
            >
              <Trash2 className="w-4 h-4 text-red-600" />
            </button>
          </div>
        </div>

        <div className="space-y-2 mb-3">
          {isEditing ? (
            <div className="space-y-2">
              <div>
                <label className="text-xs text-gray-500">Budget</label>
                <input
                  type="number"
                  value={category.budget}
                  onChange={(e) => updateCategory(category.id, 'budget', e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg text-sm"
                  max={remaining + category.budget}
                />
              </div>
              <div>
                <label className="text-xs text-gray-500">Spent</label>
                <input
                  type="number"
                  value={category.spent}
                  onChange={(e) => updateCategory(category.id, 'spent', e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg text-sm"
                  max={category.budget}
                />
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Budget: LKR {category.budget.toLocaleString()}</span>
                <span className={`font-semibold ${isOverBudget ? 'text-red-500' : 'text-gray-800'}`}>
                  Spent: LKR {category.spent.toLocaleString()}
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${isOverBudget ? 'bg-red-500' : category.color} transition-all duration-500`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-500">{percentage.toFixed(1)}% used</span>
                <span className={`font-semibold ${category.spent < category.budget ? 'text-green-500' : 'text-red-500'}`}>
                  {category.spent < category.budget ? '+' : ''}{(category.budget - category.spent).toLocaleString()} LKR
                </span>
              </div>
            </>
          )}
        </div>

        {sharingMode && !isEditing && (
          <div className="pt-3 border-t border-gray-200">
            <div className="flex items-center justify-between text-xs text-gray-600">
              <span>Contributors: {category.contributors.length || 'None'}</span>
              <button className="text-purple-600 font-semibold hover:text-purple-700">
                + Add
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Pie Chart
  const PieChart = () => {
    const total = categories.reduce((sum, cat) => sum + cat.spent, 0);
    let currentAngle = 0;

    return (
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h3 className="font-bold text-lg mb-4">Spending Distribution</h3>
        <div className="flex items-center justify-center mb-4">
          <svg width="200" height="200" viewBox="0 0 200 200">
            {categories.map((cat, index) => {
              const percentage = (cat.spent / total) * 100;
              const angle = (percentage / 100) * 360;
              const startAngle = currentAngle;
              const endAngle = currentAngle + angle;
              
              const x1 = 100 + 80 * Math.cos((Math.PI * startAngle) / 180);
              const y1 = 100 + 80 * Math.sin((Math.PI * startAngle) / 180);
              const x2 = 100 + 80 * Math.cos((Math.PI * endAngle) / 180);
              const y2 = 100 + 80 * Math.sin((Math.PI * endAngle) / 180);
              
              const largeArc = angle > 180 ? 1 : 0;
              
              const pathData = `M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`;
              
              currentAngle += angle;
              
              const colors = {
                'bg-blue-500': '#3b82f6',
                'bg-green-500': '#10b981',
                'bg-purple-500': '#a855f7',
                'bg-pink-500': '#ec4899',
                'bg-yellow-500': '#eab308',
                'bg-indigo-500': '#6366f1',
                'bg-orange-500': '#f97316',
                'bg-teal-500': '#14b8a6'
              };
              
              return (
                <path
                  key={index}
                  d={pathData}
                  fill={colors[cat.color]}
                  opacity="0.8"
                  className="hover:opacity-100 transition-opacity cursor-pointer"
                />
              );
            })}
            <circle cx="100" cy="100" r="50" fill="white" />
            <text x="100" y="95" textAnchor="middle" className="text-xs fill-gray-600">Total Spent</text>
            <text x="100" y="110" textAnchor="middle" className="text-sm font-bold fill-gray-800">
              {((totalSpent / totalBudget) * 100).toFixed(0)}%
            </text>
          </svg>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {categories.map(cat => (
            <div key={cat.id} className="flex items-center gap-2 text-xs">
              <div className={`${cat.color} w-3 h-3 rounded-full`} />
              <span className="text-gray-600 truncate">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Alerts Section
  const AlertsSection = () => {
    const alerts = [];
    
    categories.forEach(cat => {
      const percentage = (cat.spent / cat.budget) * 100;
      if (percentage >= 95) {
        alerts.push({ text: `${cat.name} budget ${percentage.toFixed(0)}% used`, type: 'warning', icon: AlertCircle });
      }
    });
    
    if (remaining > 0) {
      alerts.push({ text: `You have LKR ${remaining.toLocaleString()} remaining`, type: 'success', icon: Check });
    } else if (remaining < 0) {
      alerts.push({ text: `You're over budget by LKR ${Math.abs(remaining).toLocaleString()}`, type: 'urgent', icon: AlertCircle });
    }

    return (
      <div className="bg-white rounded-xl p-6 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg">Alerts & Reminders</h3>
          <Bell className="w-5 h-5 text-gray-600" />
        </div>
        <div className="space-y-2">
          {alerts.length > 0 ? alerts.map((alert, i) => (
            <div 
              key={i}
              className={`flex items-center gap-3 p-3 rounded-lg ${
                alert.type === 'urgent' ? 'bg-red-50 border border-red-200' :
                alert.type === 'warning' ? 'bg-yellow-50 border border-yellow-200' :
                'bg-green-50 border border-green-200'
              }`}
            >
              <alert.icon className={`w-5 h-5 ${
                alert.type === 'urgent' ? 'text-red-500' :
                alert.type === 'warning' ? 'text-yellow-500' :
                'text-green-500'
              }`} />
              <span className="text-sm text-gray-700">{alert.text}</span>
            </div>
          )) : (
            <div className="text-center text-gray-500 py-4">No alerts at the moment</div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      {!budgetSet && <BudgetSetup />}
      {showTemplates && <TemplatesModal />}
      {showDeleteConfirm && <DeleteConfirmModal category={showDeleteConfirm} />}
      <FloatingStatsBar />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Budget Plan</h1>
            <p className="text-gray-600">Manage your wedding expenses efficiently</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setSharingMode(!sharingMode)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                sharingMode 
                  ? 'bg-purple-500 text-white shadow-lg' 
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-purple-500'
              }`}
            >
              {sharingMode ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
              {sharingMode ? 'Sharing ON' : 'Enable Sharing'}
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg font-semibold border-2 border-gray-300 hover:border-blue-500 transition-colors">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <StatCard 
            title="Total Budget" 
            value={totalBudget} 
            icon={Target} 
            color="bg-blue-500" 
            editable={true}
            onEdit={() => {
              setIsEditingBudget(true);
              setTempBudget(totalBudget);
            }}
          />
          <StatCard title="Total Spent" value={totalSpent} icon={DollarSign} color="bg-green-500" trend={12} />
          <StatCard title="Remaining" value={remaining} icon={TrendingUp} color="bg-purple-500" trend={-8} />
          <StatCard title="Allocated" value={totalAllocated} icon={PieChart} color="bg-pink-500" />
        </div>

        {/* Budget Edit Modal */}
        {isEditingBudget && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4">Edit Total Budget</h2>
              <input
                type="number"
                value={tempBudget}
                onChange={(e) => setTempBudget(Number(e.target.value))}
                className="w-full px-4 py-3 border-2 rounded-xl mb-4 text-lg"
                placeholder="Enter new budget"
              />
              <div className="flex gap-3">
                <button
                  onClick={saveBudgetEdit}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditingBudget(false)}
                  className="flex-1 border-2 border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Budget Progress */}
        <div className="bg-white rounded-xl p-6 shadow-md mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Overall Progress</h2>
            <span className="text-2xl font-bold text-purple-600">
              {((totalSpent / totalBudget) * 100).toFixed(1)}%
            </span>
          </div>
          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-all duration-1000"
              style={{ width: `${Math.min((totalSpent / totalBudget) * 100, 100)}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>LKR {totalSpent.toLocaleString()} spent</span>
            <span>LKR {remaining.toLocaleString()} remaining</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Categories */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Budget Categories</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold">
                <Plus className="w-4 h-4" />
                Add Category
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categories.map(cat => (
                <CategoryCard key={cat.id} category={cat} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <AlertsSection />
            
            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg hover:shadow-md transition-shadow">
                  <Plus className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-gray-700">Add Expense</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg hover:shadow-md transition-shadow">
                  <Share2 className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-gray-700">Share Budget</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg hover:shadow-md transition-shadow">
                  <PieChart className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-gray-700">View Analytics</span>
                </button>
              </div>
            </div>

            {/* Budget Health */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-lg mb-4">Budget Health</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">On Track</span>
                  <span className="text-sm font-bold text-green-500">5 categories</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Near Limit</span>
                  <span className="text-sm font-bold text-yellow-500">2 categories</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Over Budget</span>
                  <span className="text-sm font-bold text-red-500">1 category</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetPlan;