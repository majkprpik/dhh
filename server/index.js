const express = require("express");
const app = express();



app.get("/hello", (req, res) => {
  res.send("helo");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
