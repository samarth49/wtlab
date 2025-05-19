import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/register", form)
      .then(() => alert("Registered"))
      .catch(() => alert("Error"));
  };

  return (
    <form className="container mt-4" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input className="form-control my-2" placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input className="form-control my-2" placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <input className="form-control my-2" type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
      <button className="btn btn-primary">Register</button>
    </form>
  );
}
