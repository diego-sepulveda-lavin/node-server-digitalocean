const express = require("express");
const app = express();
const port = 5000

app.get("/", (req, res) => {
  res.send("Hola mundillo!");
});

app.listen(port, () => {
  console.log("Up and running");
});
