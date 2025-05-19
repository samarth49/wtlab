import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Catalogue from "./Catalogue";

export default function Home() {
  const [page, setPage] = useState("home"); // can be: 'home', 'login', 'register', 'catalogue'

  if (page === "login") return <Login />;
  if (page === "register") return <Register />;
  if (page === "catalogue") return <Catalogue />;

  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1 className="display-4">Welcome to Online Grocery Shop</h1>
        <p className="lead">Fresh groceries delivered at your doorstep!</p>
      </div>
      <div className="row mb-4">
        

        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h3>Why Choose Us?</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Wide variety of fresh products</li>
            <li className="list-group-item">Affordable prices</li>
            <li className="list-group-item">Fast and reliable delivery</li>
            <li className="list-group-item">Secure and easy online payments</li>
          </ul>

          <div className="mt-4 d-flex gap-3 flex-wrap">
            <button className="btn btn-primary" onClick={() => setPage("catalogue")}>
              Catalogue
            </button>
            <button className="btn btn-outline-primary" onClick={() => setPage("login")}>
              Login
            </button>
            <button className="btn btn-outline-success" onClick={() => setPage("register")}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
