const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
dotenv.config();

mongoose.connect(process.env.MONGODB);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

//Routes
app.get("/", (req, res) => {
  res.send("My API");
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.find({ email: email });
  if (user) {
    if (password === user[0].password) {
      res.send({ messsage: "Login Successfull", user: user });
    } else {
      res.send({ message: "Password didn't matched" });
    }
  } else {
    res.send({ message: "User not registered" });
  }
});
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const already = await User.findOne({ email: email });
  if (already) {
    res.send({ message: "User already registered" });
  } else {
    const user = new User({
      name,
      email,
      password,
    });
    const saved = await user.save();
    if (saved) {
      res.send("User successfully registered, Please login! ");
    } else {
      res.send("Error Occurred");
    }
  }
});
port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server has started on PORT ${port}`);
});
