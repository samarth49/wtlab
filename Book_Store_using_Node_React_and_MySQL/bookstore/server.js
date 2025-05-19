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
  database: "book_store14",
});

app.get("/api/books", (req, res) => {
  db.query("SELECT * FROM books", (err, result) => {
    if (err) return res.status(500).json({ error: "Error fetching" });
    return res.json(result);
  });
});

app.post("/api/books", (req, res) => {
  const { title, author, description, price } = req.body;
  db.query(
    "INSERT INTO books (title,author,description,price) VALUES (?,?,?,?)",
    [title, author, description, price],
    (err, results) => {
      if (err) return res.status(500).json({ error: "Error inserting book" });
      return res
        .status(201)
        .json({ message: "Book inserted Successfully", id: results.insertId });
    }
  );
});

app.listen(4000, () =>
  console.log("Server listening on http://localhost:4000")
);
