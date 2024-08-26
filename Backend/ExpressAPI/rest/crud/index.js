const express = require("express");
const path = require("path");
const app = express();

const port = 8080;
let posts = [
  { user: "arpit", comment: "new coding career began" },
  { user: "nikki", comment: "i love commenting" },
  { user: "arpit", comment: "new coding career began" },
  { user: "nikki", comment: "i love commenting" },
];

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/posts", (req, res) => {
  res.render("index.ejs",{posts});
});

app.listen(port, () => {
  console.log("listening to port: ", port);
});
