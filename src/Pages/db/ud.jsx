import React, { useState, useEffect } from 'react';
import { 
  Bell, Mail, Users, CheckSquare, MapPin, Sparkles, Calendar, Camera, 
  Heart, Edit2, Send, MessageCircle, Home, LayoutDashboard, Settings, 
  LogOut, Menu, X, FileText, DollarSign, Gift, Music, Image, ChevronRight 
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

// ============================================
// BUDGET TRACKER COMPONENT
// ============================================
const BudgetTracker = () => {
  const [spent, setSpent] = useState(0);
  const budget = 800000;
  const targetSpent = 500000;
  const percentage = (targetSpent / budget) * 100;

  useEffect(() => {
    let current = 0;
    const increment = targetSpent / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetSpent) {
        setSpent(targetSpent);
        clearInterval(timer);
      } else {
        setSpent(Math.floor(current));
      }
    }, 20);
    return () => clearInterval(timer);
  }, [targetSpent]);

  return (
    <div className="mt-15 bg-white rounded-2xl shadow-md p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Total Wedding Budget</h2>
          <p className="text-sm text-gray-500">Track expenses across all categories</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Edit2 className="w-5 h-5 text-gray-600" />
          </button>
          <span className="text-2xl font-bold text-gray-800">LKR {budget.toLocaleString()}</span>
        </div>
      </div>
      
      <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="absolute h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <div className="flex items-center justify-between mt-3">
        <span className="text-sm font-semibold text-gray-700">
          LKR {spent.toLocaleString()} spent
        </span>
        <span className="text-sm font-semibold text-gray-500">
          LKR {(budget - targetSpent).toLocaleString()} remaining
        </span>
      </div>
    </div>
  );
};

