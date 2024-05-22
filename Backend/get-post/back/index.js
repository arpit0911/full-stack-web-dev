const express = require("express");
const app = express();

const port = 3000;

app.get("/register", (req, res) => {
  res.send("GET standard response");
});

app.post("/register", (req, res) => {
  res.send("GET standard response");
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
