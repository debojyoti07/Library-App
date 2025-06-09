import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector(state => state.books.books.find(b => b.id === id));

  if (!book) return <p className="container">Book not found.</p>;

  return (
    <div className="container">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Rating:</strong> {book.rating} ⭐</p>
      <p>{book.description}</p>
      <button onClick={() => navigate(-1)}>← Back to Browse</button>
    </div>
  );
}

export default BookDetails; 

