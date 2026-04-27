const express = require("express");
const noteRoutes = require("./routes/note.routes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/notes", noteRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ success: true, message: "Notes API is running 🚀" });
});

module.exports = app;
