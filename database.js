const mongoose = require('mongoose');
const Subscription = require('./models/Subscription');

mongoose.Promise = global.Promise;
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);

const connectionString = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(connectionString, options)
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.log('Cannot connect to the database', err);
    process.exit();
  });

module.exports = async function () {

  const client = mongoose.connection;
  client.on('error', console.error.bind(console, 'MongoDB connection error:'));

  async function getAllSubs(accountId) {
    let subs = await Subscription.find();
    return {
      msg: `Successfully retrieved subscriptions`,
      subs,
    };
  }

  async function addNewSub(form, accountId) {
    let sub = new Subscription(form);
    sub = await sub.save();
    return {
      msg: `Successfully added new subscription ${form.title}!`,
    };
  }

  async function updateSub(form, accountId) {
    return {
      msg: `Successfully updated subscription ${form.title}!`,
    };
  }

  async function deleteSub(subId, accountId) {
    const queryOptions = { sub_id: subId };
    return {
      msg: `Successfully updated subscription with id ${queryOptions.sub_id}!`,
    };
  }

  return { getAllSubs, addNewSub, updateSub, deleteSub };
};
