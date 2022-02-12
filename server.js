const makeApp = require('./app.js');
require('dotenv').config();

// Database setup
// const makeDatabase = require('./database');
const makeMockDb = require('./mockDb');

// change between makeMockData and makeDatabase to switch between mock and real db
makeMockDb().then((database) => {
  const app = makeApp(database);
  // Start the server
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
  });
});
