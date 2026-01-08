const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", require("./routes/taskRoutes"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

const rootDir = path.resolve();
app.use(express.static(path.join(rootDir, "frontend", "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(rootDir, "frontend", "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
