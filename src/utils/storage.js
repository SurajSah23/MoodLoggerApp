const STORAGE_KEY = 'mood-logger-data';

export const getStoredMoodData = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : { entries: [] };
};

export const storeMoodData = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const addMoodEntry = (entry) => {
  const data = getStoredMoodData();
  const newEntry = {
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    ...entry,
  };
  data.entries.unshift(newEntry);
  storeMoodData(data);
};
