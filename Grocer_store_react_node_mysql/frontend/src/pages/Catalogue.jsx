import { useEffect, useState } from "react";
import axios from "axios";

export default function Catalogue() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/items")
      .then((res) => setItems(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Items Catalogue</h2>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item.id} className="list-group-item">
            <strong>{item.name}</strong> - ₹{item.price} <br />
            <small>{item.description}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
