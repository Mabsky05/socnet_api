// const names = [
const usernames = [
  'SkyLitE',
  'Fatty',
  'HaX',
  'blank_blink',
  'HoggyWoggyWog',
  'Courtney',
  'Gillian',
  'Clark',
  'Grace',
  'Kelsey',
  'Alex',
  'Mark',
  'Sarah',
  'Nathan',
  'Parker',
];

// const appDescriptions = [
const thoughts = [
  'Hi',
  'I love it',
  'YOLO',
  'Emotional Damage!',
  'Kpop Stan',
  'ASL',
  'Netflix',
  'To the moon!',
  'Smooooooth',
  'Chonkers',
  'Thumbs down',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(usernames)}`;

// Function to generate random assignments that we can add to student object.
const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      assignmentName: getRandomArrItem(thoughts),
      score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts };
