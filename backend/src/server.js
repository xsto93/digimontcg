const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const Router = require("./routes")

const app = express();

app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

mongoose.connect('mongodb+srv://root:root@cluster0.3kklc.mongodb.net/digitcg?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});



app.use(Router);

app.listen(3100, () => {
  console.log("Server is running at port 3100");
});

module.exports = db;
