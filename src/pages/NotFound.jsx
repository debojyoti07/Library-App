import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container">
      <h1 style={{ color: 'red' }}>404 - Page Not Found</h1>
      <p><Link to="/">Go back to Home</Link></p>
    </div>
  );
}

export default NotFound;
