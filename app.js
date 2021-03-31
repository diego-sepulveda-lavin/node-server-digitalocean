const express = require("express");
const app = express();
const port = 5000

app.get("/", (req, res) => {
  res.json({msg:'Probando el micrófono'});
});

app.get("/api", (req,res) => {
  res.json({msg:'Otra prueba fea'})
})

app.listen(port, () => {
  console.log("Up and running");
});
