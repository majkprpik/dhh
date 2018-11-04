const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const passport = require("passport")

const agents = require("./routes/api/agents")
const roles = require("./routes/api/roles")
const shifts = require("./routes/api/shifts")


const app = express()

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// DB config
const db = require("./config/keys").mongoURI

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err))

// Passport middleware
app.use(passport.initialize())

// Passport config
require("./config/passport")(passport)

// Use routes
app.use("/agents", agents)
app.use("/roles", roles)
app.use("/shifts", shifts)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})
