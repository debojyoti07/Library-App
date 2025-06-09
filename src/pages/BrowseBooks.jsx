import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector(state => state.books.books);
  const [search, setSearch] = useState("");

  const filtered = books.filter(book =>
    book.category.toLowerCase() === category.toLowerCase() &&
    (book.title.toLowerCase().includes(search.toLowerCase()) ||
     book.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="container">
      <h2>{category} Books</h2>
      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filtered.length > 0 ? (
        filtered.map(book => (
          <div key={book.id} className="card">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <Link to={`/book/${book.id}`}>View Details</Link>
          </div>
        ))
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
}

export default BrowseBooks;