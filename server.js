const express = require("express");
const app = express();
const port = process.env.port || 3050;

// data
const users = [
  { id: 0, name: "Maria", email: "example1@email.com" },
  { id: 1, name: "Sanne", email: "example2@email.com" },
  { id: 2, name: "Nina", email: "example3@email.com" },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.send(users);
});

app.get("/users/", (req, res) => {
  res.send(users);
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Listening on port ${port}`);
});
