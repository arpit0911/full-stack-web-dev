const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./modals/chat.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
main()
  .then(() => console.log("MongoDB Connection Successful"))
  .catch((err) => console.log("Cant connect ", err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
// New route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});
// create route
app.post("/chats", (req, res) => {
  const { from, to, message } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    message: message,
    created_at: new Date(),
  });
  console.log("new Chat", newChat);
  newChat
    .save()
    .then((res) => console.log("successfully inserted ", res))
    .catch((err) => console.error("error in inserting new chat", err));
  res.redirect("/chats");
});
// edit chats
app.get("/chats/:id/edit", async (req, res) => {
  const { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});
// update
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { message } = req.body;

  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { message: message },
    { runValidators: true, new: true }
  );
  console.log("updated chat", updatedChat);
  res.redirect("/chats");
});
// destroy route
app.delete("/chats/:id", async (req, res) => {
  const { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  console.log("deleted chat", deletedChat);
  res.redirect("/chats");
});
// get all chats
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  // console.log(chats);
  res.render("index.ejs", { chats });
});

app.get("/", (req, res) => {
  res.send("everything is working");
});

app.listen(8080, () => {
  console.log("listing to port 8080");
});
