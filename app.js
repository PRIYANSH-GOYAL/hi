const path = require("path");
const express = require("express");
const app = express();
const PORT = 4444;
const mongoose = require("mongoose");
const hbs = require("hbs");
// const Users = require("./models/user");

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// app.get()
app.get("/", (req, res) => {
  res.render("hello");
});

app.get("/bye", async (req, res) => {
  res.render("bye");
});
// app.post("/username", async (req, res) => {
//   const { userName } = req.body;
//   // console.log(username);
//   await Users.create({
//     userName
//     // save()
//   });
//   res.render("a");
// });

  mongoose.connect(
    "mongodb+srv://priyansh:priyanshvansh@cluster0.w1vqwhi.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:` + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
