const Mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const bodyParser = require('body-parser');

Mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to MongoDB successfully"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/users", users);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

//i am not sure what bodyparser does... my json that i send up is still looking like json -_-
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server is running on port ${port}`));