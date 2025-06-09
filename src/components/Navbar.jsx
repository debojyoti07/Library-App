import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div>📚 Online Library</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/books/Fiction">Browse Books</Link>
        <Link to="/add">Add Book</Link>
      </div>
    </nav>
  );
}

export default Navbar;
