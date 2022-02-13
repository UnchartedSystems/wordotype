const express = require("express");
const app = express();
const PORT = 6969; // default port 8080

// const path = require("path");
// const router = express.Router();



app.get("/", (req, res) => {
  res.send("Hello!");
});

// app.get("/index.html", (req, res) => {
//   res.send("yup"); 
// })

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
}); 


app.get("/urls.json", (req, res) => {
  res.json(urlDatabase);
});

app.get("/hello", (req, res) => {
  res.send("<html><body>Hello <b>World</b></body></html>\n");
});