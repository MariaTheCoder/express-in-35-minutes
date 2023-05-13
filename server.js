const express = require("express");
const app = express();
const port = process.env.port || 3050;

// data
const users = [
  { id: 0, name: "Maria", email: "example1@email.com" },
  { id: 1, name: "Sanne", email: "example2@email.com" },
  { id: 2, name: "Nina", email: "example3@email.com" },
];

const illegalProps = ["id", "admin"];

app.use(express.json());

app.get("/", (req, res) => {
  if (users.length === 0) {
    return res.status(400).send({ message: "No users found!" });
  }

  res.send(users);
});

app.get("/users/", (req, res) => {
  if (users.length === 0) {
    return res.status(400).send({ message: "No users found!" });
  }

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

app.patch("/users/:id", (req, res) => {
  const userId = req.params.id;
  const reqBody = req.body;

  if (users.length === 0) {
    return res.status(400).send({ message: "No users found!" });
  }

  if (Object.keys(reqBody).length === 0) {
    return res.status(400).send({ message: "Request body is empty" });
  }

  const foundUser = users.find((user) => user.id === Number(userId));

  if (!foundUser) {
    return res.status(404).send({ message: "No user found with given id" });
  }

  for (const key in reqBody) {
    const element = reqBody[key];

    foundUser[key] = element;
  }

  res.send(foundUser);
});

app.post("/users/", (req, res) => {
  const newUser = {};
  let reqBody = req.body;

  if (Object.keys(reqBody).length === 0) {
    return res.status(400).send({ message: "Request body is empty" });
  }

  reqBody = Object.fromEntries(
    Object.entries(reqBody).map(([key, value]) => [
      key.toLocaleLowerCase(),
      value,
    ])
  );

  illegalProps.forEach((illegalProp) => {
    if (reqBody.hasOwnProperty(illegalProp)) {
      return res.status(400).send({
        message:
          "Illegal properties are present in the body requests. Cannot set illegal properties",
      });
    }
  });

  newUser.id = users.length;

  for (const key in reqBody) {
    const element = reqBody[key];

    newUser[key] = element;
  }

  users.push(newUser);

  res.send(newUser);
});

app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;

  if (users.length === 0) {
    return res.status(400).send({ message: "No users found!" });
  }

  const foundIndex = users.findIndex((user) => user.id === Number(userId));
  const foundUser = users[foundIndex];

  if (!foundIndex) {
    return res.status(404).send({ message: "No user found with given id" });
  }

  users.splice(foundIndex, 1);

  res.send(foundUser);
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Listening on port ${port}`);
});
