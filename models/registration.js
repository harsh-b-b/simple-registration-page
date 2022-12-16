const mongoose = require("mongoose");

const userRegistrationSchema = new mongoose.Schema({
 
  name: { type: String, required: true, max: 50 },
  email: { type: String, required: true, max: 50 },
  phno: { type: String, required: true, max: 50 },
  pwd: { type: String, required: true, max: 50 },
});

module.exports = mongoose.model("registration", userRegistrationSchema);