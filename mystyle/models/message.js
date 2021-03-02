const { Schema, model } = require("mongoose");

const msgSchema = new Schema({
  userName: {
    type: String,
    required: [true, "Type your name"],
  },
  message: {
    type: String,
    required: [true, "Leave a message"],
  },
  date: {
    type: String,
    required: [true, "Didn't get a date"],
  },
});

module.exports = model("Msg", msgSchema);
