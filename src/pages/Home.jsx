function Home() {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Biography"];
  const popularBooks = ["The Hobbit", "Sapiens", "Dune", "Steve Jobs", "Hello baby","Housefull 5"];

  return (
    <div className="container">
      <h2>Welcome to the Online Library System 📘</h2>

      <h3>Book Categories</h3>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>

      <h3>Popular Books</h3>
      <ul>
        {popularBooks.map((book) => (
          <li key={book}>
            {book} <a href="#">(View Details)</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
