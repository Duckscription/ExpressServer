const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let subscriptionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  dateStart: {
    type: Date,
    required: true,
  },
  dateEnd: {
    type: Date,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  URL: {
    type: String,
  },
  note: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
  },
});

let Subscription = mongoose.model('subscription', subscriptionSchema);

module.exports = Subscription;
