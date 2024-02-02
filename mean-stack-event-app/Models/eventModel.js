
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  category: String,
  state: String,
  eventType: String,
  placeName: String,
  placeMap: String,
  organizedBy: String,
  picture: String,
 
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
