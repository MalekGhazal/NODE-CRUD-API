const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT;
const DB_CONN = process.env.DB_STRING;

// routes
app.use("/api/products", productRoute);

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
