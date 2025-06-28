import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBook = () => {
  const [values, setValues] = useState({
    publisher: '',
    name: '',
    date: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3030/book/${id}`)
      .then(res => {
        const data = res.data;
        setValues({
          publisher: data.publisher,
          name: data.name,
          date: data.date ? data.date.slice(0, 10) : ''
        });
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3030/update/${id}`, values)
      .then(() => {
        alert("Book updated successfully!");
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-5">
      <h3>Update Book</h3>
      <form onSubmit={handleUpdate}>
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
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default UpdateBook;
