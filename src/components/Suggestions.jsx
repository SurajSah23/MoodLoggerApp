import { getStoredMoodData } from '../utils/storage';
import { Lightbulb, AlertTriangle } from 'lucide-react';

const getSuggestion = (mood) => {
  const suggestions = {
    happy: "Keep up the positive energy! Consider sharing your joy with others.",
    excited: "Channel this excitement into something creative or productive!",
    calm: "Perfect time for reflection or meditation to maintain this peace.",
    neutral: "Maybe try something new today to lift your spirits?",
    sad: "Remember it's okay to feel this way. Consider talking to someone you trust.",
    anxious: "Try some deep breathing exercises or go for a short walk.",
    angry: "Take a moment to step back and cool down. Write down your thoughts.",
  };
  return suggestions[mood] || "Take care of yourself today!";
};

const checkMoodPattern = (entries) => {
  const recentEntries = entries.slice(0, 3);
  const negativeCount = recentEntries.filter(
    entry => ['sad', 'anxious', 'angry'].includes(entry.mood)
  ).length;
  
  if (negativeCount >= 2) {
    return "We've noticed you've been feeling down lately. Consider reaching out to a friend or professional for support.";
  }
  return null;
};

export default function Suggestions() {
  const { entries } = getStoredMoodData();
  const latestMood = entries[0]?.mood;
  const alert = checkMoodPattern(entries);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Insights & Suggestions</h2>
      
      {latestMood && (
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium text-blue-900 mb-1">Daily Suggestion</h3>
              <p className="text-blue-800">{getSuggestion(latestMood)}</p>
            </div>
          </div>
        </div>
      )}

      {alert && (
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium text-amber-900 mb-1">Mood Alert</h3>
              <p className="text-amber-800">{alert}</p>
            </div>
          </div>
        </div>
      )}

      {!latestMood && (
        <p className="text-gray-500 text-center py-8">
          Start logging your moods to receive personalized suggestions!
        </p>
      )}
    </div>
  );
}
