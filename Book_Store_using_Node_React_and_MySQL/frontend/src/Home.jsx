import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container mt-5 text-center">
      <h1>Welcome to Our Website!</h1>
      <p className="lead">Explore our catalogue and enjoy shopping.</p>
      <Link to="/catalogue" className="btn btn-primary">Go to Catalogue</Link>
    </div>
  );
}
