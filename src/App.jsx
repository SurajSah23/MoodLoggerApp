import { useState } from 'react';
import { BookHeart, History, Lightbulb } from 'lucide-react';
import MoodForm from './components/MoodForm';
import MoodHistory from './components/MoodHistory';
import Suggestions from './components/Suggestions';

function App() {
  const [activeTab, setActiveTab] = useState('log');

  const tabs = [
    { id: 'log', label: 'Log Mood', icon: <BookHeart className="w-5 h-5" /> },
    { id: 'history', label: 'History', icon: <History className="w-5 h-5" /> },
    { id: 'suggestions', label: 'Insights', icon: <Lightbulb className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mood Logger</h1>
          <p className="text-gray-600">Track your emotional journey, one day at a time</p>
        </header>

        <nav className="bg-white rounded-lg shadow-sm mb-8">
          <div className="flex">
            {tabs.map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex-1 flex items-center justify-center gap-2 py-4 px-4 text-sm font-medium transition-colors
                  ${activeTab === id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>
        </nav>

        <main className="bg-white rounded-lg shadow-sm p-6">
          {activeTab === 'log' && <MoodForm />}
          {activeTab === 'history' && <MoodHistory />}
          {activeTab === 'suggestions' && <Suggestions />}
        </main>
      </div>
    </div>
  );
}

export default App;
