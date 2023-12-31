const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.static("public"));
const PORT = 8080;
app.get("/image", (req, res) => {
  const fileName = req.query.img;
  res.setHeader("Content-Type", "image/jpeg");
  const image = fs.readFileSync(`./public/images/${fileName}`);
  res.send(image);
});
app.get("/", (req, res) => {
    res.sendFile("/index.html")
})
app.listen(PORT, () => {
  console.log("Server is running in port " + PORT);
});


