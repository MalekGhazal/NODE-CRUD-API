const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/product.model.js");

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT;
const DB_CONN = process.env.DB_STRING;

app.get("/", (req, res) => {
  res.send("Hello from Node API, Malek");
});

app.post("/api/products", async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(DB_CONN)
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("Connection Failed!");
  });
