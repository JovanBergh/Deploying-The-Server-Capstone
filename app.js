const express = require("express");
const cors = require("cors"); // used for API distribution


const app = express();

app.use(cors());

app.use("/", () => (req, res) => {
  res.json({ message: "Hello Render!" });
});

module.exports = app;