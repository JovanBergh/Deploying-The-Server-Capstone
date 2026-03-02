const express = require("express");
const cors = require("cors"); // used for API distribution
const productsRouter = require("./api/products/products.router");
const errorHandler = require("./api/errors/errorHandler");
const notFound = require("./api/errors/notFound");

const app = express();

app.use(cors());
app.use(express.json());



app.use("/api/products", productsRouter);

app.use(notFound);

app.use(errorHandler);

app.use("", (req, res) => {
  res.json({ message: "Hello Render!" });
});
module.exports = app;