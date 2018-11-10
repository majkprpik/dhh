const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");

const users = require("./routes/api/users");
const roles = require("./routes/api/roles");
const shifts = require("./routes/api/shifts");
const schedules = require("./routes/api/schedules");
const permissions = require("./routes/api/permissions");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

//only for development purpose
var originsWhitelist = ["http://localhost:4200"];
var corsOptions = {
  origin: function(origin, callback) {
    var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
    callback(null, isWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));

// Use routes
app.use("/users", users);
app.use("/roles", roles);
app.use("/shifts", shifts);
app.use("/schedules", schedules);
app.use("/permissions", permissions);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
