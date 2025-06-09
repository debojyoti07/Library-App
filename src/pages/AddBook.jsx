import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const [form, setForm] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: ''
  });
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (Object.values(form).some(f => f.trim() === '')) {
      setError("Please fill all fields.");
      return;
    }
    dispatch(addBook({ ...form, id: Date.now().toString() }));
    navigate(`/books/${form.category}`);
  };

  return (
    <div className="container">
      <h2>Add a New Book</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} />
        <input name="author" placeholder="Author" onChange={handleChange} />
        <input name="category" placeholder="Category" onChange={handleChange} />
        <input name="rating" placeholder="Rating (e.g., 4.5)" onChange={handleChange} />
        <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
