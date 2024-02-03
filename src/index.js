const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(4040, () => {
  console.log(`app is running on port http://localhost:4040`);
});
