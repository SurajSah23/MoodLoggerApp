import { useState } from 'react';
import { addMoodEntry } from '../utils/storage';
import { 
  Smile, 
  PartyPopper, 
  Coffee, 
  Meh, 
  Frown, 
  AlertCircle, 
  Angry 
} from 'lucide-react';

const moodOptions = [
  { type: 'happy', icon: <Smile className="w-6 h-6" />, label: 'Happy' },
  { type: 'excited', icon: <PartyPopper className="w-6 h-6" />, label: 'Excited' },
  { type: 'calm', icon: <Coffee className="w-6 h-6" />, label: 'Calm' },
  { type: 'neutral', icon: <Meh className="w-6 h-6" />, label: 'Neutral' },
  { type: 'sad', icon: <Frown className="w-6 h-6" />, label: 'Sad' },
  { type: 'anxious', icon: <AlertCircle className="w-6 h-6" />, label: 'Anxious' },
  { type: 'angry', icon: <Angry className="w-6 h-6" />, label: 'Angry' },
];

export default function MoodForm() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [thoughts, setThoughts] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedMood) {
      addMoodEntry({ mood: selectedMood, thoughts });
      setSelectedMood(null);
      setThoughts('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <label className="block text-lg font-medium text-gray-700">
          How are you feeling today?
        </label>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
          {moodOptions.map(({ type, icon, label }) => (
            <button
              key={type}
              type="button"
              onClick={() => setSelectedMood(type)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedMood === type
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-200'
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                {icon}
                <span className="text-sm font-medium">{label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="thoughts" className="block text-lg font-medium text-gray-700">
          What is on your mind?
        </label>
        <textarea
          id="thoughts"
          value={thoughts}
          onChange={(e) => setThoughts(e.target.value)}
          className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Share your thoughts..."
        />
      </div>

      <button
        type="submit"
        disabled={!selectedMood}
        className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Log Mood
      </button>
    </form>
  );
}
