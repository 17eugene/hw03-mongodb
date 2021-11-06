const app = require("../app");
const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://17eugene:oq9QIrWTHjwQflST@cluster0.0ryjo.mongodb.net/Contacts-app?retryWrites=true&w=majority";

const PORT = process.env.PORT || 3000;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
  })
  .catch((error) => console.log(error.message));
