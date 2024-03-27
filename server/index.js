const express = require("express");
const app = express();
const Transaction = require("./models/Transaction");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json("api is working ");
});

app.post("/api/transaction", async (req, res) => {
  try {
    const transaction = new Transaction({
      name: req.body.name,
      desc: req.body.desc,
      datetime: req.body.datetime,
      price: req.body.price,
    });
    const response = await transaction.save();
    res.json(response);
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/transactions", async (req, res) => {
  const transactions = await Transaction.find({});
  res.json(transactions);
});

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("db connected");
});

app.listen(4000, () => {
  console.log("server is on");
});
