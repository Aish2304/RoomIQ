const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const roomRoutes = require("./routes/roomRoutes");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/rooms", roomRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "ROOMIQ Backend is running! 🚀",
  });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully! 🍃");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });

app.listen(PORT, () => {
  console.log(`ROOMIQ Backend running on http://localhost:${PORT}`);
});