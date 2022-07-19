const express = require("express");
const app = exporess();
const port = 4000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`server listen on ${port}`);
});
