const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Hello World");
  res.send("Hi");
});

app.listen(3000);
