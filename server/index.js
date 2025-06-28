import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "John8341@..",  // <-- Replace with your actual password
  database: "crud",
  dateStrings: 'date'
});

db.connect(err => {
  if (err) {
    console.error(" Error connecting to database:", err);
  } else {
    console.log(" Connected to MySQL Database");
  }
});

app.listen(3030, () => {
  console.log(" Server is running on http://localhost:3030");
});


// ✅ GET ALL BOOKS
app.get('/books', (req, res) => {
  const sql = "SELECT * FROM book";
  db.query(sql, (err, data) => {
    if (err) return res.json({ error: "Failed to fetch books" });
    return res.json(data);
  });
});

// ✅ GET SINGLE BOOK BY ID
app.get('/book/:id', (req, res) => {
  const sql = "SELECT * FROM book WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) return res.json({ error: "Failed to fetch book" });
    return res.json(data[0]);
  });
});

// ✅ CREATE A BOOK
app.post('/create', (req, res) => {
  const sql = "INSERT INTO book (publisher, name, date) VALUES (?)";
  const values = [
    req.body.publisher,
    req.body.name,
    req.body.date
  ];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json({ error: "Failed to insert book" });
    return res.json({ message: "Book inserted successfully", data });
  });
});

// ✅ UPDATE A BOOK
app.put('/update/:id', (req, res) => {
  const sql = "UPDATE book SET publisher = ?, name = ?, date = ? WHERE id = ?";
  const values = [
    req.body.publisher,
    req.body.name,
    req.body.date
  ];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) return res.json({ error: "Failed to update book" });
    return res.json({ message: "Book updated successfully", data });
  });
});

// ✅ DELETE A BOOK
app.delete('/delete/:id', (req, res) => {
  const sql = "DELETE FROM book WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) return res.json({ error: "Failed to delete book" });
    return res.json({ message: "Book deleted successfully", data });
  });
});

// ✅ Server Listen
app.listen(3306, () => {
  console.log("🚀 Server is running on http://localhost:3306");
});
