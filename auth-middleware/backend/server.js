const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { expressjwt } = require("express-jwt");

const app = express();
app.use(cors());

const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post("/login", function (req, res) {
  console.log(req);
  var token = jwt.sign({ foo: "bar" }, "secret");
  res.send(token);
});

app.get("/protected", expressjwt({ secret: "secret", algorithms: ["HS256"] }), function (req, res) {
  res.send(["alice", "bob"]);
});
