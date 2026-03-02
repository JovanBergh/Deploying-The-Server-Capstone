const express = require("express");
const cors = require("cors"); // used for API distribution
const productsRouter = require("./api/products/products.router");

const app = express();

app.use(cors());

app.use("/", () => (req, res) => {
  res.json({ message: "Hello Render!" });
});

app.use("/api/products", productsRouter);


module.exports = app;