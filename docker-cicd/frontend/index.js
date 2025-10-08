// index.js
const express = require("express");
const app = express();

// Root route
app.get("/", (req, res) => {
  res.send("🚀 Hello from Frontend Container! Docker + Node.js is running successfully!");
});

// Example route
app.get("/info", (req, res) => {
  res.json({
    app: "Frontend Service",
    message: "This is running inside a Docker container 🎉",
  });
});

// Server port
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Fronten

