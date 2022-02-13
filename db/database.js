const mongoose = require('mongoose');
const Subscription = require('../models/Subscription');

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
    let subs = await Subscription.find().where('userId').equals(accountId);
    return {
      msg: `Successfully retrieved subscriptions`,
      subs,
    };
  }

  async function addNewSub(form, accountId) {
    let sub = new Subscription({ ...form, userId: accountId });
    sub = await sub.save();
    return {
      msg: `Successfully added new subscription ${form.title}!`,
      sub,
    };
  }

  async function updateSub(subId, form, accountId) {
    let sub = await Subscription.findByIdAndUpdate(subId, form, {
      new: true,
    });
    if (sub) {
      return {
        msg: `Successfully updated subscription ${form.title}!`,
        sub,
      };
    } else {
      return {
        msg: `Subscription with id ${subId} was not found!`,
      };
    }
  }

  async function deleteSub(subId, accountId) {
    let sub = await Subscription.findByIdAndRemove(subId);
    if (sub) {
      return {
        msg: `Successfully deleted subscription with id ${subId}!`,
      };
    } else {
      return {
        msg: `Subscription with id ${subId} was not found!`,
      };
    }
  }

  return { getAllSubs, addNewSub, updateSub, deleteSub };
};
