const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let subscriptionSchema = new Schema({
  title: {
    type: String,
  },
  dateStart: {
    type: Date,
  },
  dateEnd: {
    type: Date,
  },
  color: {
    type: String,
  },
  type: {
    type: String,
  },
  price: {
    type: Number,
  },
  URL: {
    type: String,
  },
  note: {
    type: String,
  },
  userId: {
    type: String,
  },
});

let Subscription = mongoose.model('subscription', subscriptionSchema);

module.exports = Subscription;
