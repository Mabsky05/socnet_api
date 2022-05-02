const express = require('express');
const routes = require('./routes');
const db = require('./config/connection');

// Require model
const { Department } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

//Issues
//GET Thought (ID)
//PUT Thought (ID)
//DELETE Thought (ID)
//POST Reaction
//DELETE Reaction
//GET User (ID)
//UPDATE User (ID)
//POST Friend
//DELETE Friend


