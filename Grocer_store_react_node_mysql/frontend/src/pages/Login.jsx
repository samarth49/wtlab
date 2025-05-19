import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/login", form)
      .then((res) => alert(`Welcome ${res.data.user.name}`))
      .catch(() => alert("Invalid login"));
  };

  return (
    <form className="container mt-4" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input className="form-control my-2" placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <input className="form-control my-2" type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
      <button className="btn btn-success">Login</button>
    </form>
  );
}
