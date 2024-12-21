/**
 * @typedef {'happy' | 'excited' | 'calm' | 'neutral' | 'sad' | 'anxious' | 'angry'} MoodType
 */

/**
 * @typedef {Object} MoodEntry
 * @property {string} id - Unique identifier for the mood entry.
 * @property {MoodType} mood - The mood selected by the user.
 * @property {string} thoughts - The thoughts entered by the user.
 * @property {string} timestamp - The timestamp of the mood entry.
 */

/**
 * @typedef {Object} MoodData
 * @property {MoodEntry[]} entries - Array of mood entries.
 */

/**
 * Creates a mood entry object.
 * @param {string} id - The unique ID for the entry.
 * @param {MoodType} mood - The mood for this entry.
 * @param {string} thoughts - The user's thoughts for this entry.
 * @returns {MoodEntry} - A newly created mood entry.
 */
