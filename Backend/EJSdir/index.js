const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static(path.join(__dirname, "/public")));
// if server start from some other directory
app.set("view_engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("Error.ejs");
});

app.get("/rolldice", (req, res) => {
  let dice = Math.floor(Math.random() * 6) + 1; // suppose data comes from DB
  res.render("rollDice.ejs", { num: dice }); // DB data is passes into the ejs template
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  res.render("instagram.ejs", { username: username });
  console.log(username);
});

app.listen(port, () => {
  console.log(`Sever started at ${port}`);
});
