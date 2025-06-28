import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBook = () => {
  const [values, setValues] = useState({
    publisher: '',
    name: '',
    date: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3030/create", values)
      .then(() => {
        alert("Book created successfully!");
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-5">
      <h3>Create Book</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Publisher</label>
          <input
            type="text"
            className="form-control"
            value={values.publisher}
            onChange={(e) => setValues({ ...values, publisher: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Book Name</label>
          <input
            type="text"
            className="form-control"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            value={values.date}
            onChange={(e) => setValues({ ...values, date: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Create</button>
      </form>
    </div>
  );
};

export default CreateBook;
