const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "grocery_store",
});

// Register API
app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;
  db.query(
    "INSERT INTO Consumer (name, email, password) VALUES (?, ?, ?)",
    [name, email, password],
    (err, results) => {
      if (err) return res.status(500).json({ error: "Error registering user" });
      res.status(201).json({ message: "User registered successfully", id: results.insertId });
    }
  );
});

// Login API
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  db.query(
    "SELECT * FROM Consumer WHERE email = ? AND password = ?",
    [email, password],
    (err, results) => {
      if (err) return res.status(500).json({ error: "Error logging in" });
      if (results.length > 0) {
        res.json({ message: "Login successful", user: results[0] });
      } else {
        res.status(401).json({ error: "Invalid email or password" });
      }
    }
  );
});

// Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
