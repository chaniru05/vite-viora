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