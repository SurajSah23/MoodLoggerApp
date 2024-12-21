import { getStoredMoodData } from '../utils/storage';
import { 
  Smile, 
  PartyPopper, 
  Coffee, 
  Meh, 
  Frown, 
  AlertCircle, 
  Angry 
} from 'lucide-react';

const moodIcons = {
  happy: <Smile className="w-5 h-5" />,
  excited: <PartyPopper className="w-5 h-5" />,
  calm: <Coffee className="w-5 h-5" />,
  neutral: <Meh className="w-5 h-5" />,
  sad: <Frown className="w-5 h-5" />,
  anxious: <AlertCircle className="w-5 h-5" />,
  angry: <Angry className="w-5 h-5" />,
};

export default function MoodHistory() {
  const { entries } = getStoredMoodData();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Mood History</h2>
      <div className="space-y-4">
        {entries.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No mood entries yet. Start logging your moods!</p>
        ) : (
          entries.map((entry) => (
            <div
              key={entry.id}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-50 rounded-full">
                  {moodIcons[entry.mood]}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-gray-900 capitalize">{entry.mood}</h3>
                    <time className="text-sm text-gray-500">
                      {new Date(entry.timestamp).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </time>
                  </div>
                  <p className="text-gray-600">{entry.thoughts}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
