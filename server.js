const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory array to store books
let books = [];

// GET /books - return all books
app.get('/books', (req, res) => {
  res.json(books);
});

// POST /books - add a new book
app.post('/books', (req, res) => {
  const { id, title, author } = req.body;
  if (!id || !title || !author) {
    return res.status(400).json({ message: "id, title, and author are required" });
  }
  books.push({ id, title, author });
  res.status(201).json({ message: "Book added", book: { id, title, author } });
});

// PUT /books/:id - update book by id
app.put('/books/:id', (req, res) => {
  const bookId = req.params.id;
  const { title, author } = req.body;

  const book = books.find(b => b.id === bookId);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (title) book.title = title;
  if (author) book.author = author;

  res.json({ message: "Book updated", book });
});

// DELETE /books/:id - delete book by id
app.delete('/books/:id', (req, res) => {
  const bookId = req.params.id;
  const initialLength = books.length;
  books = books.filter(b => b.id !== bookId);

  if (books.length === initialLength) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json({ message: "Book deleted" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});