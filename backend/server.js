require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB, getDB } = require("./db");
const { ObjectId } = require("mongodb");

const app = express();

/* ✅ CORS (DELETE allowed) */
app.use(
  cors({
      origin: "http://localhost:5173", 
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);

app.use(express.json());

connectDB();

/* TEST */
app.get("/", (req, res) => {
  res.send("hello");
});

/* GET */
app.get("/passwords", async (req, res) => {
  const db = getDB();
  const data = await db.collection("passwords").find().toArray();
  res.json(data);
});

/* POST */
app.post("/password", async (req, res) => {
  const db = getDB();
  const { site, username, password } = req.body;

  await db.collection("passwords").insertOne({
    site,
    username,
    password,
  });

  res.json({ success: true });
});

/* DELETE */
app.delete("/password/:id", async (req, res) => {
  const db = getDB();
  const { id } = req.params;

  await db.collection("passwords").deleteOne({
    _id: new ObjectId(id),
  });

  res.json({ success: true });
});

app.put("/password/:id", async (req, res) => {
  const db = getDB();
  const { id } = req.params;
  const { site, username, password } = req.body;

  await db.collection("passwords").updateOne(
    { _id: new ObjectId(id) },
    { $set: { site, username, password } }
  );

  res.json({ success: true });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
