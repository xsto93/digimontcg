const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
    cardnumber: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
    },
  },{ collection: 'collected-cards' });
  
  const Card = mongoose.model("Card", CardSchema);
  
  module.exports = Card;