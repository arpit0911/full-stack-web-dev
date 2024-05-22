const express = require("express");
const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`The server is listening to port ${port}`);
});

// app.use((req, res) => {
//   res.send("this is a basic response");
// });
app.get("/about", (req, res) => {
  console.log("got req");
  res.send("response for about page"); 
});
