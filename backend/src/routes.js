const express = require("express");
let CardModel = require("./model/model");

const app = express();

app.post("/add_card", async (request, response) => {
    //console.log('Body', request)
    const card = new CardModel(request.body);
 
    try {
      await card.save();
      response.send(card);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/cards", async (request, response) => {
    const cards = await CardModel.find({});
  
    try {
      response.send(cards);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  module.exports = app;