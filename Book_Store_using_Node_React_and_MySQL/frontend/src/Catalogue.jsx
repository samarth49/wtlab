import axios from "axios";
import { useEffect, useState } from "react";

export default function Catalogue() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/books")
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch books. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="container mt-4">Loading books...</div>;
  if (error) return <div className="container mt-4 text-danger">{error}</div>;

  return (
    <div className="container mt-4">
      <h2>Book Catalogue</h2>
      <ul className="list-group">
        {books.map((b) => (
          <li className="list-group-item" key={b.id}>
            <strong>{b.title}</strong> by {b.author} — {b.description} — ₹{b.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
