import React, { useState } from 'react';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Registered:\nName: ${form.name}\nEmail: ${form.email}`);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input 
            type="text" 
            className="form-control" 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            placeholder="Enter full name" 
            required 
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input 
            type="email" 
            className="form-control" 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
            placeholder="Enter email" 
            required 
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input 
            type="password" 
            className="form-control" 
            name="password" 
            value={form.password} 
            onChange={handleChange} 
            placeholder="Password" 
            required 
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
}
