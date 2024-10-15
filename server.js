const express = require("express");
const app = express();
const PORT = 5000;

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

app.listen(PORT, (req, res) => {
  console.log("Server listening on port 5000");
});
