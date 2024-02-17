const express = require("express");
const router = express.Router();
const Product = require("../models/product.model.js");
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

// Get all products

router.get("/", getProducts);

// Get a product by id

router.get("/:id", getProductById);

// Create a new product

router.post("/", createProduct);

// Update a product

router.put("/:id", updateProduct);

// Delete a product

router.delete("/:id", deleteProduct);

module.exports = router;
