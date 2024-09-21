const mongoose = require("mongoose");
// * handle the promise returned by the function
main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log(err);
  });
// * function handles the connection promise
async function main() {
  // * create connection with the mongodb
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
// * create schema for the collection (blueprint for the collection)
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});
// * create the collection into the db
const User = mongoose.model("User", userSchema);

// * create document for the collection in the db
const user1 = new User({
  name: "arpit",
  email: "example@gmail.com",
  age: 25,
});

user1.save()