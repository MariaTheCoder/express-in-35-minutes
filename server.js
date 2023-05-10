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

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;

  if (users.length === 0) {
    return res.status(400).send({ message: "No users found!" });
  }

  const foundUser = users.find((user) => user.id === Number(userId));

  if (!foundUser) {
    return res.status(404).send({ message: "No user found with given id" });
  }

  res.send(foundUser);
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Listening on port ${port}`);
});
