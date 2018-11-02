const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const agents = require("./routes/api/agents")

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

app.get("/hello", (req, res) => res.send("Hello"))

// Use routes
app.use("/agents", agents)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})
