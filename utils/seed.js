const connection = require('../config/connection');
const { Thought, user } = require('../models');
const { getRandomUser, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await user.deleteMany({});

  // Create empty array to hold users
  const users = [];
  const thoughts = [];

  // Get some random assignment objects using a helper function that we imported from ./data
  
  for (let i = 0; i < 10; i++) {
    const thought = getRandomThoughts(20);
    let username = getRandomUser();
    const reactions = []

    thoughts.push({
      thought,
      // createdAt,  
      username,
      reactions,
    });
  }


  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 10; i++) {
    const username = getRandomUser();
    const email = username + "@newmail.com"
    const friends = []
    const thoughts = []

    users.push({
      username,
      email,
      friends,
      thoughts,
    });
  }

  // Add students to the collection and await the results
  await user.collection.insertMany(users);

  // Add thoughts to the collection and await the results
  await Thought.collection.insertMany(thoughts)
  // });

  // Log out the seed data to indicate what should appear in the database
  console.log(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});


