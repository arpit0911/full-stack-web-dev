const mongoose = require("mongoose");
const Chat = require("./modals/chat.js");

main()
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "Arpit",
    to: "Nikki",
    message: "Iam fine don't worry about me",
    created_at: new Date(),
  },

  {
    from: "Arpit",
    to: "Nikki",
    message: "i hope you are doing yoga",
    created_at: new Date(),
  },
  {
    from: "Arpit",
    to: "Nikki",
    message: "its good to take care of you body",
    created_at: new Date(),
  },
  {
    from: "Arpit",
    to: "Nikki",
    message: "see you at the festival",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
