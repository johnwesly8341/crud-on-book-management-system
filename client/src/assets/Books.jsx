import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = () => {
    axios.get("http://localhost:3030/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      axios.delete(`http://localhost:3030/delete/${id}`)
        .then(() => {
          alert("Book deleted successfully");
          fetchBooks(); // refresh
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="container mt-5">
      <Link to="/create" className="btn btn-success mb-3">Create Book</Link>
      {books.length > 0 ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Publisher</th>
              <th>Book Name</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.publisher}</td>
                <td>{book.name}</td>
                <td>{book.date}</td>
                <td>
                  <Link to={`/update/${book.id}`} className="btn btn-primary btn-sm me-2">Edit</Link>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(book.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : <h4>No records found</h4>}
    </div>
  );
};

export default Books;
