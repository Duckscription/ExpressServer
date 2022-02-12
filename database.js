const { MongoClient } = require('mongodb');
const connectionString = process.env.MONGODB_URI;

let dbConnection;
const mongoClient = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = async function () {
  const client = await MongoClient.connect();



};