// ============================================
// REMINDERS CARD COMPONENT
// ============================================
const RemindersCard = () => {
  const reminders = [
    { text: "You Have to Find a Venue By", icon: Calendar, color: "bg-yellow-100 border-yellow-300" },
    { text: "You Have to Invite", icon: Users, color: "bg-yellow-100 border-yellow-300", extra: "more Guests" },
    { text: "You Have 4 more steps to finalize web", icon: CheckSquare, color: "bg-yellow-100 border-yellow-300" }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Reminders</h3>
      <div className="space-y-3">
        {reminders.map((reminder, i) => (
          <div key={i} className={`flex items-center space-x-3 p-3 rounded-xl border-2 ${reminder.color} hover:shadow-md transition-all cursor-pointer`}>
            <div className="bg-yellow-400 p-2 rounded-lg">
              <reminder.icon className="w-5 h-5 text-yellow-900" />
            </div>
            <span className="text-sm font-medium text-gray-800 flex-1">
              {reminder.text} {reminder.extra && <span className="text-red-500">{reminder.extra}</span>}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================
// INVITES CARD COMPONENT
// ============================================
const InvitesCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Invites & RSVPs</h3>
      <div className="flex flex-col items-center">
        <div className="relative mb-4">
          <Mail className="w-24 h-24 text-red-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Mail className="w-16 h-16 text-white" />
          </div>
        </div>
        
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
          <div className="flex h-full">
            <div className="bg-green-500" style={{ width: '40%' }} />
            <div className="bg-red-500" style={{ width: '30%' }} />
            <div className="bg-yellow-500" style={{ width: '30%' }} />
          </div>
        </div>
        
        <div className="flex items-center justify-between w-full text-xs mt-2">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-1" />
            <span className="text-gray-600">YES</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-1" />
            <span className="text-gray-600">NO</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1" />
            <span className="text-gray-600">PENDING</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// GUEST LIST CARD COMPONENT
// ============================================
const GuestListCard = () => {
  const data = [
    { label: 'Groom', value: 45, color: 'bg-blue-400' },
    { label: 'Transport', value: 35, color: 'bg-orange-400' },
    { label: 'Adults', value: 75, color: 'bg-purple-500' },
    { label: 'Event', value: 55, color: 'bg-teal-400' }
  ];
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Guest List</h3>
      <div className="flex items-end justify-between h-40 space-x-2">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center flex-1">
            <div className="relative w-full flex items-end justify-center" style={{ height: '120px' }}>
              <div 
                className={`w-full ${item.color} rounded-t-lg transition-all duration-1000 ease-out hover:opacity-80 cursor-pointer`}
                style={{ 
                  height: `${(item.value / maxValue) * 100}%`,
                  animationDelay: `${i * 100}ms`
                }}
              />
            </div>
            <span className="text-xs text-gray-600 mt-2 font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================
// TASK CHECKLIST CARD COMPONENT
// ============================================
const TaskChecklistCard = () => {
  const [tasks, setTasks] = useState([
    { text: "Research Venues", checked: true },
    { text: "Photographer Booking", checked: false },
    { text: "Videographer Booking", checked: false },
    { text: "Invitation Designing", checked: false },
    { text: "Poruwa Items", checked: false }
  ]);

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].checked = !newTasks[index].checked;
    setTasks(newTasks);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Task and Checklist</h3>
      <div className="space-y-2">
        {tasks.map((task, i) => (
          <label key={i} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors group">
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => toggleTask(i)}
              className="w-5 h-5 rounded border-2 border-gray-300 text-purple-600 focus:ring-2 focus:ring-purple-500 cursor-pointer"
            />
            <span className={`text-sm flex-1 transition-all ${task.checked ? 'line-through text-gray-400' : 'text-gray-700 group-hover:text-gray-900'}`}>
              {task.text}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

// ============================================
// SEATING PLANNER CARD COMPONENT
// ============================================
const SeatingPlannerCard = () => {
  const [items, setItems] = useState([
    { id: 1, type: 'table', x: 60, y: 90, seats: 8, label: 'T1' },
    { id: 2, type: 'table', x: 180, y: 80, seats: 6, label: 'T2' },
    { id: 3, type: 'table', x: 280, y: 90, seats: 8, label: 'T3' },
    { id: 4, type: 'table', x: 110, y: 160, seats: 6, label: 'T4' },
    { id: 5, type: 'table', x: 230, y: 160, seats: 6, label: 'T5' },
    { id: 6, type: 'stage', x: 140, y: 20, label: 'STAGE 1' },
    { id: 7, type: 'stage', x: 240, y: 20, label: 'STAGE 2' },
    { id: 8, type: 'cake', x: 30, y: 180, label: 'CAKE' },
    { id: 9, type: 'bar', x: 300, y: 180, label: 'BAR' }
  ]);
  
  const [dragging, setDragging] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e, item) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setDragging(item.id);
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const container = e.currentTarget.getBoundingClientRect();
      const newX = e.clientX - container.left - offset.x;
      const newY = e.clientY - container.top - offset.y;
      
      setItems(items.map(item => 
        item.id === dragging 
          ? { ...item, x: Math.max(0, Math.min(newX, container.width - 80)), y: Math.max(0, Math.min(newY, container.height - 80)) }
          : item
      ));
    }
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  const DraggableTable = ({ item }) => (
    <div 
      className={`absolute group cursor-move ${dragging === item.id ? 'z-50' : 'z-10'}`}
      style={{ left: item.x, top: item.y }}
      onMouseDown={(e) => handleMouseDown(e, item)}
    >
      <div className={`relative bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg shadow-lg w-16 h-16 flex items-center justify-center transition-transform ${dragging === item.id ? 'scale-110 shadow-2xl' : 'hover:scale-105'}`}>
        <span className="text-white text-xs font-bold">{item.label}</span>
      </div>
      
      {[...Array(item.seats)].map((_, i) => {
        const angle = (360 / item.seats) * i;
        const radius = 40;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        
        return (
          <div
            key={i}
            className="absolute w-5 h-5 bg-gradient-to-br from-gray-700 to-gray-800 rounded-md shadow-md pointer-events-none"
            style={{
              left: `calc(50% + ${x}px - 10px)`,
              top: `calc(50% + ${y}px - 10px)`,
              transform: `rotate(${angle}deg)`
            }}
          >
            <div className="w-full h-full border-2 border-gray-600 rounded-md" />
          </div>
        );
      })}
      
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {item.seats} seats • Drag to move
      </div>
    </div>
  );

  const DraggableStage = ({ item }) => (
    <div 
      className={`absolute cursor-move ${dragging === item.id ? 'z-50' : 'z-10'}`}
      style={{ left: item.x, top: item.y }}
      onMouseDown={(e) => handleMouseDown(e, item)}
    >
      <div className={`bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg shadow-lg px-8 py-3 transition-transform ${dragging === item.id ? 'scale-110 shadow-2xl' : 'hover:scale-105'}`}>
        <span className="text-white text-xs font-bold">{item.label}</span>
      </div>
    </div>
  );

  const DraggableCake = ({ item }) => (
    <div 
      className={`absolute cursor-move group ${dragging === item.id ? 'z-50' : 'z-10'}`}
      style={{ left: item.x, top: item.y }}
      onMouseDown={(e) => handleMouseDown(e, item)}
    >
      <div className={`bg-gradient-to-br from-pink-400 to-rose-400 rounded-xl shadow-lg w-16 h-16 flex flex-col items-center justify-center transition-transform ${dragging === item.id ? 'scale-110 shadow-2xl' : 'hover:scale-105'}`}>
        <div className="text-2xl">🎂</div>
        <span className="text-white text-xs font-bold mt-1">{item.label}</span>
      </div>
    </div>
  );

  const DraggableBar = ({ item }) => (
    <div 
      className={`absolute cursor-move group ${dragging === item.id ? 'z-50' : 'z-10'}`}
      style={{ left: item.x, top: item.y }}
      onMouseDown={(e) => handleMouseDown(e, item)}
    >
      <div className={`bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg w-16 h-16 flex flex-col items-center justify-center transition-transform ${dragging === item.id ? 'scale-110 shadow-2xl' : 'hover:scale-105'}`}>
        <div className="text-2xl">🍷</div>
        <span className="text-white text-xs font-bold mt-1">{item.label}</span>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-800">Seating Planner</h3>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500">Drag to arrange</span>
          <button className="text-xs bg-teal-500 text-white px-3 py-1 rounded-lg hover:bg-teal-600 transition-colors">
            Save Layout
          </button>
        </div>
      </div>
      
      <div 
        className="relative bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-4 h-64 overflow-hidden border-2 border-dashed border-teal-200 select-none"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {items.map(item => {
          if (item.type === 'table') return <DraggableTable key={item.id} item={item} />;
          if (item.type === 'stage') return <DraggableStage key={item.id} item={item} />;
          if (item.type === 'cake') return <DraggableCake key={item.id} item={item} />;
          if (item.type === 'bar') return <DraggableBar key={item.id} item={item} />;
          return null;
        })}
        
        <div className="absolute bottom-3 right-3 bg-white/90 rounded-lg p-2 text-xs shadow-md pointer-events-none">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 bg-gradient-to-br from-amber-600 to-amber-700 rounded" />
              <span className="text-gray-700">Tables: 5</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 bg-gradient-to-br from-gray-700 to-gray-800 rounded" />
              <span className="text-gray-700">Total: 9 items</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// AI ASSISTANT CARD COMPONENT
// ============================================
const AIAssistantCard = () => {
  const [messages] = useState([
    { text: "Hello! I can help you!", sender: "ai" },
    { text: "How can I help you do?", sender: "ai" }
  ]);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-800">AI Assistant</h3>
        <Sparkles className="w-5 h-5 text-purple-500" />
      </div>
      
      <div className="space-y-3 mb-4">
        {messages.map((msg, i) => (
          <div key={i} className="flex items-start space-x-2">
            <div className="bg-yellow-400 p-2 rounded-full">
              <MessageCircle className="w-4 h-4 text-yellow-900" />
            </div>
            <div className="flex-1 bg-yellow-50 rounded-xl p-3">
              <p className="text-sm text-gray-700">{msg.text}</p>
            </div>
            <div className="bg-gray-800 p-2 rounded-full">
              <Users className="w-4 h-4 text-white" />
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type Here..."
          className="flex-1 px-4 py-2 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button className="bg-gray-800 p-2 rounded-xl hover:bg-gray-700 transition-colors">
          <Send className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

// ============================================
// WEDDING PROCESS CARD COMPONENT
// ============================================
const WeddingProcessCard = () => {
  const progress = 68;
  
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Wedding Plan Process</h3>
      
      <div className="flex items-center justify-center py-8">
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="#e5e7eb"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="#ec4899"
              strokeWidth="12"
              fill="none"
              strokeDasharray={351.86}
              strokeDashoffset={351.86 - (351.86 * progress) / 100}
              className="transition-all duration-1000 ease-out"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-3xl font-bold text-pink-500">{progress}%</p>
              <p className="text-xs text-gray-500">Complete</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// AR ASSISTANT CARD COMPONENT
// ============================================
const ARAssistantCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg font-bold text-gray-800 mb-4">AR Assistant</h3>
      
      <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-xl p-6 h-48 flex flex-col items-center justify-center">
        <Camera className="w-16 h-16 text-purple-600 mb-3" />
        <p className="text-sm text-gray-700 text-center font-medium">Visualize Your Venue</p>
        <p className="text-xs text-gray-500 text-center mt-1">Try AR Experience</p>
        
        <button className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all">
          Launch AR
        </button>
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
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      {/* Main Content */}
      <div className={` flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            {/* Budget Tracker */}
            <BudgetTracker />
            
            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <RemindersCard />
              <InvitesCard />
              <GuestListCard />
              <TaskChecklistCard />
              <SeatingPlannerCard />
              <AIAssistantCard />
              <WeddingProcessCard />
              <ARAssistantCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;