const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejsLayouts = require("express-ejs-layouts");
const dotenv = require("dotenv/config");
const session = require('express-session')
const passport = require('passport')
const userRoutes = require("./routes/userRoute")
const villaRoutes = require("./routes/villasRoutes")
const cors = require('cors')




app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())

app.set("view engine", "ejs");
app.use(ejsLayouts);


app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(passport.initialize())
app.use(passport.session())

// app.get("*", (req, res) => {
//   res.render("404");
// });

mongoose.connect(
  process.env.DEV_DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongoDB");
  }
);


app.use("/user",userRoutes)
app.use("/villa",villaRoutes)

app.listen(4000, () => console.log("express running"));